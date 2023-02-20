import React from "react";
import axios from 'axios';
import './notes.css'



export default class notes extends React.Component {
        constructor(props){
        super(props)
        this.state ={
            title:'',
            content: '',
            notes:[]
        }
        this.addnote = this.addnote.bind(this)
    }
    
    componentDidMount(){
        axios.get('/api/notes/get-notes').then(res=>{
            console.log(res.data)
           this.setState({
               notes: res.data
            })
        }).catch(er => { console.log(er.response.status) })

    }

    addnote = ()=>{
        axios.post('/api/notes/create',{title: this.state.title,content: this.state.content}).then(res=>{
            console.log(res.data)
        }).catch(er=>{console.log(er.response.data)})
        console.log(this.state.content)
        console.log(this.state.title)
        this.setState({title: '', content: ''})
        window.location.reload(true);
        
    }
    delete = (noteid)=>{
        axios.delete('api/notes/delete/'+ noteid).then(res=>{
            console.log(res.data)
            console.log("deleted")
        }).catch(er=>{console.log(er.response.data)})
        window.location.reload(true);
    }

    render(){
        return(
            <>
            
            <div className="main">
                <h1>NOTES-APP</h1>
                <input className="note-title" onChange={e=>this.setState({title: e.target.value})} value={this.state.title}  placeholder="Add title to your notes"/><br></br><br></br>
                <input className="note" onChange={e=>this.setState({content: e.target.value})} value={this.state.content}  placeholder="Tap here to add notes"/><br></br><br></br>
                <button className="note-btn" onClick={this.addnote}>Add Note</button><br></br><br></br>
            </div>    
            <div className="bottom">
            <div className="card-container">
                {this.state.notes.map((note,idx)=>(
                    <div key={idx} className='card'>
                        <div className="card-header">{note.title}</div>
                        <div className="card-body">{note.content}</div>
                        <div><img onClick={() => this.delete(note._id)}src="https://img.icons8.com/ios/256/trash--v1.png"></img></div>
                    </div>
                    
                ))}</div>
            </div>
            </>
        )
    }
}

