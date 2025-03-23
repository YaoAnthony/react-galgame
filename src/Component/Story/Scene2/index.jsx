//HOC
import withSceneLogic from "../withSceneLogic";

// antd
import { Avatar } from 'antd';

// ui
import { question } from "../../../Assets";
const Scene = (props) => {
    const { content, choices, handleChoice, changeScene, containerRef } = props;

    const choiceOption = (choice) => {
        console.log('handleChoice', choice);
        if (choice.next === 'jump1') {
            changeScene(1);
            return;
        }else if(choice.next === 'jump2'){
            changeScene(3);
            return;
        }

        handleChoice(choice);
    };

    return (
        <div style={{
            padding: '20px',
            color: '#fff',
        }}>
            {/* 🔸 渲染当前的对话和剧情 */}
            {content.map((item, index) => {
                switch (item.type) {
                    case 'text':
                        return (
                            <div key={index} style={{
                                marginBottom: '10px',
                                whiteSpace: 'pre-wrap',
                                fontSize: '18px',
                                lineHeight: '1.5'
                            }}>
                                {item.value}
                            </div>
                        );
                    case 'image':
                        return (
                            <img
                                key={index}
                                src={item.value}
                                alt=""
                                style={{
                                    width: '500px',
                                    height: 'auto',
                                    marginBottom: '10px',
                                    borderRadius: '8px'
                                }}
                            />
                        );
                        case 'dialog':
                            return (
                                <div key={index} style={{
                                    margin: '40px 0',
                                    whiteSpace: 'pre-wrap',
                                    fontSize: '18px',
                                    lineHeight: '1.5',
                                    display: 'flex',
                                    alignContent: 'center',
                                    gap: '10px'
                                }}>
                                    <Avatar src={item.img === null ? question : item.img} size={40} />
                                    <p
                                        style={{
                                            padding: '5px 0 ',
                                            flex: 1
                                        }}
                                    >{item.value}</p>
                                </div>
                            );
                    default:
                        return null;
                }
            })}

            {/* 🔸 渲染当前场景的选择按钮 */}
            {choices.length > 0 && (
                <div style={{
                    marginTop: '20px',
                    display: 'flex',
                    gap: '10px'
                }}>
                    {choices.map((choice, index) => (
                        <button
                            key={index}
                            onClick={() => choiceOption(choice)}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#444',
                                color: '#fff',
                                border: 'none',
                                cursor: 'pointer',
                                borderRadius: '5px',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#444'}
                        >
                            {choice.text}
                        </button>
                    ))}
                </div>
            )}

            {/* 🔸 保持滚动到底部 */}
            <div ref={containerRef} />
        </div>
    );
};

const Scene2 = withSceneLogic(Scene);
export default Scene2
