import React from 'react';
import { useState } from 'react-native';
import './style.css';

export default function App() {
  return (
    <>
      <div className="tabbar" onChange={() => {}}>
        <input type="radio" id="Profile" label="Profile" name="tabs" />
        <input type="radio" id="Repository" label="Repository" name="tabs" />
        <input type="radio" id="followers" label="followers" name="tabs" />
        <input type="radio" id="Comments" label="Comments" name="tabs" />
      </div>
    </>
  );
}
