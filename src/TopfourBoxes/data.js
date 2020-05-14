import React,{Component} from 'react';
import { Typography } from '@material-ui/core';
import '../welcome.css';

class Totrev extends Component {
    state = { 
        dataloaded:false,
        items:null
     }

    async componentDidMount(){
        const url="https://wygtwu2p2j.execute-api.ap-south-1.amazonaws.com/test";
        const response=await fetch(url);
        const data=await response.json();
        this.setState({dataloaded:true,items:data.dataForTopFourBoxes});
        }
    render() { 
        const items=this.state.items;

        if (!this.state.dataloaded) {
            return <div>loading...</div>;
          }
      
        if (!this.state.items) {
            return <div>didn't get data</div>;
          }
        return ( 
        
            <div>
                <Typography component="p" variant="h6">
                    {items.totalRevenue}
                </Typography>
                <Typography className="text">
                    Total Revenue
                </Typography>
            </div>
         );
    }
}
 
export default Totrev;