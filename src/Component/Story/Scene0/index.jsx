//HOC
import withSceneLogic from "../withSceneLogic";

const Scene = (props) => {
    const { content, choices, handleChoice, changeScene, containerRef } = props;

    /**
     * 这里负责做一些特殊选择的逻辑处理，比如到结尾了，跳转到下一个场景之类的
     */
    const choiceOption = (choice) => {
        if (choice.next === 'end') {
            changeScene(1);
            return;
        }

        // 除去特殊选择，其他的都是正常的选择逻辑
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

const SceneWithLogic = withSceneLogic(Scene);
export default SceneWithLogic
