
/* 리액트 쓰는 이유
1. Single page Application 만들 수 있음
2. component로 html 재사용이 편리함

개발환경 셋팅 및 프로젝트 생성
1. node.js 검색해서 설치(필수)
2. 터미널을 열고 npx create-next-app 프로젝트 명
3. 터미널에 npm start 작성해서 브라우저 창 열기

node_modules 폴더: 라이브러리 코드 보관함
public 폴더: static 파일 모아두는 곳
src 폴더: component 만드는 곳

package.json:프로젝트 정보
 */


// ********* hook ********

/* 
- useState
state: 컴포넌트의 상태 

const [state(현재상태값),setState(변경값)] = useState(초기값);
useState함수에 초기값을 인자로 넣어주면 state, setState를 배열로 리턴해줌
 */

/* import React, { useState } from 'react';

function ReactBasicMemo(props) {
    const [time,setTime] = useState(1);

    const handleClick = () => {
        let newTime;
        if(time >= 12){
            newTime = 1;
        } else {
            newTime = time + 1;
        }
        setTime(newTime)
    }

    return (
        <div>
            <span>현재시각:{time}시</span>
            <button onClick={handleClick}>Update</button>
        </div>
    );
}
    const heavyWork = () => {
        return['홍길동','김민수']
    };

    const [names, setNames] = useState(() => {
        return heavyWork(); //초기값을 가져올때 그 초기값이 무겁다면 콜백함수사용
    });
    const [input, setInput] = useState('');
    
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    const handleUpload = () => {
        setNames((prevState) => {
            return([input,...prevState])
        })
    }
    return(
        <div>
            <input type="text" value={input} onChange={handleInputChange}/>
            <button onClick={handleUpload}>Upload</button>
            {names.map((name,idx) => {
                return <p key={idx}>{name}</p>
            })}
        </div>
    )
export default ReactBasicMemo;
 */






/* 
- useEffect
어떠한 컴포넌트가 mount(화면에 첫 렌더링) 되었을때
다시 update(재랜더링) 되었을때 그리고 unmount(화면에서 사라짐)될때 특정한
작업을 해주고 싶다면 useEffect를 사용한다

useEffect(()=>{실행시킬 코드})

useEffect는 인자로 콜백함수를 전달받음
콜백함수는 다른 함수를 인자로 전달된 함수
콜백함수 내부의 원하는 작업을 실행시켜줄 코드를 작성함

useEffect의 두가지 형태

1. 인자로 하나의 콜백함수만 받음        2. 첫번째 인자로 콜백함수 두번째 인자로 배열을 받음 

useEffect(()=>{                         useEffect(()=>{
    //작업                                  //작업
});                                      },[value]);

컴퍼넌트가 화면에 랜더링될때마다        컴퍼넌트가 화면에 첫 렌더링 될때 실행
실행됨                                  value값이 바뀔때마다 실행 
                                        빈 배열을 전달해 준다면 화면에 첫 렌더링 될때 실행


Clean Up 작업 방법 - 정리
useEffe(() => {
    //구독,타이머실행 등등
    return() => { (리턴값으로 멈춤는 작업을 해주면 됨)
        //구독해지, 타이머 멈춤 등
    }
},[]);
 */
