import React, {Component} from "react";
import Post from './PostObat';
import '../css/style.css';

class Obat extends Component{
    // Buat ambil data dari server API
    
    render(){
        return(
            <div class="card-body">
              <h5 class="card-title">Data Obat</h5>
              <p>Daftar Obat</p>
                {/* Buat Memanggil key */}
            </div>
        )
    }
}

export default Obat;