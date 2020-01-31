import React,{Component} from 'react'
import {connect} from 'react-redux'

const TodoList=(props)=>{
    const {inputValue,handleInputChange,handleClick,list,handleDelete } =props;
    return(
        <div>
        <div>
            <input value={inputValue} onChange={handleInputChange}></input>
            <button onClick={handleClick}>提交</button>
        </div>
        <div>
            <ul>
                {
                    list.map((item,index)=>{
                        return (
                        <li key={index} onClick={()=>{handleDelete(index)}}>
                            {item}
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
    )
}

// class TodoList extends Component{
//     render(){
//         const {inputValue,handleInputChange,handleClick,list,handleDelete } =this.props;
//         return (
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={handleInputChange}></input>
//                     <button onClick={handleClick}>提交</button>
//                 </div>
//                 <div>
//                     <ul>
//                         {
//                             list.map((item,index)=>{
//                                 return (
//                                 <li key={index} onClick={()=>{handleDelete(index)}}>
//                                     {item}
//                                 </li>
//                                 )
//                             })
//                         }
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }

const mapStateToProps=(state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputChange(e){
            const action = {
                type:'input_change',
                value:e.target.value
            }
            dispatch(action)
        },
        handleClick(){
            const action = {
                type:'click_change',
            }
            dispatch(action)
        },
        handleDelete(index){
            const action = {
                type:'delete_item',
                value:index
            }
            dispatch(action)
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(TodoList);