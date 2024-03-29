const dummyData = {
  properties: [
    {
      id: 1,
      title: 'Earthen Bottle',
      price: '48',
      imageSrcs: ['https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'],
      description:
        'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      address: 'nicholson',
      city: 'fairfield',
      state: 'iowa',
      zipCode: '52557',
      listingType: 'RENT',
      propertyType: 'HOUSE',
      propertyStatus: 'AVAILABLE',
      owner: 3,
    },
    
    {
      id: 2,
      title: 'Nomad Tumbler',
      price: '35',
      imageSrcs: ['https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'],
      description: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      address: '1000N',
      city: 'fairfield',
      state: 'iowa',
      zipCode: '52557',
      listingType: 'RENT',
      propertyType: 'HOUSE',
      propertyStatus: 'AVAILABLE',
      owner: 3,
    },
    {
      id: 3,
      title: 'Focus Paper Refill',
      price: '89',
      imageSrcs: ['https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg'],
      description: 'Person using a pen to cross a task off a productivity paper card.',
      address: '1000N',
      city: 'fairfield',
      state: 'iowa',
      zipCode: '52557',
      listingType: 'RENT',
      propertyType: 'HOUSE',
      propertyStatus: 'AVAILABLE',
      owner: 3,
    },
    {
      id: 4,
      title: 'Machined Mechanical Pencil',
      price: '35',
      imageSrcs: ['https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg'],
      description: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      address: '1000N',
      city: 'fairfield',
      state: 'iowa',
      zipCode: '52557',
      listingType: 'RENT',
      propertyType: 'HOUSE',
      propertyStatus: 'CONTINGENT',
      owner: 4,
    },
    {
      id: 5,
      title: 'Machined Mechanical Pencil',
      price: '35',
      imageSrcs: ['https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg'],
      description: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      address: '1000N',
      city: 'fairfield',
      state: 'iowa',
      zipCode: '52557',
      listingType: 'RENT',
      propertyType: 'HOUSE',
      propertyStatus: 'UNAVAILABLE',
      owner: 4,
    },
  ],

  users: [
    {
      id: 1,
      firstName: 'admin1',
      lastName: 'admin1',
      email: 'admin@gmail.com',
      role: 'admin',
    },
    {
      id: 2,
      firstName: 'customer1',
      lastName: 'customer1',
      email: 'customer@gmail.com',
      role: 'customer',
      favorites: [1],
    },
    {
      id: 3,
      firstName: 'owner1',
      lastName: 'owner1',
      email: 'owner@gmail.com',
      role: 'owner',
    },
    {
      id: 4,
      firstName: 'owner2',
      lastName: 'owner2',
      email: 'owner2@email.com',
      role: 'owner',
    },
  ],
  offers: [
    {
      id: 1,
      propertyId: 1,
      propertyTitle: 'Earthen Bottle',
      customerUserId: 2, // customer@gmail.com
      customerEmail: 'customer@gmail.com',
      ownerUserId: 3, // owner@gmail.com
      offferPrice: 1000,
      message: "I'm interested in this property",
      status: 'PENDING',
    },
  ],
};

export default dummyData;
