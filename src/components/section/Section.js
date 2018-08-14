import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
  render() {
    return (
        <div className='sectionPerfil'>
            <div className='infoPerfil'>
                <div className='fotoPerfil'>
                    <img src="" alt=""/>
                </div>
                <div>
                    <h1 className='nomePerfil'>Ana Costa</h1>
                    <p>São Paulo, SP</p>
                </div>
            </div>
                <div>
                    <button className='adicionarRole'>+</button>
                    <p>adicionar rolê</p>
                </div>
        <div>
            <div>
                <div className='secao'>
                    <h2>Minha Galera</h2>
                    <div className='meusAmigos'>
                        <div className='amigos'></div>
                        <div className='amigos'></div>
                        <div className='amigos'></div>
                        <div className='amigos'></div>
                        <div className='amigos'>
                            <p>+24</p>
                        </div>
                    </div>                
                </div>
            </div>
            <div>
                <div className='secao'>
                    <h2>Meus Interesses</h2>
                    <div className='meusInteresses'>
                        <div className='interesses'></div>
                        <div className='interesses'></div>
                        <div className='interesses'></div>
                        <div className='interesses'></div>
                        <div className='interesses'>
                            <p>+5</p>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
        <div className='secao'>
            <h2>Eventos Anteriores</h2>
            <div>
                <div className='eventosAnteriores'></div>
                <div className='eventosAnteriores'></div>
            </div>
        </div>
        <div className='toNaPista'>
            <h3>TÔ NA PISTA</h3>
        </div>
    </div>
    );
  }
}

export default Section;