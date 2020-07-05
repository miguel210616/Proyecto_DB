import React from 'react';

class BadgeForm extends React.Component {
state={};

    handleChange = e => {
//        console.log({
//            name: e.target.name,
 //           value: e.target.value,
  //      });
        this.setState({
            firstName : e.target.value,

        })
    };
   
    handleClick = e => {
        console.log('Button was clicked');
    };
            
   handleSubmit = e => {
       e.preventDefault();
       console.log("Form was submit");
   };
    
    render(){
        return(
            <div className="form-group">
                <h1>Nueva Consulta</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Codigo</label>
                        <input onChange={this.handleChange} 
                        className="form-control" 
                        type="text"
                         name="firstName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Universidad</label>
                        <input onChange={this.handleChange} 
                        className="form-control" 
                        type="text"
                         name="firstName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Filial</label>
                        <input onChange={this.handleChange} 
                        className="form-control" 
                        type="text"x
                         name="firstName" />
                    </div>
                    <button onClick={this.handleClick}  
                        className="btn btn-primary">Buscar</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;