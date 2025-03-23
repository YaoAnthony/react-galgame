import { 
    desert,
    afl,
    kos
} from "../../../Assets";

const script = {
    start : {
        content : [
            {
                type: 'image',
                value: desert
            },
            {
                type: 'text',
                value: "慢慢睁开眼睛。"
            },
            {
                type: 'text',
                value: "黄沙包裹着四周，灼热又干燥的空气裹挟着沙尘涌进你的口鼻。"
            },
            {
                type: 'text',
                value: "该死，你几乎要窒息了。"
            },
            {
                type: 'text',
                value: "狂风呼啸，你挣扎着站起身。"
            },
            {
                type: 'text',
                value: "在一望无垠的沙漠，你很难找到方向，你开始努力思考，但是很快被卡住。"
            },
            {
                type: 'text',
                value: "你是谁来着？"
            },
            {
                type: 'text',
                value: "你的名字似乎是 Kosmos，也许吧，但谁在乎呢。"
            },
            {
                type: 'image',
                value: kos
            },
            {
                type: 'dialog',
                img: null,
                value: "“你好。”"
            },
            {
                type: 'text',
                value: "你耳边响起一道温柔又祥和的声音。"
            }
        ],

        choices: [
            {
                type: 'text',
                text: "回头看看",
                next: "scene1"
            },
            {
                type: 'text',
                text: "向前走",
                next: "scene2"
            }
        ]
    },

    scene1: {
        content: [
            {
                type: 'text',
                value: "你一边回复，一边顺着声音看去。"
            },
            {
                type: 'text',
                value: "白色的兜帽下，少女的面庞充满圣洁，丝丝垂下的金色秀发像秋天丰收的麦浪。"
            },
            {
                type: 'image',
                value: afl
            },
            {
                type: 'text',
                value: "你几乎被迷住了。"
            },
            {
                type: 'text',
                value: "她微微一笑，金色的眼眸中似乎有着无尽的温柔。"
            },
            {
                type: 'dialog',
                img: kos,
                value: "“你是谁？” 你低声问。"
            },
            {
                type: 'text',
                value: "她轻轻地摇了摇头，嘴角仍然带着微笑。"
            },
            {
                type: 'dialog',
                
                name: "afl",
                affection: 6,
                img: afl,
                value: "“我来带你回家。”"
            }
        ],

        choices: [
            {
                type: 'text',
                text: "跟随她",
                next: "scene3"
            },
            {
                type: 'text',
                text: "拒绝她",
                next: "scene4"
            }
        ]
    },

    scene2: {
        content: [
            {
                type: 'text',
                value: "你深吸一口气，开始朝着沙漠的深处前行。"
            },
            {
                type: 'text',
                value: "烈日炙烤着你的皮肤，汗水顺着额角滑落，蒸发在灼热的空气中。"
            },
            {
                type: 'dialog',
                img: null,
                value: "“你要去哪里？” 那道声音再次响起。"
            },
            {
                type: 'text',
                value: "你猛地停下脚步，环顾四周——空无一人。"
            },
            {
                type: 'dialog',
                img: null,
                value: "“你是谁？” 你低声问道。"
            },
            {
                type: 'text',
                value: "没有回应，只有风沙在耳边呼啸。"
            }
        ],

        choices: [
            {
                type: 'text',
                text: "继续前行",
                next: "scene5"
            },
            {
                type: 'text',
                text: "返回去寻找声音的来源",
                next: "scene1"
            }
        ]
    },
    scene3: {
        content: [
            {
                type: 'text',
                value: "你跟在她的身后，白色的长袍在风中飘扬。"
            },
            {
                type: 'dialog',
                img: kos,
                value: "“我们去哪？”"
            },
            {
                type: 'dialog',
                img: afl,
                value: "“回家。”"
            },
            {
                type: 'text',
                value: "你心中一阵恍惚。"
            }
        ],

        choices: [
            {
                type: 'text',
                text: "相信她，继续跟随",
                next: "scene6"
            },
            {
                type: 'text',
                text: "停下来，质问她",
                next: "scene7"
            }
        ]
    },

    scene4: {
        content: [
            {
                type: 'text',
                value: "你退后了一步，警惕地看着她。"
            },
            {
                type: 'dialog',
                img: kos,
                value: "“我不认识你。”"
            },
            {
                type: 'text',
                value: "她的眼中闪过一丝失望，但很快又平静下来。"
            },
            {
                type: 'dialog',
                img: afl,
                value: "“那我只好等你了。”"
            }
        ],

        choices: [
            {
                type: 'text',
                text: "试图跟上她",
                next: "scene3"
            },
            {
                type: 'text',
                text: "转身离开",
                next: "scene5"
            }
        ]
    },

    scene5: {
        content: [
            {
                type: 'text',
                value: "你继续行走，烈日下，你的影子被拉得很长。"
            },
            {
                type: 'dialog',
                img: afl,
                value: "“你一定会回来的。”"
            }
        ],

        choices: [
            {
                type: 'text',
                text: "回头",
                next: "scene1"
            },
            {
                type: 'text',
                text: "继续前行",
                next: "scene6"
            }
        ]
    },

    scene6: {
        content: [
            {
                type: 'text',
                value: "你走了很远，远到连风都停息了。"
            },
            {
                type: 'text',
                value: "前方的沙漠中，出现了一座模糊的宫殿。"
            },
            {
                type: 'dialog',
                img: afl,
                value: "“欢迎回来。”"
            }
        ],

        choices: [
            {
                type: 'text',
                text: "走向宫殿",
                next: "scene8"
            },
            {
                type: 'text',
                text: "停下来，回头看她",
                next: "scene7"
            }
        ]
    }
};

export default script;
