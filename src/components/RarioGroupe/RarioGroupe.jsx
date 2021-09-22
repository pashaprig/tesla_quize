import React from 'react';
import Radio from '../Radio/Radio';

class RarioGroupe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8900/items") //radios.json
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div>
          {items.map(item => (
            <Radio key={item.id} id={item.id} name={item.name} value={item.value} checked={item.checked} disabled={item.disabled} />
          ))}
        </div>
      );
    }
  }
}

export default RarioGroupe;