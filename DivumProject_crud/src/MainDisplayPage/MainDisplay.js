import React from 'react'
import Display from "./Display";
import MainLayout from "../Layout__/MainLayout.js";
import { useState } from "react";

const MainHeader = () => {
  return (
    <main>
    <MainLayout >
      <Display />
    </MainLayout>
  </main>
  )
}

export default MainHeader