export default function template (win, teamName, lose, winRate) {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: `${teamName}`,
          weight: 'bold',
          size: 'xl'
        },
        {
          type: 'text',
          text: `勝場：${win}`,
          margin: 'lg'
        },
        {
          type: 'text',
          text: `敗場：${lose}`
        },
        {
          type: 'text',
          text: `勝率：${winRate}`,
          margin: 'lg'
        }
      ]
    }
  }
}
