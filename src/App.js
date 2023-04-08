import React from 'react';
import './App.css';
import './css/style.css'
import { useTable } from 'react-table'
import ItemObat from './Obat/Obat'
import ItemSapi from './Sapi/Sapi'
import ItemPakan from './Pakan/Pakan'
import ItemKaryawan from './Karyawan/Karyawan'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function uts_cart() {
  return (
    <Router>
      <aside id="sidebar" className="sidebar">

      <ul className="sidebar-nav" id="sidebar-nav">

        <li className="nav-item">
          <a className="nav-link " href="/">
            <i className="bx bx-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="/list_sapi">
            <i className="bi bi-menu-button-wide"></i><span>Data Sapi</span>
          </a>
          <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/list_pakan">
            <i className="bi bi-journal-text"></i><span>Data Pakan</span>
          </a>
          <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="/list_obat">
            <i className="bi bi-layout-text-window-reverse"></i><span>Data Obat</span>
          </a>
          <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="/list_karyawan">
            <i className="bi bi-journal-text"></i><span>Data Karyawan</span>
          </a>
        </li>
      </ul>

    </aside>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/list_sapi">
          <ListSapi />
        </Route>
        <Route exact path="/list_pakan">
          <ListPakan />
        </Route>
        <Route exact path="/list_obat">
          <ListObat />
        </Route>
        <Route exact path="/list_karyawan">
          <ListKaryawan />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <main id="main" class="main">

      <div class="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item">Dashboard</li>
          </ol>
        </nav>
      </div>

      <section class="section dashboard">
        <div class="row">

          <div class="col-lg-8">
            <div class="row">
            </div>
            <p>Halo</p>
          </div>

        </div>
      </section>

    </main>
  )
  
}

function ListSapi() {
  return (
    <main id="main" class="main">

      <div class="pagetitle">
        <h1>Data Sapi</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item">Data Sapi</li>
          </ol>
        </nav>
      </div>

      <section class="section dashboard">
        <div class="row">

          <div class="col-lg-8">
            <div class="row">
            </div>
              <ItemSapi />
          </div>

        </div>
      </section>

    </main>
  )
}

// function Pakan

function ListPakan() {
  return (
    <main id="main" class="main">

      <div class="pagetitle">
        <h1>Data Pakan</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item">Data Pakan</li>
          </ol>
        </nav>
      </div>

      {/* Konten Pakan */}

    </main>
  )
}

function ListObat() {
  return (
    <main id="main" class="main">

      <div class="pagetitle">
        <h1>Data Obat</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item">Data Obat</li>
          </ol>
        </nav>
      </div>

      <section class="section">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <ItemObat />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

// function Karyawan
function ListKaryawan() {
  return (
    <main id="main" class="main">

      <div class="pagetitle">
        <h1>Data Karyawan</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item">Data Karyawan</li>
          </ol>
        </nav>
      </div>

      {/* Konten Karyawan */}

    </main>
  )
}