/* import React, { useEffect, useState } from 'react';

function ReactBasicMemo(props) {
    const [count,setCount] = useState(1);
    const [name, setName] = useState('');

    //렌더링 될때마다 매번 실행됨: 렌더링 이후
    useEffect(() => {
        console.log('렌더링')
    })
    //마운팅 + count가 변화할때마다 실행됨
    useEffect(() => {
        console.log('count의 변화')
    },[count])  

    //마운팅 + name이 변화할때마다 매번 실행됨
    useEffect(() => {
        console.log('name의 변화')
    },[name])  
    
    //빈 배열은 마운팅 될때 실행 
    useEffect(() => {
        console.log('마운팅')
    },[]) 

    const handleCountUpdate = () => {
        setCount(count + 1)
    }

    const handInputChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <button onClick={handleCountUpdate}>update</button>
            <span>count: {count}</span>
            <input type="text" value={name} onChange={handInputChange} />
            <span>이름:{name}</span>
        </div>
    );
}

export default ReactBasicMemo; 

import React, { useEffect, useState } from 'react';

function ReactBasicMemo(props) {
    const [showTimer,setShowTimer] = useState(false)
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머돌아가는중')
        },1000)
        return () => { //Clean Up 작업
            clearInterval(timer);
        }
    },[])
    return (
        <div>
            <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
            {showTimer && <span>타이머를 시작합니다 콘솔을 보세요</span>}
        </div>
    );
}

export default ReactBasicMemo;
*/

/* import React, { useState,useRef } from 'react';

function ReactBasicMemo(props) {
    const [count,setCount] = useState(0)
    const countRef = useRef(0); //Ref속 오브젝트에 접근하고 싶으면 countRef.current

    function increaseCountState(){
        setCount(count + 1)
    }

    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
    }
    return (
        <div>
            <p>State: {count}</p>
            <p>Ref: {countRef.current}</p>
            <button onClick={increaseCountState}>State 올립시다</button>
            <button onClick={increaseCountRef}>Ref 올립시다</button>
        </div>
    );
}

export default ReactBasicMemo;
 

import React, { useRef, useState } from 'react';

function ReactBasicMemo(props) {
    const [renderer,setrenderer] = useState(0)

    const countRef = useRef(0); //아무리 컴포넌트가 랜더링이 돼도 값을 유지 Ref의 값은 컴포넌트 전생애 주기를 통해 유지가 됨 브라우저에 마운팅 된 시점부터 마운트 해제될때까지 같은 값을 유지할 수 있음
    let countVar = 0; // 랜더링되면 함수 내부에 있는 값들이 초기화되어 0을 유지하기 때문에 화면에 나타나지 않음

    const increaseRef = () => {
        countRef.current = countRef.current + 1;
    }

    const increaseVar = () => {
        countVar = countVar + 1;
    }

    function doRendering(){
        setrenderer(renderer + 1)
    }

    const printResults = () => {
        console.log(`ref:${countRef.current}, var: ${countVar}`)
    }

    return (
        <div>
            <p>Ref: {countRef.current}</p>
            <p>Var: {countVar}</p>
            <button onClick={doRendering}>렌더</button>
            <button onClick={increaseRef}>Ref 올림</button>
            <button onClick={increaseVar}>Var 올림</button>
            <button onClick={printResults}>콘솔에 ref var 값 출력</button>
        </div>
    );
}

export default ReactBasicMemo;

import React, { useEffect, useRef, useState } from 'react';

// useRef는 변화는 감지하면서 랜더링을 발생시키면 안되는 값을 다룰때 사용

function ReactBasicMemo(props) {
    const [count ,setCount] = useState(1)
    const renderCount = useRef(1);
    
    useEffect(()=>{
        renderCount.current = renderCount.current + 1
        console.log(renderCount.current)
    });

    return (
        <div>
            <p>count:{count}</p>
            <button onClick={() => setCount(count + 1)}>올려</button>
        </div>
    );
}

export default ReactBasicMemo;
*/







