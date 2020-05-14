import React,{Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import Typography from '@material-ui/core/Typography';
import '../welcome.css';

// Generate Order Data
class Orders extends Component {
    state = { 
        dataloaded:false,
        items:null
     }

    async componentDidMount(){
        const url="https://wygtwu2p2j.execute-api.ap-south-1.amazonaws.com/test";
        const response=await fetch(url);
        const data=await response.json();
        this.setState({dataloaded:true,items:data.dataForBottomRightTable});
        }
 
render() {   
    if (!this.state.dataloaded) {
        return <div>loading...</div>;
      }
  
    if (!this.state.items) {
        return <div>didn't get data</div>;
      } 
    console.log(this.state.items.product)
  
    const item=this.state.items;
    console.log(item[1]);
    return (
  

    <React.Fragment>
      <Title>Recent Orders</Title>
      <Typography variant="subtitle2" className="text">All your recent orders are diplayed below!!</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Order Date</TableCell>
            <TableCell>Order Number</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Customer Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
        {item.map(item =>
            <TableRow key={item.product}>
              <TableCell>{item.product}</TableCell>
              <TableCell>{item.orderDate}</TableCell>
              <TableCell>{item.orderNumber}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.customerName}</TableCell>
            </TableRow>
        )}
        </TableBody>
      </Table>
    </React.Fragment>
  );
          }
}
 
export default Orders;
   
    