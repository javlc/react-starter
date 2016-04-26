import Hello from './components/Hello';
import SearchableTable from './components/SearchableTable';
import {data} from './components/data';
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(<Hello/>, document.getElementById('reactEntry'));
ReactDOM.render(<SearchableTable data={data}/>, document.getElementById('searchableTable'));