/* 


- useRef
const ref = useRef(value)
=> {current: value}
언제나 수정이 가능하기때문에 언제든 원하는 값으로 변경 가능
반환된 ref는 컴퍼넌트의 생애주기를 통해 유지가 됨
컴퍼넌트가 계속해서 랜더링되도 컴퍼넌트가 언마운트 되기 전까지는
값을 그대로 유지할 수 있음

1. 저장공간
Ref는 State와 비슷하게 값을 저장해두는 저장공간으로 사용됨

State의 변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화
이때문에 원하지 않은 렌더링때문에 곤란해질때 Ref 사용

Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지가 됨

State의 변화 -> 렌더링 -> 그래도 Ref의 값은 유지됨

불필요한 렌더링을 방지할 수 있음!


2. DOM 요소에 접근

Ref를 통해 DOM요소에 접근해서 여러가지일들을 할 수 있다

ex) - input요소를 클릭하지 않아도 focus()주고 싶을 때

사용법
const 'ref' = useRef(value)
<input ref={ 'ref' }>



import React, { useEffect, useRef } from 'react';

function ReactBasicMemo(props) {
    const inputRef = useRef();
    useEffect(() => {
        // console.log(inputRef)
        inputRef.current.focus();
    },[])
    
    const login = () => {
        alert(`환영합니다 ${inputRef.current.value}!`)
        inputRef.current.focus()
    }
    
    return (
        <div>
            <input ref={inputRef} type="text" placeholder='user name' />
            <button onClick={login}>로그인</button>
        </div>
    );
}

export default ReactBasicMemo;
 */




/* 
- useContext

리액트로 만든 앱은 여러개의 컨포넌트로 이루워져있다(트리형태)
데이터흐름은 위에서 아래로 흐른다 (props)
데이터를 전달할때는 부모컨퍼넌트로부터 단계별로 자식 컨포넌트로 전달해야한다
이러한 문제들을 해결하기 위해 리액트에서 Context api 제공

Global Data(전역 데이터 주로 user,Theme,Language)를 모든 컨포넌트로 전달하기 위해 사용

그러나 꼭 필요할때만 Context를 사용하고 props도 사용하는것이 좋다
Context를 사용하면 컴포넌트를 재사용하기 어려워지는 경우도 있음
Context의 목적은 다양한 레벨에 있는 컴포넌트들에게 전역적인 데이터를 전달하기 위함이다



import React, { useState } from 'react';
import './useState.css'
import ContextKid from './ContextKid';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function ReactBasicMemo(props) {
    const [isDark,setIsDark] = useState(false);
    
    return(
        <UserContext.Provider value={'사용자'}>
        <ThemeContext.Provider value={{isDark,setIsDark}}>
            <ContextKid/>
        </ThemeContext.Provider>
        </UserContext.Provider>
    ) 
}

export default ReactBasicMemo;
 */



