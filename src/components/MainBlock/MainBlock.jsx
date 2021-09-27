import React from 'react';
import s from './MainBlock.module.scss';
import Hero from './../Hero/Hero';
import Content from './../Content/Content';

class MainBlock extends React.Component {
  componentDidMount(){
  }
  render() {
    return (
      <section className={s.pageMain}>
        <Hero />
        <Content 
          descriptionStart={ this.props.data.description_start }
          heading1={ this.props.data.h1 }
          startButtonText={ this.props.data.button_text_start }
        />
      </section>
    );
  }


}

export default MainBlock;