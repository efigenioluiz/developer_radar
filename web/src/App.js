import React from 'react';
import './css/global.css'
import './css/App.css'
import './css/Sidebar.css'
import './css/Main.css'

function App() {
  return (
    <div id="App">
        <aside>
            <strong>Cadastrar</strong>
            <form>
                <div className="input-block">
                    <label htmlFor="github_username"> Usuário o Github </label>      
                    <input name="github_username" id="github_username" required></input>
                </div>
               
                <div className="input-block">
                    <label htmlFor="techs"> Tecnologias </label>      
                    <input name="techs" id="techs" required></input>
                </div>
                
                <div className="input-group">
                    <div className="input-block">
                        <label htmlFor="latitude">Latitude </label>      
                        <input name="latitude" id="latitude" required></input> 
                    </div>                     

                    <div className="input-block">
                        <label htmlFor="longitude"> Longitude </label>      
                        <input name="longitude" id="longitude" required></input> 
                    </div>
                </div>

                <button type="submit">Salvar</button>
            </form>          
        </aside>

        <main>
            <ul>
                <li className="developer-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/38774516?s=460&v=4" alt=""/>
                        <div className="user-info">
                            <strong>Luiz Carlos</strong>
                            <span> Ruby, Python, React Native</span>
                            <p>BIIO</p>
                            <a href="https://github.com/efigenioluiz">a</a>
                        </div>
                    </header>
                </li>
                <li className="developer-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/38774516?s=460&v=4" alt=""/>
                        <div className="user-info">
                            <strong>Luiz Carlos</strong>
                            <span> Ruby, Python, React Native</span>
                            <p>BIIO</p>
                            <a href="https://github.com/efigenioluiz">a</a>
                        </div>
                    </header>
                </li> 
                <li className="developer-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/38774516?s=460&v=4" alt=""/>
                        <div className="user-info">
                            <strong>Luiz Carlos</strong>
                            <span> Ruby, Python, React Native</span>
                            <p>BIIO</p>
                            <a href="https://github.com/efigenioluiz">a</a>
                        </div>
                    </header>
                </li> 
                <li className="developer-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/38774516?s=460&v=4" alt=""/>
                        <div className="user-info">
                            <strong>Luiz Carlos</strong>
                            <span> Ruby, Python, React Native</span>
                            <p>BIIO</p>
                            <a href="https://github.com/efigenioluiz">a</a>
                        </div>
                    </header>
                </li> 
            </ul>
        </main>
    </div>
  );
}

export default App;