/* 
- useMemo
컴퍼넌트 Optimization 최적화

useMemo에서 Memo는 Memoization을 뜻함
Memoization이란?
: 동일한 값을 리턴하는 함수를 반복적으로 호출해야할때 맨 처음 값을 계산할때 해당값을 메모리에 저장해서
필요할때마다 또 다시 계산하지 않고 메모리에서 꺼내서 재사용하는 기법
 => 자주 필요한 값을 맨처음에 캐싱해둬서 그 값이 필요할때마다 다시 계산하지 않고 캐시에서 꺼내서 사용

! 함수형 컴포넌트가 렌더링이 된다는건 함수가 호출된다는 것
함수는 호출될때마다 모든 내부 변수를 초기화됨
함수 내에 있는 계산들이 매번 초기화되면 비효율적이게됨

useMemo는 처음에 계산된 결과값을 메모리에 저장해서 컨퍼넌트가 계속 렌더링이 되어도 다시 계산하지 않아도
처음에 계산한 값을 메모리에서 꺼내와서 재사용함


useMemo(()=>{
    return value;
},[item])

useMemo는 첫번째 인자로는 콜백함수 두번째 인자로 배열을 받음
콜백함수는 Memoization해줄 값을 계산해서 리턴해주는 함수. 콜백함수는 리턴하는 값이 useMemo가 리턴하는 값이 됨
배열은 의존성 배열로 배열안에 요소의 값이 업데이트 될때만 콜백함수를 다시 호출해서 Memoization된 값을
업데이트해서 다시 Memoization을 실행함 빈배열을 넘기면 맨처음 컴퍼넌트가 렌더링 되었을때만 값을 계산하고
이후에는 항상 Memoization된 값을 꺼내와서 사용

! useMemo도 꼭 필요한 곳에만 사용해야함 무분별하게 사용시 성능이 오히려 저하될 수 있음
- 값을 재활용하기 위해서 따로 메모리를 소비해서 저장해놓는건데 불필요한 값까지 Memoization해버리면 성능이 저하됨


import React, { useMemo, useState } from 'react';

const hardCalculate = (number) => {
    console.log('수학실허잉');
    for (let i = 0; i < 99999999; i++) {} //생각하는 시간
    return number + 10000;
}

const easyCalculate = (number) => {
    console.log('빠른 계산!!');
    return number + 1;
}

function ReactBasicMemo(props) {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    // const hardSum = hardCalculate(hardNumber);
    const hardSum = useMemo(()=>{
        return hardCalculate(hardNumber)
    },[hardNumber]) //의존성 배열
    const easySum = easyCalculate(easyNumber);

    return (
        <div>
            <h3>어려운 계산기</h3>
            <input
            type="number"
            value={hardNumber}
            onChange={(e) => setHardNumber(parseInt(e.target.value))}
            />
            <span> + 1000 = {hardSum}</span>

            <h3>쉬운 계산기</h3>
            <input
            type="number"
            value={easyNumber}
            onChange={(e) => setEasyNumber(parseInt(e.target.value))}
            />
            <span> + 1000 = {easySum}</span>
        </div>
    );
}

export default ReactBasicMemo;


import React, { useEffect, useMemo, useState } from 'react';

function ReactBasicMemo(props) {
    const [number,setNumber] = useState(0);
    const [isKorea,setIsKorea] = useState(true);

    const location = useMemo(()=>{
        return {
            country: isKorea ? '한국' : '외국',
        }
    },[isKorea]) 

    // const location = {
    //     country: isKorea ? '한국' : '외국'
    // }

    useEffect(() => {
        console.log('useEffect 호출')
    },[location])

    return (
        <div>
            <h2>하루에 몇끼 먹어요?</h2>
            <input
             type="number"
             value={number}
             onChange={(e) => setNumber(e.target.value)}
             />
             <hr />
            <h2>어느 나라에 있어요?</h2>
            <p>나라: {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기타자</button>
        </div>
    );
}

export default ReactBasicMemo;
*/



/* - useCallback
Memoization기법으로 컴퍼넌트 Optimization 최적화(위에 참고)

useCallback(()=>{
    return value; // Memoization해줄 콜백함수
},[item]) // 의존성 배열

인자로 전달한 콜백함수 그 자체를 Memoization 함
함수가 다시 필요할때마다 함수를 새로 생성하지 말고 필요할때마다 메모리에서 재사용

function Component(){
    const calculate = useCallback((num)=>{ //이렇게 함수를 쓰면 Component가 함수로써 호출될때 Memoization된 함수를 사용
        return num + 1
    },[item])
    return <div>{value}</div>
}


import React, { useCallback, useEffect, useState } from 'react';

function ReactBasicMemo(props) {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true)

    const someFunction = useCallback(() => {
        console.log(`someFunc: number: ${number}`)
    },[number])
    
    useEffect(() => {
        console.log("함수 변경")

    },[someFunction])

    return (
        <div>
            <input
             type="number"
             value={number}
             onChange={(e) => setNumber(e.target.value) }
             />
             <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
             <br />
             <button onClick={someFunction}>call someFunc</button>
        </div>
    );
}

export default ReactBasicMemo;


import React, { useCallback, useState } from 'react';
import CallbackBox from './CallbackBox';

function ReactBasicMemo(props) {
    const [size , setSize] = useState(100);
    const [isDark , setIsDark] = useState(false);

    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: 'pink',
            width: `${size}px`,
            height: `${size}px`
        };
    },[size])

    return (
        <div style={{
            backgroundColor: isDark ? 'black' : 'white',
        }}>
            <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            />
            <button onClick={() => setIsDark(!isDark)}> change Theme </button>
            <CallbackBox createBoxStyle={createBoxStyle}/>
        </div>
    );
}

export default ReactBasicMemo;

 */



