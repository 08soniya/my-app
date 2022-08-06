import React, { useState } from 'react'

export default function About() {
    const darkMode = () =>{
      if(myStyle.color==='#000'){
        newStyle({
          color:'#fff',
          backgroundColor:'#000'
        });
        newBtnText("Disable Dark mode");
      } 
      else 
      {
        newStyle({
          color:'#000',
          backgroundColor:'#fff'
        });
        newBtnText("Enable Dark mode");
      }      
    }
    const [myStyle,newStyle] = useState(
      {
        color: '#000',
        backgroundColor: '#fff'
      }
    );
    const [btnText,newBtnText] = useState('Enable Dark mode');
    return (
      <div className="container mt-4 p-4" style={myStyle}>
      <h1 className=''>About</h1>
      <p>Placeholder text to demonstrate some <a href="#" data-bs-toggle="tooltip" data-bs-title="Default tooltip">inline links</a> with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of <a href="#" data-bs-toggle="tooltip" data-bs-title="Another tooltip">real text</a>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how <a href="#" data-bs-toggle="tooltip" data-bs-title="Another one here too">these tooltips on links</a> can work in practice, once you use them on <a href="#" data-bs-toggle="tooltip" data-bs-title="The last tip!">your own</a> site or project.
</p>
        <p className="muted">Placeholder text to demonstrate some <a href="#" data-bs-toggle="tooltip" data-bs-title="Default tooltip">inline links</a> with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of <a href="#" data-bs-toggle="tooltip" data-bs-title="Another tooltip">real text</a>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how <a href="#" data-bs-toggle="tooltip" data-bs-title="Another one here too">these tooltips on links</a> can work in practice, once you use them on <a href="#" data-bs-toggle="tooltip" data-bs-title="The last tip!">your own</a> site or project.
</p>
      <button type="button" className='btn btn-primary' onClick={darkMode}>{btnText}</button>
      </div>
    )
}