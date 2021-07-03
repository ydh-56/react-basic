import React, {useState} from 'react';
// nickname 부분 input 입력 안됨 ㅠㅠ
function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname:'',
    });
    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]: value,
            
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname:'',
        });
    };
    return (
        <div>
            <input name='name' placeholder='이름' onChange={onChange} value={name} />
            <input nickname='nickname' placeholder='닉네임' onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;