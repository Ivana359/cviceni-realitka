import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Estate } from '../components/Estate';

const aktualni_stranka = window.location.pathname
const adresa = aktualni_stranka.split('/').pop().replace('.html','')
const api = `https://apps.kodim.cz/daweb/trening-api/apis/realitka/${adresa}`

const response = await fetch (api)
const data = await response.json()

document.querySelector('#root').innerHTML = render(
  <>
    <Header/>
   <Estate title = {data.title} text={data.text} price={data.price} city={data.city} photo = {data.photo} name = {data.contact.name} email = {data.contact.email}  phone = {data.contact.phone}/>
  </>
);
