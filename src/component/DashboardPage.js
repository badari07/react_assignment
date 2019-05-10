import React, { Component } from 'react';
import {connect} from 'react-redux';
import {GET_USERS} from '../actions/types';



 class DashboardPage extends Component {

  componentDidMount(){
    this.props.getusers()
  }


  gotologinpage=()=>{
    this.props.history.push('/')
  }

  render() {
   const {users}=this.props;
    return (
      <div>
        <h2>Dashboard</h2>
        <div className="container">
              <h2> EmployeeList </h2>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone</th>
                          </tr>
                        </thead>
                         <tbody>
                          <tr>
                            <td>{users[0].name}</td>
                            <td>{users[0].age}</td>
                            <td>{users[0].gender}</td>
                            <td>{users[0].email}</td>
                            <td>{users[0].phoneNo}</td>
                          </tr>
                          <tr>
                            <td>{users[1].name}</td>
                            <td>{users[1].age}</td>
                            <td>{users[1].gender}</td>
                            <td>{users[1].email}</td>
                            <td>{users[1].phoneNo}</td>
                          </tr>
                          <tr>
                            <td>{users[2].name}</td>
                            <td>{users[2].age}</td>
                            <td>{users[2].gender}</td>
                            <td>{users[2].email}</td>
                            <td>{users[2].phoneNo}</td>
                          </tr>
                          <tr>
                            <td>{users[3].name}</td>
                            <td>{users[3].age}</td>
                            <td>{users[3].gender}</td>
                            <td>{users[3].email}</td>
                            <td>{users[3].phoneNo}</td>
                          </tr>
                          <tr>
                            <td>{users[4].name}</td>
                            <td>{users[4].age}</td>
                            <td>{users[4].gender}</td>
                            <td>{users[4].email}</td>
                            <td>{users[4].phoneNo}</td>
                          </tr>
                          <tr>
                            <td>{users[5].name}</td>
                            <td>{users[5].age}</td>
                            <td>{users[5].gender}</td>
                            <td>{users[5].email}</td>
                            <td>{users[5].phoneNo}</td>
                          </tr>
                        </tbody> 
                       
                      </table>
            </div>
        
        <div>
            <button onClick={this.gotologinpage}>Logout</button>
        </div>

      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  users:state.users.user
}
)

const mapDispatchToProps=(dispatch)=>({
  getusers:()=>dispatch({type:GET_USERS})
})


export default connect(mapStateToProps,mapDispatchToProps)(DashboardPage);