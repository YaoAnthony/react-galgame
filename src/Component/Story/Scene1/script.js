import { 
    scene1BG
} from "../../../Assets";

const script = {
    start : {
        content : [
            {
                type: 'image',
                value: scene1BG
            },
            {
                type: 'text',
                value: "黑暗之中有一道尖锐刻薄的古怪声音吵醒了你"
            },
            {
                type: 'text',
                value: "“早上好，骑士阁下。”",
            },
        ],

        choices: [
            {
                text: "早上好?",
                next: "path1"
            }
        ]
    },

    path1 : {
        content : [
            {
                type: 'text',
                value: "“你似乎没睡醒？”"
            },
        ],

        choices: [
            {
                text: "你是谁？",
                next: "path2"
            }
        ]
    },

    path2 : {
        content : [
            {
                type: 'text',
                value: "“你不觉得这一点儿也不重要吗？骑士阁下。”"
            },
        ],

        choices: [
            {
                text: "为什么这么说？",
                next: "path3"
            }
        ]
    },

    path3 : {
        content : [
            {
                type: 'text',
                value: "“总之这并不重要，现在赶紧****（炼狱粗口）听好了，你已经死了！但是你有一个绝对重要的任务还没有完成，所以我***"
            },
            {
                type: 'text',
                value: "“（炼狱粗口）还不能让你死得那么轻松，懂吗。”"
            },
        ],

        choices: [
            {
                text: "“任务？”",
                next: "path4"
            }
        ]
    },

    path4 : {
        content : [
            {
                type: 'text',
                value: "“桀桀桀，没错。****（炼狱粗口）超超超超超级难的终极死亡挑战任务！”"
            },
        ],

        choices: [
            {
                text: "“那是什么？”",
                next: "path5"
            }
        ]
    },

    path5 : {
        content : [
            {
                type: 'text',
                value: "“自己睁开眼看吧！傻*(l炼狱粗口)孩子，还有什么比一场甜甜的恋爱还要****（炼狱粗口）死亡的呢。”"
            },
            {
                type: 'text',
                value: "荒诞的声音渐渐消失。"
            },
        ],

        choices: [
            {
                text: "\"睁开眼\"",
                next: "jump1"
            },
            {
                text: "\"傻*(炼狱粗口)才谈恋爱\"",
                next: "jump2"
            }
        ]
    },
}


  
export default script;
  