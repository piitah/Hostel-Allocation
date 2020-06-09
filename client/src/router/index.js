import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
 { 
    path: "/",
      name: "Index",
      component: () =>
        import("../views/users/index.vue"),
      meta: {
        requiresAuth : true,
        studentAuth : true,
        adminAuth: false
      },
      children: [
        {
          path: "",
          name: "Profile",
          component: () =>
            import("../views/users/Profile.vue")
        },
        {
          path: "book-hostel",
          name: "Book",
          component: () =>
            import("../views/users/Book.vue")
        },
        {
          path: `book-hostel/:id`,
          name: "viewdetail",
          component: () =>
            import("../views/users/viewRoom.vue")
        },
        {
          path: "agent",
          name: "Agent",
          component: () =>
            import("../views/users/agent.vue")
        }
      ]
  },
  { 
    path: "/index",
      name: "Index",
      component: () =>
        import("../views/index.vue")
  },
  { 
    path: "/register",
      name: "Register",
      component: () =>
        import("../views/Register.vue")
  },
  { 
    path: "/admin",
      name: "Admin",
      component: () =>
        import("../views/admin/index.vue"),
      meta: {
        requiresAuth : true,
        studentAuth : false,
        adminAuth: true
      },
      children: [
        {
          path: "",
          name: "Dashboard",
          component: () =>
            import("../views/admin/dashboard.vue")
        },
        
        {
          path: "new-hostel",
          name: "AddHostel",
          component: () =>
            import("../views/admin/AddHostel.vue")
        },
        {
          path: "hostel-report",
          name: "HostelReport",
          component: () =>
            import("../views/admin/HostelReport.vue")
        },
        {
          path: "manage-student",
          name: "ManageSTudent",
          component: () =>
            import("../views/admin/ManageStudent.vue")
        },
        {
          path: "student/:id",
          name: "EditStudent",
          component: () =>
            import("../views/admin/EditStudent.vue")
        },
        {
          path: "edit-room",
          name: "EditRoom",
          component: () =>
            import("../views/admin/EditRoom.vue")
        },
        {
          path: "bed-details",
          name: "BedDetails",
          component: () =>
            import("../views/admin/BedDetails.vue")
        },
        {
          path: "hostel-report/:id",
          name: "RoomDetails",
          component: () =>
            import("../views/admin/RoomDetails.vue")
        },
      ],
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
