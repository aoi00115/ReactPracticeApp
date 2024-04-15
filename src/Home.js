import React from 'react';
import PostList from './posts';
import './App.css';

const Home = () =>{
return(
    <div>
      <form>
        <label>User ID:</label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <label>Title:</label>
        <input type="text" required/>
        <label>Body:</label>
        <textarea required>
        </textarea>
        <button>Create Quote</button>
      </form>
       
    </div>
);
}

export default Home;