import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getTestData,addUser,deletedata} from '../service/actions/actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
    return {
        userData: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTestDataHandlar: bindActionCreators(getTestData, dispatch),
        addUser:bindActionCreators(addUser, dispatch),
        deletedata:bindActionCreators(deletedata, dispatch),
    }
}

class TestiMonial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData:{
                name:'',
                post:'',
                desc:'',
                edit:false
            }
        }        
    }

    refresh = ()=>{   
        this.props.getTestDataHandlar();
    }

    handleChange = (field,e)=>{   
        let userData = this.state.userData;
        userData[field] = e.target.value;        
        this.setState({userData});
    }

    componentDidMount(){
        this.props.getTestDataHandlar();
    }

    addUser = ()=>{
        this.props.addUser(this.state.userData);
        this.resetdata()
        this.refresh();
    }
    deletedata = (id)=>{
        this.props.deletedata(id);
        this.refresh();
    }
    editdata = (name,post,desc,id)=>{
        this.setState({userData:{
            name:name,
            post:post,
            desc:desc,
            edit:id
        }});
        this.refresh();
    }
    resetdata = ()=>{
        this.setState({userData:{
            name:'',
            post:'',
            desc:'',
            edit:false
        }});
    }

    render() {
        return (
            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h4>{this.state.userData.edit ? 'Update':'Add'} New Testimonial</h4>
                        <div className="form-group col-12">
                            <label>Name:</label>
                            <input type="text" className="form-control" placeholder="Enter Name" name="name"
                                value={this.state.userData.name} 
                                onChange={(e)=>this.handleChange("name",e)}
                            />
                        </div>
                        <div className="form-group col-12">
                            <label>Post:</label>
                            <input type="text" className="form-control" placeholder="Enter Post" name="post"
                                value={this.state.userData.post} 
                                onChange={(e)=>this.handleChange("post",e)}
                            />
                        </div>
                        <div className="form-group col-12">
                            <label>Description:</label>
                            <input type="text" className="form-control" placeholder="Enter Description" name="desc"
                                value={this.state.userData.desc} 
                                onChange={(e)=>this.handleChange("desc",e)}
                            />
                        </div><br />
                        <button type="button" className="btn btn-primary form-group col-5" onClick={this.addUser} >Submit</button>
                        <button type="button" className="btn btn-danger form-group col-5 float-right" onClick={this.resetdata} >Reset</button>
                    </div>
                    <div className="col-8">
                    <h4>Testimonial List <button type="button" className="btn btn-primary btn-sm" onClick={this.refresh} >Refresh</button></h4><br />
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Post</th>
                            <th>Description</th>
                            <th>Updated On</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.userData.getData.user_data && this.props.userData.getData.user_data.length>0 ? this.props.userData.getData.user_data.map((item,key)=>(
                            <tr key={key} >
                                <td><img src="assets/images/logo.svg" width="30" alt="Photo" /></td>
                                <td>{item.name}</td>
                                <td>{item.post}</td>
                                <td>{item.desc}</td>
                                <td>{item.updated}</td>
                                <td>
                                    <button type="button" className="btn btn-danger btn-sm" onClick={()=>this.deletedata(item._id)} >Delete</button>
                                    <button type="button" className="btn btn-primary btn-sm" onClick={()=>this.editdata(item.name,item.post,item.desc,item._id)} >Edit</button>
                                </td>
                            </tr>
                        )): <tr><td className="text-center" colSpan="6">No Data</td></tr>}

                        </tbody>
                    </table>
                    </div>
                </div></div>            
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TestiMonial);