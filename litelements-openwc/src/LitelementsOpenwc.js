import { html, css, LitElement } from 'lit';

export class LitelementsOpenwc extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--litelements-openwc-text-color, #000);
    }
   
  `;

  static get properties() {
    return {
      nombre: {
        type: String,
      },
      email: {
        type: Boolean,
      },
      verMas: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.verMas = false;
  }

  toggle(e) {
    e.preventDefault();
    this.verMas = !this.verMas;
  }
render() {
    return html`
      <style>
        div {
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 5px;
          display: inline-block;
        }
        h1 {
          font-size: 1.2em;
          font-weight: normal;
        }
      </style>
      <div>
        <h1>${this.nombre}</h1>
        <p><a href="#" @click="${this.toggle}">Ver más..</a></p>
        ${this.verMas
          ? html`Email: pao@gmail.com ${this.email}`
          : ''}
      </div>
    `;
  }
}