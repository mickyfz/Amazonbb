/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreateCartProduct = /* GraphQL */ `subscription OnCreateCartProduct(
  $filter: ModelSubscriptionCartProductFilterInput
) {
  onCreateCartProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCartProductSubscriptionVariables,
  APITypes.OnCreateCartProductSubscription
>;
export const onUpdateCartProduct = /* GraphQL */ `subscription OnUpdateCartProduct(
  $filter: ModelSubscriptionCartProductFilterInput
) {
  onUpdateCartProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCartProductSubscriptionVariables,
  APITypes.OnUpdateCartProductSubscription
>;
export const onDeleteCartProduct = /* GraphQL */ `subscription OnDeleteCartProduct(
  $filter: ModelSubscriptionCartProductFilterInput
) {
  onDeleteCartProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCartProductSubscriptionVariables,
  APITypes.OnDeleteCartProductSubscription
>;
export const onCreateOrderProduct = /* GraphQL */ `subscription OnCreateOrderProduct(
  $filter: ModelSubscriptionOrderProductFilterInput
) {
  onCreateOrderProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderProductSubscriptionVariables,
  APITypes.OnCreateOrderProductSubscription
>;
export const onUpdateOrderProduct = /* GraphQL */ `subscription OnUpdateOrderProduct(
  $filter: ModelSubscriptionOrderProductFilterInput
) {
  onUpdateOrderProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderProductSubscriptionVariables,
  APITypes.OnUpdateOrderProductSubscription
>;
export const onDeleteOrderProduct = /* GraphQL */ `subscription OnDeleteOrderProduct(
  $filter: ModelSubscriptionOrderProductFilterInput
) {
  onDeleteOrderProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderProductSubscriptionVariables,
  APITypes.OnDeleteOrderProductSubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onCreateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
  onDeleteOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
