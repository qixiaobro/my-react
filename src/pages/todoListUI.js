import React,{Component} from 'react'
import "antd/dist/antd.css";
import { Input,Button,List } from "antd";

const TodoListUI = (props)=>{//无状态组件，当组件只有render函数时写成无状态组件性能最优
    return (
        <div style={{padding:'10px'}}>
        <div>
        <Input
          placeholder="do something"
          style={{
            width: "300px"
          }}
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <Button type="primary" style={{marginLeft:'10px'}} onClick={props.buttonClick}> 提交</Button>
        </div>
        <List
          style={{ width: "300px",marginTop:'10px' }}
          size="small"
          bordered
          dataSource={props.list}
          renderItem={(item,index) => (<List.Item onClick={()=>{props.handleDeleteItem(index)}}>{item}</List.Item>)}
        />
      </div>
    )
}

// class TodoListUI extends Component{//UI组件

//     render(){
//         return(
//             <div style={{padding:'10px'}}>
//             <Input
//               placeholder="do something"
//               style={{
//                 width: "300px"
//               }}
//               value={this.props.inputValue}
//               onChange={this.props.handleInputChange}
//             />
//             <Button type="primary" style={{marginLeft:'10px'}} onClick={this.props.buttonClick}> 提交</Button>
//             <List
//               style={{ width: "300px",marginTop:'10px' }}
//               size="small"
//               bordered
//               dataSource={this.props.list}
//               renderItem={(item,index) => (<List.Item onClick={(index)=>{this.props.handleDeleteItem(index)}}>{item}</List.Item>)}
//             />
//           </div>
//         )
//     }
// }

export default TodoListUI