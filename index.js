import 'dotenv/config'
import linebot from 'linebot'
import team from './commands/team.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', (event) => {
  if (process.env.DEBUG === 'true') {
    console.log(event)
  }

  if (event.message.type === 'text') {
    if (event.message.text === '東區隊伍') {
      event.reply({
        type: 'text',
        text: '你要查詢東區哪支隊伍呢?',
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                text: '東區1',
                label: '東區1'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '東區2',
                label: '東區2'
              }
            }
          ]
        }
      })
    } else if (event.message.text === '西區隊伍') {
      event.reply({
        type: 'text',
        text: '你要查詢西區哪支隊伍呢?',
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                text: '西區1',
                label: '西區1'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '西區2',
                label: '西區2'
              }
            }
          ]
        }
      })
    }
  }
  if (event.message.text === '東區1') {
    event.reply({
      type: 'text',
      text: '你要查詢東區哪支隊伍呢?',
      quickReply: {
        items: [
          {
            type: 'action',
            action: {
              type: 'message',
              text: '塞爾蒂克',
              label: '塞爾蒂克'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '公鹿',
              label: '公鹿'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '76人',
              label: '76人'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '魔術',
              label: '魔術'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '熱火',
              label: '熱火'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '尼克',
              label: '尼克'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '騎士',
              label: '騎士'
            }
          }
        ]
      }
    })
  } else if (event.message.text === '東區2') {
    event.reply({
      type: 'text',
      text: '你要查詢東區哪支隊伍呢?',
      quickReply: {
        items: [
          {
            type: 'action',
            action: {
              type: 'message',
              text: '溜馬',
              label: '溜馬'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '籃網',
              label: '籃網'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '公牛',
              label: '公牛'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '老鷹',
              label: '老鷹'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '暴龍',
              label: '暴龍'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '黃蜂',
              label: '黃蜂'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '巫師',
              label: '巫師'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '活塞',
              label: '活塞'
            }
          }
        ]
      }
    })
  }
  if (event.message.text === '西區1') {
    event.reply({
      type: 'text',
      text: '你要查詢西區哪支隊伍呢?',
      quickReply: {
        items: [
          {
            type: 'action',
            action: {
              type: 'message',
              text: '灰狼',
              label: '灰狼'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '金塊',
              label: '金塊'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '雷霆',
              label: '雷霆'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '快艇',
              label: '快艇'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '獨行俠',
              label: '獨行俠'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '國王',
              label: '國王'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '鵜鶘',
              label: '鵜鶘'
            }
          }
        ]
      }
    })
  } else if (event.message.text === '西區2') {
    event.reply({
      type: 'text',
      text: '你要查詢西區哪支隊伍呢?',
      quickReply: {
        items: [
          {
            type: 'action',
            action: {
              type: 'message',
              text: '火箭',
              label: '火箭'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '湖人',
              label: '湖人'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '勇士',
              label: '勇士'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '太陽',
              label: '太陽'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '爵士',
              label: '爵士'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '灰熊',
              label: '灰熊'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '拓荒者',
              label: '拓荒者'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              text: '馬刺',
              label: '馬刺'
            }
          }
        ]
      }
    })
  }
  team(event)
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