/* 
- useReducer
useState처럼 State를 생성하고 관리할 수 있게 해줌
useReducer는 복잡한 State를 다룰 때 사용함

1. Reducer
    - State를 업데이트하는 역할을 함 컴퍼넌트의 State를 변경하고 싶다면 Reducer를 이용함

2. Dispatch
    - 요구

3. Action
    - 이 내용대로 업데이트됨

Dispatch(Action) --> Reducer(State,Action) --> State Update


import React, { useReducer, useState } from 'react';

// reducer - state를 업데이트 하는 역할 (은행)
// dispatch -state 업데이트를 위한 요구
// action - 요구의 내용

const ACTION_TYPES = {
    deposit: 'deposit',
    withdraw: 'withdraw'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.deposit :
            return state + action.payload;
        case ACTION_TYPES.withdraw :
            return state - action.payload;
        default:
            return state
    }
};

function ReactBasicMemo(props) {
    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer , 0);

    return (
        <div>
            <h2>useReducer 은행에 오신걸 환영합니다</h2>
            <p>잔고: {money}원</p>
            <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
            step='1000'
            />

            <button onClick={() => {
                dispatch({type: ACTION_TYPES.deposit, payload: number })                
            }}>예금</button>

            <button onClick={() => {
                dispatch({type: ACTION_TYPES.withdraw, payload: number })                
            }}>출금</button>
        </div>
    );
}

export default ReactBasicMemo;


import React, { useReducer, useState } from 'react';
import ReducerStudents from './ReducerStudents';

const reducer = (state,action) => {
    switch(action.type) {
        case 'add-student':
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false,
            }
        return {
            count: state.count + 1,
            students: [...state.students, newStudent]
        };
        case 'delete-student':
            return {
                count: state.count - 1,
                students: state.students.filter(students.id !== action.payload.id ),
            }
        default:
            return state;
    }
};

const initiaState = {
    count: 0,
    students: []
}

function ReactBasicMemo(props) {
    const [name,setName] = useState('')
    const [setdentInto,dispatch] = useReducer(reducer, initiaState);

    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수 : {setdentInto.count}</p>
            <input 
            type="text"
            placeholder='이름을 입력해주세요'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => {
                dispatch({type:'add-student',payload:{name}})
            }}>추가</button>
            {setdentInto.students.map(students => {
                return (<ReducerStudents
                     key={students.id} 
                     name={students.name} 
                     dispatch={dispatch} 
                     id={students.id}
                     />)
            })}
        </div>
    );
}

export default ReactBasicMemo;
*/




/* 
- custom Hooks
미리 훅을 이용해 만들어놓은 기능을 깔끔하게 재사용하기 위한 기능

function useEat( food ){
    //useState같은 훅으로 만든기능
    //useEffect도 가능
    return[eat, setFood]
}
:custom Hooks을 사용하는 컴포넌트 마다 custom Hooks이 가지는 다른 hook들은 완전히 독립적이기때문에
custom Hooks은 재사용에 유리함 
*/

import { useInput } from './CustomInput';

function dispalyMessage(message) {
    alert(message);

}

function ReactBasicMemo() {
    const [inputValue, handleChange, handleSubmit] = useInput('굿',dispalyMessage);

    return (
        <div>
            <h1>useInput</h1>
            <input value={inputValue} onChange={handleChange} />
            <button onClick={handleSubmit}>확인</button>
        </div>
    );
}

export default ReactBasicMemo;


/* 
Redux 쓰는 이유 

1.props를 사용할 수 없는 상황
 모든 component가 props없이 state 직접 꺼낼 수 있음

2.state 변경 관리할때 사용(상태관리)
 */