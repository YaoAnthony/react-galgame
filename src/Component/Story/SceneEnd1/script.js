import { end1 } from "../../../Assets";

const script = {
    start : {
        content : [
            {
                type: 'text',
                value: "”那你就去死吧，没人爱惜的小可爱！“"
            },
            {
                type: 'text',
                value: ""
            },
            {
                type: 'text',
                value: "—-GAME OVER—-"
            },
            {
                type: 'image',
                value: end1
            },
        ],

        choices: [
            {
                text: "重新开始",
                next: "end"
            }
        ]
    },

}


  
export default script;
  