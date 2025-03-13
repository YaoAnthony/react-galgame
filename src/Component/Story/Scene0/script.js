import { gameBackground } from "../../../Assets";

const script = {
    start : {
        content : [
            {
                type: 'image',
                value: gameBackground
            },
            {
                type: 'text',
                value: "欢迎游玩文字冒险游戏：《病娇圣女与奴隶骑士》"
            },
            {
                type: 'text',
                value: "“病娇圣女会爱上奴隶骑士吗？”—-猹拉吐司特辣如是说",
            },
            {
                type: 'text',
                value: "本游戏由AOS Studio工作室制作"
            }
        ],

        choices: [
            {
                text: "Continue",
                next: "path1"
            }
        ]
    },

    path1 : {
        content : [
            {
                type: 'text',
                value: "《健康游戏忠告》"
            },
            {
                type: 'text',
                value: "抵制不良游戏，拒绝盗版游戏。"
            },
            {
                type: 'text',
                value: "注意自我保护，谨防受骗上当。"
            },
            {
                type: 'text',
                value: "适度游戏益脑，沉迷游戏伤身。"
            },
            {
                type: 'text',
                value: "合理安排时间，享受健康生活。"
            }
        ],

        choices: [
            {
                text: "开始游戏",
                next: "end"
            }
        ]
    }
}


  
export default script;
  