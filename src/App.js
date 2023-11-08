import './App.css';
import React,{useState} from 'react';


function App() {
    /// initialization of State
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');



    return (
        <div className="App">
            <div className="container">
                <h2>BMI Calculator</h2>
                <form>
                    <div>
                        <label>Weight (lbs)</label>
                        <input type="number" placeholder="Enter weight value" required value={weight} onChange={(e) => setWeight(e.target.value)}></input>
                    </div>

                    <div>
                        <label>Height (inch)</label>
                        <input type="number" placeholder="Enter height value" required value={height} onChange={(event) => setHeight(event.target.value)}></input>
                    </div>

                    <div>
                        <button className='btn' type="submit">Submit</button>
                        <button className='btn onClick={reload} btn-outline' >Reload</button>
                    </div>

                    <div className="message">
                        <h3>Your BMI is: {bmi}</h3>
                        <p>{message}</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
