class Message extends React.Component {
    constructor(props) {
      super(props);
      this.state = { msg : [] }
    }
  
    componentDidMount() {
      (async() => {
        const reponse = await fetch('http://localhost:3000/message')
        const reponseData = await reponse.json()
        if (reponse.ok){
          this.setState({
            msg : reponseData
          })
        }
      })
      ()
    }
  
    render() {
      const { msg } = this.state;

      console.log()
        return (
           
          <div>
            <ul>
              {msg.map(message => ( <li key={message.contentMsg}> {message.contentMsg} </li> ))}
            </ul>
          </div>
        );
      }
    }
  
  //   <ul>
  //   {msg.map(item => (
  //     <li key={item.contentMsg}>
  //       {item.contentMsg}
  //     </li>
  //   ))}
  // </ul>




ReactDOM.render(<Message/>, document.querySelector('#app'))

