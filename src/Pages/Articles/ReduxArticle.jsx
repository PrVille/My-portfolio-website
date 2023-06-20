import React from "react";
import Page from "../../components/Page";
import Article from "../../components/Article";
import BackButton from "../../components/BackButton";
import Code from "../../components/Code";

const ReduxArticle = () => {

  return (
    <Page>
      <BackButton to="/articles" />
      <Article>
        <Article.Header>
          <Article.DateTime>April 8, 2023</Article.DateTime>
          <Article.Title>
            Simplifying CRUD Operations on a Normalized State with Redux Toolkit
          </Article.Title>
        </Article.Header>

        <Article.Prose>
          <p>
            Managing state in a Redux application can become more challenging
            when incorporating backend integration for CRUD operations. However,
            Redux Toolkit's <strong>createEntityAdapter</strong> combined with
            backend connectivity can streamline the process.
          </p>

          <img src="/redux-logo-landscape.png" /> 

          <p>
            In this article, we will explore how to leverage{" "}
            <strong>createEntityAdapter</strong> along with a backend to perform
            CRUD operations on a normalized state in your Redux application,
            focusing on an entity called "Product".
          </p>

          <h2>Understanding Normalized State</h2>

          <p>
            Before we dive into the integration, let's briefly revisit the
            concept of normalized state. In normalized state, entities are
            stored in a dictionary-like structure, each assigned a unique
            identifier. Relationships between entities are represented using
            these identifiers, enhancing performance, reducing redundancy, and
            simplifying data updates.
          </p>

          <h2>
            Introduction to <strong>createEntityAdapter</strong>
          </h2>

          <p>
            Redux Toolkit's <strong>createEntityAdapter</strong> simplifies
            normalized state management by providing predefined CRUD operations.
            It minimizes boilerplate code and facilitates adding, updating, and
            removing entities.
          </p>

          <p>To begin, ensure Redux Toolkit is installed:</p>

          <Code language="bash">{`npm install @reduxjs/toolkit`}</Code>

          <h2>Setting Up the Backend Integration</h2>

          <p>
            To integrate with a backend, we will use asynchronous actions and
            APIs to fetch and update data. Let's assume we have a backend API
            endpoint for products <strong>(/api/products)</strong>. We'll
            utilize Redux Toolkit's <strong>createAsyncThunk</strong> to create
            asynchronous actions. Here's an example:
          </p>

          <Code language="javascript">{`import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

const productAdapter = createEntityAdapter();

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await axios.get('/api/products');
  return response.data;
});

export const createProduct = createAsyncThunk('products/create', async (product) => {
  const response = await axios.post('/api/products', product);
  return response.data;
});

export const updateProduct = createAsyncThunk('products/update', async (product) => {
  const response = await axios.put(\`/api/products/\${product.id}\`, product);
  return response.data;
});

export const deleteProduct = createAsyncThunk('products/delete', async (id) => {
  await axios.delete(\`/api/products/\${id}\`);
  return id;
});

const productSlice = createSlice({
  name: 'products',
  initialState: productAdapter.getInitialState({
    status: 'idle',
    error: null,
    sort: {
      field: 'name',
      ascending: true,
    },
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        productAdapter.setAll(state, action.payload);
        state.status = 'succeeded';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        productAdapter.addOne(state, action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        productAdapter.updateOne(state, {
          id: action.payload.id,
          changes: action.payload,
        });
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        productAdapter.removeOne(state, action.payload);
      });
  },
});

export default productSlice.reducer;`}</Code>

          <h2>Working with CRUD Operations</h2>

          <p>
            With the backend integration in place, let's explore how to perform
            CRUD operations using <strong>createEntityAdapter</strong> and
            asynchronous actions.
          </p>

          <ul>
            <li>
              <h4>Fetching Products</h4>

              <p>
                To fetch products from the backend, dispatch the{" "}
                <strong>fetchProducts</strong> action. Upon success, the
                returned data will be stored in the state using the{" "}
                <strong>setAll</strong> method provided by the adapter:
              </p>

              <Code language="javascript">{`dispatch(fetchProducts());
`}</Code>
            </li>

            <li>
              <h4>Creating a Product</h4>

              <p>
                To create a new product, dispatch the{" "}
                <strong>createProduct</strong> action and provide the product
                object. The adapter's <strong>addOne</strong> method will add
                the product to the state after a successful response from the
                backend:
              </p>

              <Code language="javascript">{`dispatch(
  createProduct({ name: 'Shirt', price: 19.99, quantity: 10 })
);`}</Code>
            </li>

            <li>
              <h4>Updating and Deleting Products</h4>

              <p>
                Similarly, you can define actions like <strong>updateProduct</strong> and{" "}
                <strong>deleteProduct</strong> using Redux Toolkit's{" "}
                <strong>createAsyncThunk</strong> and corresponding API endpoints. Utilize the adapter's{" "}
                <strong>updateOne</strong> and <strong>removeOne</strong> methods within the respective{" "}
                extraReducers cases to update and delete entities from the state.
              </p>

              <Code language="javascript">{`dispatch(
  updateProduct({ id: 1, name: 'Updated Shirt', price: 24.99, quantity: 5 })
);

dispatch(deleteProduct(1));`}</Code>
            </li>
          </ul>

          <h2>Accessing Entities and Backend Data</h2>

          <p>
            To access entities stored in the state, you can use selectors
            generated by <strong>createEntityAdapter</strong>. Additionally, you
            can retrieve and display data from the backend using the state as
            needed. Here's an example:
          </p>

          <Code language="javascript">{`const sortedProducts = useSelector((state) => {
  const { field, ascending } = state.products.sort;
  const entities = state.products.entities;
  const sortedIds = productAdapter.getSelectors().selectAll(state).sort((a, b) => {
    const valueA = entities[a][field];
    const valueB = entities[b][field];

    if (valueA < valueB) {
      return ascending ? -1 : 1;
    }

    if (valueA > valueB) {
      return ascending ? 1 : -1;
    }

    return 0;
  });

  return sortedIds.map((id) => entities[id]);
});

sortedProducts.forEach((product) => console.log(product.name, product.price));
`}</Code>

          <p>
            In the above example, we use a selector to access the products stored in the state. We sort the products based on the "field" and "ascending" values from the state's sort object. The `productAdapter.getSelectors().selectAll` selector retrieves all the product IDs, and then we use those IDs to access the entities from the state. Finally, we iterate over the sorted products and log their name and price.
          </p>
          
          <p>
            By adding the "status" field to the initial state, you can track the status of the asynchronous operations (e.g., "loading," "succeeded," or "failed") and handle them accordingly in your UI. The "error" field can be used to store any error messages that occur during the asynchronous operations.
          </p>

          <p>
            This is an example of how you can enhance your Redux application by leveraging Redux Toolkit's <strong>createEntityAdapter</strong> to simplify CRUD operations on a normalized state. With the predefined reducers and selectors provided by the adapter, you can streamline your development process and focus on building your application's features.
          </p>
        </Article.Prose>
      </Article>
    </Page>
  );
};

export default ReduxArticle;
