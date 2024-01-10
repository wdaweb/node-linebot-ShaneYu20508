// team.js
import axios from 'axios'
import cheerio from 'cheerio'
import template from '../templates/team.js'

export default async function team (event) {
  if (!event.message || event.message.type !== 'text') {
    console.log('Invalid message format:', event.message)
    return
  }

  const userMessage = event.message.text.trim()

  if (userMessage) {
    try {
      // 使用axios獲取表格頁面的HTML
      const response = await axios.get('https://tw-nba.udn.com/nba/standings/')
      const data = response.data

      // 使用Cheerio解析HTML
      const $ = cheerio.load(data)

      // 找到表格的所有行
      const rows = $('table.stable.matchup.standings tbody tr')

      // 隊伍陣列
      const teamNames = []

      // 勝場、敗場、勝率陣列
      const winArray = []
      const loseArray = []
      const winRateArray = []

      // 遍歷每一行
      rows.each((index, row) => {
        const teamName = $(row).find('td a').text().trim()
        let sanitizedTeamName
        if (teamName.includes('76人')) {
          sanitizedTeamName = '76人'
        } else {
          // 使用正規表達式移除開頭的數字，只保留文字部分
          sanitizedTeamName = teamName.replace(/^\d+/, '')
        }
        const win = $(row).find('td:eq(1)').text().trim()
        const lose = $(row).find('td:eq(2)').text().trim()
        const winRate = $(row).find('td:eq(3)').text().trim()

        teamNames.push(sanitizedTeamName)
        winArray.push(win)
        loseArray.push(lose)
        winRateArray.push(winRate)
      })

      // 輸出隊伍名稱和數據檢查是否正確
      console.log('Team Names:', teamNames)
      console.log('Wins:', winArray)
      console.log('Loses:', loseArray)
      console.log('Win Rates:', winRateArray)

      // 判斷使用者輸入的文字是否與隊伍名稱相對應
      for (let i = 0; i < teamNames.length; i++) {
        if (teamNames[i].includes(userMessage)) {
          // 使用提供的模板生成泡泡
          const bubble = template(winArray[i], teamNames[i], loseArray[i], winRateArray[i])

          // 回復泡泡模板
          event.reply({
            type: 'flex',
            altText: 'NBA Standings',
            contents: bubble
          })
          return
        }
      }
      const replyMsg = {
        type: 'text',
        text: `找不到 ${userMessage} 這支隊伍`
      }
      event.reply(replyMsg)
    } catch (error) {
      console.error('Error fetching data:', error.message)
      event.reply('發生錯誤，請稍後再試。')
    }
  }
}
