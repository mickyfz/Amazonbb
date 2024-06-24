/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    title
    description
    image
    images
    options
    avgRating
    ratings
    price
    oldPrice
    cartProducts {
      nextToken
      startedAt
      __typename
    }
    orderProducts {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const syncProducts = /* GraphQL */ `query SyncProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProducts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProductsQueryVariables,
  APITypes.SyncProductsQuery
>;
export const getCartProduct = /* GraphQL */ `query GetCartProduct($id: ID!) {
  getCartProduct(id: $id) {
    id
    userSub
    quantity
    option
    productID
    product {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCartProductQueryVariables,
  APITypes.GetCartProductQuery
>;
export const listCartProducts = /* GraphQL */ `query ListCartProducts(
  $filter: ModelCartProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userSub
      quantity
      option
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCartProductsQueryVariables,
  APITypes.ListCartProductsQuery
>;
export const syncCartProducts = /* GraphQL */ `query SyncCartProducts(
  $filter: ModelCartProductFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCartProducts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userSub
      quantity
      option
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCartProductsQueryVariables,
  APITypes.SyncCartProductsQuery
>;
export const getOrderProduct = /* GraphQL */ `query GetOrderProduct($id: ID!) {
  getOrderProduct(id: $id) {
    id
    quantity
    option
    productID
    product {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    orderID
    order {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOrderProductQueryVariables,
  APITypes.GetOrderProductQuery
>;
export const listOrderProducts = /* GraphQL */ `query ListOrderProducts(
  $filter: ModelOrderProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      quantity
      option
      productID
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrderProductsQueryVariables,
  APITypes.ListOrderProductsQuery
>;
export const syncOrderProducts = /* GraphQL */ `query SyncOrderProducts(
  $filter: ModelOrderProductFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncOrderProducts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      quantity
      option
      productID
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncOrderProductsQueryVariables,
  APITypes.SyncOrderProductsQuery
>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    userSub
    fullName
    phoneNumber
    country
    city
    address
    products {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const syncOrders = /* GraphQL */ `query SyncOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncOrders(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncOrdersQueryVariables,
  APITypes.SyncOrdersQuery
>;
export const cartProductsByProductID = /* GraphQL */ `query CartProductsByProductID(
  $productID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCartProductFilterInput
  $limit: Int
  $nextToken: String
) {
  cartProductsByProductID(
    productID: $productID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userSub
      quantity
      option
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CartProductsByProductIDQueryVariables,
  APITypes.CartProductsByProductIDQuery
>;
export const orderProductsByProductID = /* GraphQL */ `query OrderProductsByProductID(
  $productID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderProductFilterInput
  $limit: Int
  $nextToken: String
) {
  orderProductsByProductID(
    productID: $productID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      quantity
      option
      productID
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrderProductsByProductIDQueryVariables,
  APITypes.OrderProductsByProductIDQuery
>;
export const orderProductsByOrderID = /* GraphQL */ `query OrderProductsByOrderID(
  $orderID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderProductFilterInput
  $limit: Int
  $nextToken: String
) {
  orderProductsByOrderID(
    orderID: $orderID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      quantity
      option
      productID
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrderProductsByOrderIDQueryVariables,
  APITypes.OrderProductsByOrderIDQuery
>;
