import React from 'react';
import Radio from '../Radio/Radio';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8900/items") //items.json
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
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
            <Radio id={item.id} name={item.name} value={item.value} checked={item.checked} disabled={item.disabled} />
          ))}
        </div>


      );
    }
  }
}

export default List; //отрисовываю в футере