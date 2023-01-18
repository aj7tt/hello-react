import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3 ">
      <div className="col-4 product">
        <div className="card-deck" style={{ width: "18rem" }}>
          <img src={props.product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.product.name}</h5>
            <p className="card-text">{props.product.description}</p>
            <a
              href="https://github.com/aj7tt/Platform-dev/blob/main/README.md"
              className="btn btn-primary">Go somewhere
            </a>
          </div>
        </div>
        <div className="col-4 btn-grp">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" class="btn btn-danger">
              -
            </button>
            <button type="button" class="btn btn-warning">
              {props.product.quantity}
            </button>
            <button type="button" class="btn btn-success">
              +
            </button>
          </div>
        </div>
      </div>

      {/* <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        Remove
      </button> */}
    </div>
  );
}