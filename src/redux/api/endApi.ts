import { baseApi } from './baseApi';

const TrenwaveApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (userInfo) => ({
        url: '/api/v1/create-user',
        method: 'POST',
        body: userInfo,
      }),
    }),

    // login route here
    login: build.mutation({
      query: (userInfo) => ({
        url: '/api/v1/login',
        method: 'POST',
        body: userInfo,
      }),
    }),

    // all user get route
    allUser: build.query({
      query: () => ({
        url: '/api/v1/user',
        method: 'GET',
      }),
    }),

    // tutor get route
    allTutor: build.query({
      query: () => ({
        url: '/api/v1/tutor',
        method: 'GET',
      }),
    }),

    // create note for student
    createNote: build.mutation({
      query: (body) => ({
        url: '/api/v1/note',
        method: 'POST',
        body,
      }),
    }),

    // get note based on email
    userNote: build.query({
      query: (email) => ({
        url: `/api/v1/note/${email}`,
        method: 'GET',
      }),
    }),

    // update note based on id
    updateNote: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/api/v1/note/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),

    // update user role from customer/seller to admin
    updateUser: build.mutation({
      query: ({ id, role }) => ({
        url: `/api/v1/user/${id}`,
        method: 'PATCH',
        body: { role },
      }),
    }),

    // post session route for tutor
    postSession: build.mutation({
      query: (body) => ({
        url: '/api/v1/session',
        method: 'POST',
        body,
      }),
    }),

    // all session data for admin role
    allProducts: build.query({
      query: () => ({
        url: '/api/v1/products',
        method: 'GET',
      }),
    }),

    // delete session from the admin
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/api/v1/products/${id}`,
        method: 'DELETE',
      }),
    }),

    // session approve from the admin
    approveSession: build.mutation({
      query: (id) => ({
        url: `api/v1/session/approve/${id}`,
        method: 'PATCH',
      }),
    }),

    // tutor session get with email query
    tutorSession: build.query({
      query: (email) => ({
        url: `/api/v1/session/email/${email}`,
        method: 'GET',
      }),
    }),

    // tutor approved session get
    tutorApprovedSession: build.query({
      query: (email) => ({
        url: `/api/v1/session/approved/${email}`,
        method: 'GET',
      }),
    }),

    // update product from admin
    updateProduct: build.mutation({
      query: ({ id, body }) => ({
        url: `/api/v1/products/${id}`,
        method: 'PATCH',
        body,
      }),
    }),

    // wishlist data post for customer
    wishlistPost: build.mutation({
      query: (body) => ({
        url: '/api/v1/wishlist',
        method: 'POST',
        body,
      }),
    }),

    // get wishlist data based on the email
    getWishlistByemail: build.query({
      query: (email) => ({
        url: `/api/v1/wishlist/${email}`,
        method: 'GET',
      }),
    }),

    // wishlist delete from customar
    deleteWishlist: build.mutation({
      query: (id) => ({
        url: `/api/v1/wishlist/${id}`,
        method: 'DELETE',
      }),
    }),

    // update material from tutor
    updateMaterial: build.mutation({
      query: ({ id, body }) => ({
        url: `/api/v1/material/${id}`,
        method: 'PATCH',
        body,
      }),
    }),

    // all orders get route
    allOrders: build.query({
      query: () => ({
        url: '/api/v1/orders',
        method: 'GET',
      }),
    }),

    // product post route for customer
    bookOrder: build.mutation({
      query: (body) => ({
        url: '/api/v1/orders',
        method: 'POST',
        body,
      }),
    }),

    // delete note based on id
    deleteOrder: build.mutation({
      query: (id) => ({
        url: `/api/v1/orders/${id}`,
        method: 'DELETE',
      }),
    }),

    // get order data based on the email
    getorderByemail: build.query({
      query: (email) => ({
        url: `/api/v1/orders/${email}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useAllUserQuery,
  useAllTutorQuery,
  useCreateNoteMutation,
  useUserNoteQuery,
  useDeleteOrderMutation,
  useUpdateNoteMutation,
  useUpdateUserMutation,
  useAllProductsQuery,
  useDeleteProductMutation,
  useApproveSessionMutation,
  usePostSessionMutation,
  useTutorSessionQuery,
  useTutorApprovedSessionQuery,
  useWishlistPostMutation,
  useGetWishlistByemailQuery,
  useDeleteWishlistMutation,
  useUpdateMaterialMutation,
  useAllOrdersQuery,
  useUpdateProductMutation,
  useGetorderByemailQuery,
  useBookOrderMutation,
} = TrenwaveApi;
