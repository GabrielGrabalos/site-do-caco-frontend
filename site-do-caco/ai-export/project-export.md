# 📦 AI Project Export

## 📁 Folder Structure

```
├── .ai-export-snapshot.json
├── .env.example
├── README.md
├── components.json
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── postcss.config.js
├── src
│   ├── App.jsx
│   ├── components
│   │   └── ui
│   │       ├── accordion.jsx
│   │       ├── alert-dialog.jsx
│   │       ├── alert.jsx
│   │       ├── badge.jsx
│   │       ├── button.jsx
│   │       ├── calendar.jsx
│   │       ├── card.jsx
│   │       ├── date-input.jsx
│   │       ├── dialog.jsx
│   │       ├── dropdown-menu.jsx
│   │       ├── input.jsx
│   │       ├── label.jsx
│   │       ├── popover.jsx
│   │       ├── price-input.jsx
│   │       ├── scroll-area.jsx
│   │       ├── select.jsx
│   │       ├── separator.jsx
│   │       ├── sheet.jsx
│   │       ├── slider.jsx
│   │       ├── switch.jsx
│   │       ├── tabs.jsx
│   │       ├── textarea.jsx
│   │       ├── toast.jsx
│   │       └── use-toast.jsx
│   ├── features
│   │   ├── admin
│   │   │   ├── AdminLayout.jsx
│   │   │   ├── components
│   │   │   │   ├── ConfirmDeleteDialog.jsx
│   │   │   │   ├── DatePicker.jsx
│   │   │   │   ├── StatsCards.jsx
│   │   │   │   └── TimeInput.jsx
│   │   │   ├── dashboard
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── banner
│   │   │   │   │   ├── Banner.js
│   │   │   │   │   ├── components
│   │   │   │   │   │   ├── BannerItem.jsx
│   │   │   │   │   │   ├── BannersSection.jsx
│   │   │   │   │   │   └── CreateBannerModal.jsx
│   │   │   │   │   └── useAdminBannersVM.js
│   │   │   │   └── warning
│   │   │   │       ├── Warning.js
│   │   │   │       ├── components
│   │   │   │       │   ├── CreateWarningModal.jsx
│   │   │   │       │   ├── FilterButtons.jsx
│   │   │   │       │   ├── SeveritySelector.jsx
│   │   │   │       │   ├── WarningItem.jsx
│   │   │   │       │   ├── WarningPreview.jsx
│   │   │   │       │   └── WarningsSection.jsx
│   │   │   │       ├── models
│   │   │   │       │   └── WarningSeverity.js
│   │   │   │       └── useAdminWarningsVM.js
│   │   │   ├── event
│   │   │   │   ├── AdminEventsPage.jsx
│   │   │   │   ├── Event.js
│   │   │   │   ├── components
│   │   │   │   │   ├── EventForm.jsx
│   │   │   │   │   └── EventItem.jsx
│   │   │   │   └── useAdminEventsVM.js
│   │   │   ├── exams
│   │   │   │   ├── AdminExamBankPage.jsx
│   │   │   │   ├── components
│   │   │   │   │   ├── CreateExamModal.jsx
│   │   │   │   │   ├── CreateSubjectModal.jsx
│   │   │   │   │   ├── ExamItem.jsx
│   │   │   │   │   ├── ExamList.jsx
│   │   │   │   │   ├── ExamsSection.jsx
│   │   │   │   │   └── SubjectTabs.jsx
│   │   │   │   ├── models
│   │   │   │   │   ├── Exam.js
│   │   │   │   │   └── Subject.js
│   │   │   │   └── useAdminExamsVM.js
│   │   │   ├── manual
│   │   │   │   ├── AdminManualPage.jsx
│   │   │   │   ├── components
│   │   │   │   │   ├── ArticleItem.jsx
│   │   │   │   │   ├── CategoryItem.jsx
│   │   │   │   │   ├── ChapterItem.jsx
│   │   │   │   │   ├── CreateArticleModal.jsx
│   │   │   │   │   ├── CreateCategoryModal.jsx
│   │   │   │   │   └── CreateChapterModal.jsx
│   │   │   │   ├── models
│   │   │   │   │   ├── ManualArticle.js
│   │   │   │   │   ├── ManualCategory.js
│   │   │   │   │   └── ManualChapter.js
│   │   │   │   └── useAdminManualVM.js
│   │   │   └── store
│   │   │       ├── AdminStorePage.jsx
│   │   │       ├── components
│   │   │       │   ├── CreateProductModal.jsx
│   │   │       │   ├── ManageProductImagesModal.jsx
│   │   │       │   ├── ProductList.jsx
│   │   │       │   ├── ProductVariationsDialog.jsx
│   │   │       │   ├── ProductVariationsModal.jsx
│   │   │       │   ├── StoreCategoriesSection.jsx
│   │   │       │   ├── StoreCategoryDialog.jsx
│   │   │       │   ├── StoreCategoryTabs.jsx
│   │   │       │   ├── StoreProductDialog.jsx
│   │   │       │   ├── StoreProductItem.jsx
│   │   │       │   ├── StoreProductsSection.jsx
│   │   │       │   └── StoreSection.jsx
│   │   │       ├── useAdminStoreCategoriesVM.js
│   │   │       └── useAdminStoreProductsVM.js
│   │   ├── auth
│   │   │   ├── CallbackPage.jsx
│   │   │   └── LoginPage.jsx
│   │   ├── calendar
│   │   │   ├── CalendarPage.jsx
│   │   │   ├── components
│   │   │   │   ├── CalendarDay.jsx
│   │   │   │   ├── CalendarHeader.jsx
│   │   │   │   ├── CalendarPageWithFilters.jsx
│   │   │   │   ├── EventCard.jsx
│   │   │   │   ├── EventFilters.jsx
│   │   │   │   ├── EventPreviewModal.jsx
│   │   │   │   ├── MobileCalendarView.jsx
│   │   │   │   └── MonthGrid.jsx
│   │   │   ├── hooks
│   │   │   │   └── useEventFilters.js
│   │   │   └── useCalendarVM.js
│   │   ├── events
│   │   │   ├── EventPage.jsx
│   │   │   ├── components
│   │   │   │   ├── Countdown.jsx
│   │   │   │   ├── EventGallery.jsx
│   │   │   │   ├── EventInfo.jsx
│   │   │   │   ├── EventParticipationStats.jsx
│   │   │   │   └── GalleryGrid.jsx
│   │   │   └── useEventVM.js
│   │   ├── exams
│   │   │   ├── ExamBankPage.jsx
│   │   │   ├── components
│   │   │   │   ├── ExamCard.jsx
│   │   │   │   ├── ExamFilters.jsx
│   │   │   │   ├── ExamList.jsx
│   │   │   │   └── SubjectFolder.jsx
│   │   │   └── useExamBankVM.js
│   │   ├── home
│   │   │   ├── HomePage.jsx
│   │   │   ├── components
│   │   │   │   ├── BannerCarousel.jsx
│   │   │   │   ├── LatestNews.jsx
│   │   │   │   ├── NavButtons.jsx
│   │   │   │   ├── QuickLinks.jsx
│   │   │   │   ├── SearchBar.jsx
│   │   │   │   └── WarningAlert.jsx
│   │   │   └── useHomeVM.js
│   │   ├── manual
│   │   │   ├── ManualPage.jsx
│   │   │   ├── components
│   │   │   │   ├── Breadcrumb.jsx
│   │   │   │   ├── FeedbackSection.jsx
│   │   │   │   ├── FeedbackWidget.jsx
│   │   │   │   └── ManualSidebar.jsx
│   │   │   └── useManualVM.js
│   │   ├── news
│   │   │   ├── NewsDetailPage.jsx
│   │   │   ├── NewsListPage.jsx
│   │   │   ├── components
│   │   │   │   └── NewsCard.jsx
│   │   │   ├── useNewsDetailVM.js
│   │   │   └── useNewsListVM.js
│   │   ├── profile
│   │   │   ├── ProfilePage.jsx
│   │   │   ├── components
│   │   │   │   └── EditAvatarModal.jsx
│   │   │   └── useProfileVM.js
│   │   ├── stickers
│   │   │   ├── StickerAlbumPage.jsx
│   │   │   ├── components
│   │   │   │   ├── AlbumGrid.jsx
│   │   │   │   ├── RedeemInput.jsx
│   │   │   │   ├── StickerItem.jsx
│   │   │   │   ├── StickerModal.jsx
│   │   │   │   └── StickerSlot.jsx
│   │   │   └── useStickerAlbumVM.js
│   │   └── store
│   │       ├── ProductDetailPage.jsx
│   │       ├── StorePage.jsx
│   │       ├── components
│   │       │   ├── CategoryTabs.jsx
│   │       │   ├── ProductCard.jsx
│   │       │   ├── ProductGrid.jsx
│   │       │   ├── ProductImageGallery.jsx
│   │       │   └── ProductInfo.jsx
│   │       ├── useProductDetailVM.js
│   │       └── useStoreVM.js
│   ├── index.css
│   ├── lib
│   │   └── utils.js
│   ├── main.jsx
│   └── shared
│       ├── components
│       │   ├── Footer.jsx
│       │   ├── Header.jsx
│       │   ├── HeaderSearchBar.jsx
│       │   ├── ImageUploadDialog.jsx
│       │   ├── MDXEditor.css
│       │   ├── MDXEditor.jsx
│       │   ├── MainLayout.jsx
│       │   ├── MarkdownContent.jsx
│       │   ├── NavigationMenu.jsx
│       │   ├── ProfilePopover.jsx
│       │   ├── ProtectedRoute.jsx
│       │   ├── SessionExpiryWarning.jsx
│       │   └── ThemeToggle.jsx
│       ├── contexts
│       │   └── ThemeContext.jsx
│       ├── hooks
│       │   ├── useHeaderSearch.js
│       │   ├── useImageCropper.js
│       │   └── useScrollDirection.js
│       ├── services
│       │   ├── analyticsService.js
│       │   ├── apiClient.js
│       │   ├── authService.js
│       │   ├── contentService.js
│       │   ├── contentService.new.js
│       │   ├── eventService.js
│       │   ├── examService.js
│       │   ├── imageUploadService.js
│       │   ├── manualService.js
│       │   ├── storeService.js
│       │   └── warningService.js
│       ├── types
│       │   ├── dtos.js
│       │   └── index.js
│       └── utils
│           ├── cookies.js
│           ├── formatters.js
│           ├── helpers.js
│           └── imageCrop.js
├── tailwind.config.js
└── vite.config.js
```

## 🔄 Changes Since Last Export
- Added: 18
- Modified: 25
- Removed: 2

## 🌱 Git Info
- Branch: cleanup
- Commit: be0eef5

## 🤖 AI Instructions


You are a senior software engineer.

Tasks:
- Explain architecture and flow
- Review code quality and best practices

## 📄 .ai-export-snapshot.json
```json
{
  ".ai-export-snapshot.json": "a056ed624b3c0c9462e0db829783cad200fe0c28",
  ".env.example": "8a440e169fa2c55e0729c97fd2c47e92e51c94c8",
  "README.md": "7c3ecbc5f3b26f80b279cb1fe4b7ede6c0011aed",
  "components.json": "e925f13719e33d42e36f763054217fde1fb2f7aa",
  "eslint.config.js": "baccf4a538dcc70a7aad89d2d10261c2ec7176cb",
  "index.html": "14ea25ed69b8e590cf38d7bc794b3334db72c27d",
  "jsconfig.json": "18d2856ecfaa1e2df31a29f039dbc708edeb81f3",
  "package.json": "5da685e076fd18b13d402fc87dec98ea15f3a786",
  "postcss.config.js": "211016771cee108602ec598738d916b332ee0f02",
  "src/App.jsx": "646d615e9f8a4342edf2e36e4bede8dc2021bf93",
  "src/components/ui/accordion.jsx": "e9892dc81b81924bdcb28482beeb7180b2b935e9",
  "src/components/ui/alert-dialog.jsx": "6babea4e383a5d9a67e01c323d1e905a8c73539c",
  "src/components/ui/alert.jsx": "5caaea72aeb54adb543dea577db20dfc17b45f78",
  "src/components/ui/badge.jsx": "df40cfbf63e6fdcb67f4d815ba3b68fd37908221",
  "src/components/ui/button.jsx": "c15e39325c8e3f638e820b7f82b340c5d4e10c52",
  "src/components/ui/calendar.jsx": "d9d38fa3bcb5c505c8877522b79c2d81c7f7bee8",
  "src/components/ui/card.jsx": "3883b57bc8103a6d730986a82128ab575de240ce",
  "src/components/ui/date-input.jsx": "bbff18309e9bcaf9697cb399832e927cbf4b3863",
  "src/components/ui/dialog.jsx": "37c1da12354179d66bdf3b2dba6f221bfc523865",
  "src/components/ui/input.jsx": "261b4f034f5231fb53aa7039e855e5b8bcfdb519",
  "src/components/ui/label.jsx": "b54df927af1b5b38efd7601318bfce5773c0bc89",
  "src/components/ui/popover.jsx": "83dece08c83c4263f346268f9363ca5fce349a8e",
  "src/components/ui/price-input.jsx": "1765ad59de98bf99f3763af43dec33724d37d1cf",
  "src/components/ui/scroll-area.jsx": "16aebe83b7eece5c310324628c314fc548b879a4",
  "src/components/ui/sheet.jsx": "f2a811fd5f40f2fa6fb0fd060ef4a3b85eb18a2f",
  "src/components/ui/slider.jsx": "a8abdfe80c0210d02005a11e6b4815148f57ceab",
  "src/components/ui/switch.jsx": "60a07d77d68588e5238853288ae4e1fd434444eb",
  "src/components/ui/tabs.jsx": "d067967ffa51b26272cce30fa98073762d85a0a1",
  "src/components/ui/textarea.jsx": "9daa5904dacc908030062ab061140dce6e4b1b85",
  "src/components/ui/toast.jsx": "cb630f1f2813e7f0b6ad136be81c1011e8449ddd",
  "src/components/ui/use-toast.jsx": "814547a26ca6e4c4df48230d0988f253c03c2a0d",
  "src/features/admin/AdminLayout.jsx": "8545b46b78e7d617ec26b1be5788db302ccce340",
  "src/features/admin/components/ConfirmDeleteDialog.jsx": "8ab25085646a31f02ffceefbd4a670b22aec5483",
  "src/features/admin/components/DatePicker.jsx": "46c2c8660c92aced36debe248276c2b5ffc11a30",
  "src/features/admin/components/StatsCards.jsx": "b334e7a48c9dcb5da3a7fc91a8b922741f684f3e",
  "src/features/admin/components/TimeInput.jsx": "407391822316a92ab479274080d8ff7ec91432cb",
  "src/features/admin/dashboard/AdminDashboard.jsx": "073373ec6937b8c5d41aebce9e83282b698c5a3b",
  "src/features/admin/dashboard/banner/Banner.js": "e214eaf7bd739adfe160c2522bdc8df12f4a9f17",
  "src/features/admin/dashboard/banner/components/BannerItem.jsx": "54e7a5f0d2ba9da4e3b64424506ecb4deb2036e4",
  "src/features/admin/dashboard/banner/components/BannersSection.jsx": "39f5eea38057965c7427f7dddd24b59927702a92",
  "src/features/admin/dashboard/banner/components/CreateBannerModal.jsx": "5b1ffca52d3b435cd4b3d3a6774626d6aeaf04b0",
  "src/features/admin/dashboard/banner/useAdminBannersVM.js": "22e1dee34ece4b837df416b15ed3172d9b256d52",
  "src/features/admin/dashboard/warning/Warning.js": "38a6330b11cf1c4d14e9c319194767032a1de2e4",
  "src/features/admin/dashboard/warning/components/CreateWarningModal.jsx": "356c588de1ca3242785d356fc0f688145ed198ed",
  "src/features/admin/dashboard/warning/components/FilterButtons.jsx": "41ce076964203365482dda512a1edcab09db81b0",
  "src/features/admin/dashboard/warning/components/SeveritySelector.jsx": "c141e64dd72887d585f6814039a620eb154146a4",
  "src/features/admin/dashboard/warning/components/WarningItem.jsx": "28678106dda01392370db7b8ecd623c567c75f14",
  "src/features/admin/dashboard/warning/components/WarningPreview.jsx": "4cfe7939ee17958376b9374ca65b6a1aca43a527",
  "src/features/admin/dashboard/warning/components/WarningsSection.jsx": "b3f550d2b18562ad9701e85fc138bbe9ef42ab49",
  "src/features/admin/dashboard/warning/useAdminWarningsVM.js": "aafc6d64c77c21f9d92c2ce90e9f41f5c71fd535",
  "src/features/admin/event/AdminEventsPage.jsx": "299a5cde4041c8f1a72a25bae17798fb1e265435",
  "src/features/admin/event/components/EventItem.jsx": "acc2a54505aac427018ec7e18dfc41803ac50edd",
  "src/features/admin/event/components/EventModal.jsx": "f07c789e1c3f2b988a4cc08b70c7cee20d220437",
  "src/features/admin/event/useAdminEventsVM.js": "54e71bd2900e52b82083fa1609e2300f8fd4ed54",
  "src/features/admin/exams/AdminExamBankPage.jsx": "b3e1d4847a48b9486c77c48a331cb26b5b33272a",
  "src/features/admin/exams/components/CreateExamModal.jsx": "f7050a16b3dfcc2701c1e9aee8231658187e1ede",
  "src/features/admin/exams/components/CreateSubjectModal.jsx": "11ad234f8bd1b0028463c5407f528bb3436cbc5c",
  "src/features/admin/exams/components/ExamItem.jsx": "cdfd211e6a48c4b746bd7b54303663c4aa6c06e6",
  "src/features/admin/exams/components/ExamList.jsx": "f3f3f324bb0a9386583fda68f95187ba31f807ab",
  "src/features/admin/exams/components/ExamsSection.jsx": "77e89566a2d56698b8ec2bbce259789aa3d0cd1a",
  "src/features/admin/exams/components/SubjectTabs.jsx": "cd013b494391ebd7fbafb5a4960a37be27b104ec",
  "src/features/admin/exams/models/Exam.js": "684bb4fe9de974aa9335eb85bac3fdd9897192f1",
  "src/features/admin/exams/models/Subject.js": "2a279f4187bb83831bfab03fa60b6a4d1182b021",
  "src/features/admin/exams/useAdminExamsVM.js": "bd84b489a922d8cc90fca65cd51d905995af4fdd",
  "src/features/admin/manual/AdminManualPage.jsx": "31ad115bdc3eccba7f8a85ca6d89115cd3b9bdd2",
  "src/features/admin/manual/components/ArticleItem.jsx": "7a74d183e2c040e03d7420a55aea5e151365f806",
  "src/features/admin/manual/components/CategoryItem.jsx": "86aa03cf14cac2d61804c7f7277c18d9ba7f87d8",
  "src/features/admin/manual/components/ChapterItem.jsx": "d4711c17c99f4c62e30f4b983d70d101f60d2325",
  "src/features/admin/manual/components/CreateArticleModal.jsx": "ff8d476f774836a8b2b8490f0386182243ffd758",
  "src/features/admin/manual/components/CreateCategoryModal.jsx": "d2b6b84b417074d961532cf7cdbc5acfc4db9d8a",
  "src/features/admin/manual/components/CreateChapterModal.jsx": "a447d2c56857ff4387dc2faa0759fa12bd881c4e",
  "src/features/admin/manual/models/ManualArticle.js": "0a25943636a43a0afa0cbd175dddaa534ecc26c3",
  "src/features/admin/manual/models/ManualCategory.js": "934dbe4ae9e72cf9ede39aefecbf153f60365cda",
  "src/features/admin/manual/models/ManualChapter.js": "87e68998e5b854e36778aae50fbfca1a29989cec",
  "src/features/admin/manual/useAdminManualVM.js": "ccff6644811e67dc27517bfcd64ada549f187aef",
  "src/features/admin/store/AdminStorePage.jsx": "d362f07732da1cf19eb4d3442ba1f211208ca1c6",
  "src/features/admin/store/components/CreateProductModal.jsx": "0bee3941cc950da6a3f6ec972caf3fe3bea5796c",
  "src/features/admin/store/components/ManageProductImagesModal.jsx": "41506af8221683b51a3611ad2073f8ebbf5b9abf",
  "src/features/admin/store/components/ProductList.jsx": "2cb7e3c8feb4a6af1de6046ca8298cc625e63c97",
  "src/features/admin/store/components/ProductVariationsDialog.jsx": "1ad781291e66d403a381e73c4fb19bec2d7c7284",
  "src/features/admin/store/components/ProductVariationsModal.jsx": "fe415b76014e3ac3ff2ff4c0402e710697037481",
  "src/features/admin/store/components/StoreCategoriesSection.jsx": "6d8598fb07f4ac1951246c35bc2e4fe2d3b11537",
  "src/features/admin/store/components/StoreCategoryDialog.jsx": "4af42e350dabeb9ae1e76abf87419048830f668f",
  "src/features/admin/store/components/StoreCategoryTabs.jsx": "923d9dd12e036fc6faff07b07760754fb662cd55",
  "src/features/admin/store/components/StoreProductDialog.jsx": "2cd8df3119097ad6bf35c4be795b178e8fac459d",
  "src/features/admin/store/components/StoreProductItem.jsx": "419a2a51fef3003e2ccc07e418e6194a1b7a9c74",
  "src/features/admin/store/components/StoreProductsSection.jsx": "dc41a337880dfcf54ba6356db77d1c8488d65c12",
  "src/features/admin/store/components/StoreSection.jsx": "3998e504e6b00fada57b098b6177d60cedb7faf3",
  "src/features/admin/store/useAdminStoreCategoriesVM.js": "c489bdc00d6eda1fa9366f3ecaa9e0b866fb423f",
  "src/features/admin/store/useAdminStoreProductsVM.js": "7c3a5cb3ed8e3eb51e2a44e247f42b05b21fcd25",
  "src/features/auth/CallbackPage.jsx": "ae80d157808ac63757c9e9ea700365473c88e119",
  "src/features/auth/LoginPage.jsx": "e08e0e83a35116f383bc9b7f81ca262f11a4a049",
  "src/features/calendar/CalendarPage.jsx": "fc04bfddb5c3b4ffe487722ecb56bec1686f8266",
  "src/features/calendar/components/CalendarDay.jsx": "b84a204e43439ea9da5ba3f21dbe23b0e7a91bbd",
  "src/features/calendar/components/CalendarHeader.jsx": "3abd61a7700bbbf32511bd969fb8924e78d2c934",
  "src/features/calendar/components/MinorEventModal.jsx": "aa5dc9266316f4ffde6d2ea8532ea4b7280b0882",
  "src/features/calendar/components/MonthGrid.jsx": "38938c41daf88a3905da779c26eb89551ac8fb1b",
  "src/features/calendar/useCalendarVM.js": "5b5e042a7e4c7abfdbb0409ae3015cf01f3485d1",
  "src/features/events/EventPage.jsx": "7a060400329b8c06c915e50d2940c35d195684d0",
  "src/features/events/components/Countdown.jsx": "0ec3bda7419ff59079edfda3d5bee7de40340aff",
  "src/features/events/components/EventInfo.jsx": "72a46827f068152940f465563b749fb730aae29a",
  "src/features/events/components/GalleryGrid.jsx": "edf2daac395710a4eb2714e15a5103f5659d5825",
  "src/features/events/useEventVM.js": "ee776edc4966991faba74243ab0e6d0a5b4028be",
  "src/features/exams/ExamBankPage.jsx": "63795f4a118b2a957c19fbe33b47b67da28154e0",
  "src/features/exams/components/ExamCard.jsx": "fee02ff01aa2df1abe05d988b8f0121609870755",
  "src/features/exams/components/ExamFilters.jsx": "37d9c89dc98df62857ed5f833432d9393dd9235f",
  "src/features/exams/components/ExamList.jsx": "28969d283b15ed81edd202b96f09bf16f80580b2",
  "src/features/exams/components/SubjectFolder.jsx": "1e587389105bf9d1d3b5356b0944c00355d5c1e7",
  "src/features/exams/useExamBankVM.js": "8cbfa3323dd1cd2981b90c9f8517a0cba5bb0e1c",
  "src/features/home/HomePage.jsx": "367a1bb6b92a603fc00b26e3d6573a4f4359b2f3",
  "src/features/home/components/BannerCarousel.jsx": "cc45f7e40cf92b5844f0f396bb33c4464bd6f329",
  "src/features/home/components/LatestNews.jsx": "a9758b71e705261af0dc12320d5faf2e33af9f76",
  "src/features/home/components/NavButtons.jsx": "62476a95799c991751083e7a8b919535a995c52b",
  "src/features/home/components/QuickLinks.jsx": "9681841743d923e1e83e002326dcfee74339132a",
  "src/features/home/components/SearchBar.jsx": "0c5cca227116a7a364ba40e94486da8db03a5dd1",
  "src/features/home/components/WarningAlert.jsx": "bdb3cada27601a41e815729940ada177eb7f2230",
  "src/features/home/useHomeVM.js": "435657d8699d361ecd6a93a8ce6d837e5a1187a4",
  "src/features/manual/ManualPage.jsx": "b0b393f701dbc035bb45766ffb032fcb9ac26621",
  "src/features/manual/components/Breadcrumb.jsx": "c6eaf73d1a87a5fd12564f65728bafe86cde92e7",
  "src/features/manual/components/FeedbackSection.jsx": "e0272dccf77610c8ded64b69752ac6320bac8c33",
  "src/features/manual/components/FeedbackWidget.jsx": "0cb24b1bdb10b24bd16869a2c0c388d7312a32bf",
  "src/features/manual/components/ManualSidebar.jsx": "81b9e8fba0a489981521a9ef395e7fc1512a080b",
  "src/features/manual/useManualVM.js": "3bb2bd0fc5d5fac357940de9274f4d388ddb9ef7",
  "src/features/news/NewsDetailPage.jsx": "e9e4faaf2af5f619eba8e6838cf295b54b4ada55",
  "src/features/news/NewsListPage.jsx": "c4d037dd5ab9b26a9d7dcdac05e351c7c84b8b4a",
  "src/features/news/components/NewsCard.jsx": "e860b45229348d598def5d21331bc365b162e165",
  "src/features/news/useNewsDetailVM.js": "60a9e2a22233565585d152fae0d2510eee7dcc7f",
  "src/features/news/useNewsListVM.js": "d03f53974c8c08b10a0523cad425af4515cf78d1",
  "src/features/profile/ProfilePage.jsx": "1850b1751bacd51a52a148e3bc3ed0bd1866230f",
  "src/features/profile/components/EditAvatarModal.jsx": "ba3cf780c4c6d561211ac3f277c7453e8ba6c947",
  "src/features/profile/useProfileVM.js": "eda5d37cee32208b7fe9039400378736d174e35b",
  "src/features/stickers/StickerAlbumPage.jsx": "c292eb07337520a52fa6c9653b58422995fb6ae3",
  "src/features/stickers/components/AlbumGrid.jsx": "d90309fba777d9478e741dc7a4a64f89e6255c74",
  "src/features/stickers/components/RedeemInput.jsx": "62bd910b45e2c48cc2068d3a461f45a81cfaf9c6",
  "src/features/stickers/components/StickerItem.jsx": "fc769e5706519450369e1ea3843755a94fcf89d7",
  "src/features/stickers/components/StickerModal.jsx": "14da63cb735382108713a09ef28fe720657aba41",
  "src/features/stickers/components/StickerSlot.jsx": "ee773014fbef524a0b6f7fc36f71b18c3cbd196e",
  "src/features/stickers/useStickerAlbumVM.js": "ac06194ca0ae4696e2cf3cdce7835c5b6561777f",
  "src/features/store/ProductDetailPage.jsx": "6a61d12661cf59c75086013a5389272c53577487",
  "src/features/store/StorePage.jsx": "cdd83b733e6dbcee3db9821acd0c3438995154e1",
  "src/features/store/components/CategoryTabs.jsx": "896c41fc197b7dd0666219e3336a7d904485c6fd",
  "src/features/store/components/ProductCard.jsx": "25402616e05544f227a3da7c039bb891b54b56e7",
  "src/features/store/components/ProductGrid.jsx": "b07dd8edbf5cc863603668a31c3972bdf45daeb2",
  "src/features/store/components/ProductImageGallery.jsx": "2d3a9f7e693d3094ee4fef36aabd81d87780d40f",
  "src/features/store/components/ProductInfo.jsx": "13d87ef5936e7c0ec87c07cdbe04a3370f25859e",
  "src/features/store/useProductDetailVM.js": "12ccee6a3a9032208c78e8ec0d24f356c1bb0b52",
  "src/features/store/useStoreVM.js": "3dcdea1ad5607861d60a32442f5db4ef8caf5ed5",
  "src/index.css": "42294af7d1bc2c5cdc658d6d11540e9e1446b457",
  "src/lib/utils.js": "337eb99ab6802cef682c94528a085edf5fb738b6",
  "src/main.jsx": "143cd7859c0fec24a24bf4fefb4c7ff6fa5acba3",
  "src/shared/components/Footer.jsx": "62358fda92dac71ce85450ac75d54ab4e58e028d",
  "src/shared/components/Header.jsx": "11616ea5d4c4e0ee5b3dde47aabc8da0c340a3aa",
  "src/shared/components/HeaderSearchBar.jsx": "c2b716444a7bd7d6ba3d2b18b28c5076a4140d65",
  "src/shared/components/ImageUploadDialog.jsx": "1d29d7608ddb718864b3785954f006bde21daa0c",
  "src/shared/components/MDXEditor.css": "5dc125cccd1e56b32e3ff926c643aab752bd9b8b",
  "src/shared/components/MDXEditor.jsx": "c9f5d7504acf76690cca885ec3004b751130b5c2",
  "src/shared/components/MainLayout.jsx": "118d0f9973a9e98be96d4709fb215ac8bc0abe32",
  "src/shared/components/MarkdownContent.jsx": "af1058fa4c8728b6b3f1e8402c513ba2c0eb32d4",
  "src/shared/components/NavigationMenu.jsx": "12bddd24e24ebd8eb3bccc8de398a17803b7b801",
  "src/shared/components/ProfilePopover.jsx": "8e99d0c91f161169a4cfb53ecb611cfc05c5d74d",
  "src/shared/components/ProtectedRoute.jsx": "83a435a80364d8f406a72e9d26a601ff152b125f",
  "src/shared/components/SessionExpiryWarning.jsx": "1d54898da966867009ee2a16e2982eada7eb44ce",
  "src/shared/components/ThemeToggle.jsx": "40e82b3381186d642e6da59398323f0683b21234",
  "src/shared/contexts/ThemeContext.jsx": "f2c8ef0a0a81dc9d644ad06112e739e6d73ecd7f",
  "src/shared/hooks/useHeaderSearch.js": "8adea7b88804cf84926ebc68f3086b16a219a1e5",
  "src/shared/hooks/useScrollDirection.js": "eccac165f41bcc7daf48f212d112034725f116bc",
  "src/shared/services/analyticsService.js": "c3c7bcc2669b6ab83fc0972c24c5d17d9e43805b",
  "src/shared/services/apiClient.js": "6e38cbe70c3584bf2f3c6e87027403d353076fd6",
  "src/shared/services/authService.js": "709a1c2faf9cc50f4e43fb8ec5b4c3c67c6b8d97",
  "src/shared/services/contentService.js": "f72551e91c68efd796928c100c11b09a02262f27",
  "src/shared/services/contentService.new.js": "42a2c3e06cb1dc126a298a9b8cf574d35a236c20",
  "src/shared/services/imageUploadService.js": "6d4895d6a0d2c065b9e8297b3f4501e3c4663830",
  "src/shared/services/storeService.js": "6bc10eeeae724628f857df5b168fef4ec9f1990f",
  "src/shared/services/warningService.js": "58c916851ebe903946e80556caf742996aa62b4a",
  "src/shared/types/dtos.js": "cd3196ddfc47ac65fae468c53fed848de989b48a",
  "src/shared/types/index.js": "7b90e7878e0669f044e359cc409a33bbc23ed1fd",
  "src/shared/utils/cookies.js": "678f6d6a67de60a46edba441d9b15df99d4a1fe3",
  "src/shared/utils/formatters.js": "610ef1ff57491fca590edaefa3894086736819b7",
  "src/shared/utils/helpers.js": "537989bb8d93a5d159afaeafb57926b94a218d5e",
  "src/shared/utils/imageCrop.js": "d005bc59a0edbaac155526be808ea7178708608e",
  "tailwind.config.js": "3c45a22bc3b544729712931e4b321fff3b99e1ad",
  "vite.config.js": "a68a85afcc10402c29003d9f574ecc5f86e3fa1a"
}
```

## 📄 .env.example
```example
# API Configuration
VITE_API_URL=http://localhost:3000/api

# Google Maps API (for event locations)
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Social Media & Contact
VITE_EMAIL=contato@caco.ic.unicamp.br
VITE_INSTAGRAM_URL=https://instagram.com/caco_unicamp
VITE_WHATSAPP_COMMUNITY_URL=https://chat.whatsapp.com/your_community_link_here
```

## 📄 README.md
```markdown
# Site do CACo - Frontend

Frontend do site do CACo (Centro Acadêmico da Computação - Unicamp) desenvolvido com React, Vite e arquitetura MVVM.

## 🚀 Tecnologias

- **React 19** - Biblioteca para interfaces
- **Vite** - Build tool e dev server
- **React Router** - Roteamento
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **React Markdown** - Renderização de Markdown
- **Recharts** - Gráficos (Admin)
- **React Hook Form** - Formulários
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
src/
├── features/              # Features organizadas por domínio
│   ├── home/             # Página inicial
│   ├── news/             # Notícias (lista e detalhe)
│   ├── manual/           # Manual do calouro
│   ├── calendar/         # Calendário de eventos
│   ├── events/           # Página de evento
│   ├── exams/            # Banco de provas
│   ├── stickers/         # Álbum de figurinhas
│   ├── admin/            # Painel administrativo
│   └── auth/             # Autenticação
├── shared/               # Código compartilhado
│   ├── components/       # Componentes reutilizáveis
│   ├── services/         # Serviços (API, analytics)
│   ├── hooks/            # Hooks customizados
│   ├── utils/            # Funções utilitárias
│   └── types/            # Tipos/interfaces
├── components/           # Componentes UI base (shadcn)
│   └── ui/
└── lib/                  # Configurações e utils
```

## 🎨 Features Implementadas

### Páginas Públicas

- **Home**: Busca, banners rotativos, avisos, links rápidos, últimas notícias
- **Notícias**: Lista com paginação/infinite scroll e página de detalhe com Markdown
- **Manual**: Layout 2 colunas, sidebar com acordeão, breadcrumb, feedback widget
- **Calendário**: Grid mensal, navegação, modal para eventos menores
- **Evento**: Countdown, informações, mapa do Google, galeria (eventos finalizados)
- **Banco de Provas**: Filtro instantâneo em memória, organizado por disciplina e tipo

### Páginas Protegidas

- **Álbum de Figurinhas**: Resgate de códigos, progresso, modal de detalhes
- **Admin**: Dashboard, sidebar de navegação (CRUD básico implementável)

## ⚙️ Instalação e Execução

```bash
# Instalar dependências
npm install

# Copiar arquivo de configuração
cp .env.example .env

# Editar .env com suas configurações
# VITE_API_URL=http://localhost:3000/api

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🏗️ Arquitetura MVVM

Cada feature segue o padrão MVVM:

- **View**: Componentes React (`.jsx`)
- **ViewModel**: Hooks customizados (`use*VM.js`) que gerenciam estado e lógica
- **Model**: Serviços que fazem chamadas à API

Exemplo:
```javascript
// useHomeVM.js (ViewModel)
export function useHomeVM() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    contentService.getDashboard().then(setData);
  }, []);
  
  return { data, loading };
}

// HomePage.jsx (View)
export function HomePage() {
  const { data, loading } = useHomeVM();
  return <div>{/* UI */}</div>;
}
```

## 🎨 Tema

O projeto usa um tema customizado com **verde escuro** como cor primária:
- Primary: `hsl(142, 76%, 36%)` - Verde escuro
- Suporte a modo escuro configurado
- Cores semânticas para diferentes estados

## 📝 Variáveis de Ambiente

- `VITE_API_URL`: URL base da API backend
- `VITE_GOOGLE_MAPS_API_KEY`: Chave da API do Google Maps (para localização de eventos)

## 🔒 Autenticação

- Sistema de login com JWT
- Rotas protegidas com `<ProtectedRoute>`
- Níveis de permissão (usuário comum e admin)
- Token armazenado em localStorage

## 📦 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview da build
npm run lint     # Linting com ESLint
```

## 🔗 Integração com Backend

O frontend espera uma API REST com os seguintes endpoints:

- `GET /api/content/dashboard` - Dados da home
- `GET /api/news` - Lista de notícias
- `GET /api/news/:slug` - Detalhes de notícia
- `GET /api/manual/tree` - Árvore do manual
- `GET /api/manual/articles/:id` - Artigo do manual
- `GET /api/events/calendar` - Eventos do calendário
- `GET /api/events/:id` - Detalhes do evento
- `GET /api/exams` - Banco de provas
- `POST /api/auth/login` - Login
- `GET /api/stickers` - Figurinhas do usuário
- `POST /api/stickers/redeem` - Resgatar código

## 📄 Licença

Este projeto é open source e está disponível para o CACo - Unicamp.
```

## 📄 components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
```

## 📄 eslint.config.js
```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

## 📄 index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="referrer" content="no-referrer">
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>site-do-caco</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## 📄 jsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 📄 package.json
```json
{
  "name": "site-do-caco",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@dnd-kit/core": "^6.3.1",
    "@dnd-kit/sortable": "^10.0.0",
    "@dnd-kit/utilities": "^3.2.2",
    "@mdxeditor/editor": "^3.52.3",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toast": "^1.2.15",
    "class-variance-authority": "^0.7.1",
    "date-fns": "^4.1.0",
    "lucide-react": "^0.562.0",
    "react": "^19.2.0",
    "react-day-picker": "^9.13.0",
    "react-dom": "^19.2.0",
    "react-easy-crop": "^5.5.6",
    "react-hook-form": "^7.70.0",
    "react-markdown": "^10.1.0",
    "react-router-dom": "^7.11.0",
    "recharts": "^3.6.0",
    "rehype-raw": "^7.0.0",
    "remark-gfm": "^4.0.1",
    "vaul": "^1.1.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/postcss": "^4.1.18",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "clsx": "^2.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "tailwind-merge": "^3.4.0",
    "tailwindcss": "^3.4.17",
    "tailwindcss-animate": "^1.0.7",
    "vite": "^7.2.4"
  }
}
```

## 📄 postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## 📄 src/App.jsx
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/shared/components/MainLayout';
import { ProtectedRoute } from '@/shared/components/ProtectedRoute';
import { SessionExpiryWarning } from '@/shared/components/SessionExpiryWarning';
import { Toaster } from '@/components/ui/use-toast.jsx';
import { ThemeProvider } from '@/shared/contexts/ThemeContext';

// Pages
import { HomePage } from '@/features/home/HomePage';
import { NewsListPage } from '@/features/news/NewsListPage';
import { NewsDetailPage } from '@/features/news/NewsDetailPage';
import { ManualPage } from '@/features/manual/ManualPage';
import { CalendarPage } from '@/features/calendar/CalendarPage';
import { EventPage } from '@/features/events/EventPage';
import { ExamBankPage } from '@/features/exams/ExamBankPage';
import { StickerAlbumPage } from '@/features/stickers/StickerAlbumPage';
import { ProfilePage } from '@/features/profile/ProfilePage';
import { LoginPage } from '@/features/auth/LoginPage';
import { CallbackPage } from '@/features/auth/CallbackPage';
import { AdminLayout } from '@/features/admin/AdminLayout';
import { AdminDashboard } from '@/features/admin/dashboard/AdminDashboard';
import { AdminManualPage } from '@/features/admin/manual/AdminManualPage';
import { AdminExamBankPage } from '@/features/admin/exams/AdminExamBankPage';
import { AdminStorePage } from '@/features/admin/store/AdminStorePage';
import { AdminEventsPage } from '@/features/admin/event/AdminEventsPage';
import { StorePage } from '@/features/store/StorePage';
import { ProductDetailPage } from '@/features/store/ProductDetailPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SessionExpiryWarning />
        <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/noticias" element={<NewsListPage />} />
          <Route path="/noticias/:slug" element={<NewsDetailPage />} />
          <Route path="/manual" element={<ManualPage />} />
          <Route path="/manual/:slug" element={<ManualPage />} />
          <Route path="/calendario" element={<CalendarPage />} />
          <Route path="/eventos/:slug" element={<EventPage />} />
          <Route path="/provas" element={<ExamBankPage />} />
          <Route path="/loja" element={<StorePage />} />
          <Route path="/loja/produto/:slug" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/auth/callback" element={<CallbackPage />} />
          
          {/* Protected Routes */}
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/album"
            element={
              <ProtectedRoute>
                <StickerAlbumPage />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requireAdmin>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="noticias" element={<div>Gerenciar Notícias</div>} />
          <Route path="eventos" element={<AdminEventsPage />} />
          <Route path="manual" element={<AdminManualPage />} />
          <Route path="provas" element={<AdminExamBankPage />} />
          <Route path="figurinhas" element={<div>Gerenciar Figurinhas</div>} />
          <Route path="loja" element={<AdminStorePage />} />
        </Route>
      </Routes>
      
      <Toaster />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
```

## 📄 src/components/ui/accordion.jsx
```jsx
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

## 📄 src/components/ui/alert-dialog.jsx
```jsx
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
```

## 📄 src/components/ui/alert.jsx
```jsx
import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
```

## 📄 src/components/ui/badge.jsx
```jsx
import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
```

## 📄 src/components/ui/button.jsx
```jsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
```

## 📄 src/components/ui/calendar.jsx
```jsx
import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn("select-none font-medium", captionLayout === "label"
          ? "text-sm"
          : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-[--cell-size] select-none", defaultClassNames.week_number_header),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day
        ),
        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (<div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />);
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (<ChevronLeftIcon className={cn("size-4", className)} {...props} />);
          }

          if (orientation === "right") {
            return (<ChevronRightIcon className={cn("size-4", className)} {...props} />);
          }

          return (<ChevronDownIcon className={cn("size-4", className)} {...props} />);
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div
                className="flex size-[--cell-size] items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props} />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-[--cell-size] flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props} />
  );
}

export { Calendar, CalendarDayButton }
```

## 📄 src/components/ui/card.jsx
```jsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-4", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-4 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

## 📄 src/components/ui/date-input.jsx
```jsx
import { Input } from '@/components/ui/input';

export function DateInput({ value, onChange, className, ...props }) {
  // Converte yyyy-mm-dd para dd/mm/yyyy para exibição
  const formatToDisplay = (isoDate) => {
    if (!isoDate) return '';
    const [year, month, day] = isoDate.split('-');
    return `${day}/${month}/${year}`;
  };

  // Converte dd/mm/yyyy para yyyy-mm-dd para armazenamento
  const formatToISO = (displayDate) => {
    if (!displayDate) return '';
    const cleaned = displayDate.replace(/\D/g, '');
    if (cleaned.length !== 8) return '';
    
    const day = cleaned.slice(0, 2);
    const month = cleaned.slice(2, 4);
    const year = cleaned.slice(4, 8);
    
    // Valida a data
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day) {
      return '';
    }
    
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    
    // Limita a 8 dígitos (ddmmyyyy)
    input = input.slice(0, 8);
    
    // Adiciona as barras automaticamente
    let formatted = '';
    if (input.length > 0) {
      formatted = input.slice(0, 2);
      if (input.length >= 3) {
        formatted += '/' + input.slice(2, 4);
      }
      if (input.length >= 5) {
        formatted += '/' + input.slice(4, 8);
      }
    }
    
    e.target.value = formatted;
    
    // Se tiver 10 caracteres (dd/mm/yyyy), converte para ISO e envia
    if (formatted.length === 10) {
      const isoDate = formatToISO(formatted);
      if (isoDate) {
        onChange(isoDate);
        return;
      }
    }
    
    // Se não estiver completo ou for inválido, envia vazio
    onChange('');
  };

  return (
    <Input
      type="text"
      value={formatToDisplay(value)}
      onChange={handleChange}
      placeholder="dd/mm/aaaa"
      maxLength={10}
      className={className}
      {...props}
    />
  );
}
```

## 📄 src/components/ui/dialog.jsx
```jsx
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
```

## 📄 src/components/ui/dropdown-menu.jsx
```jsx
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}>
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props} />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props} />
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props} />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props} />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props} />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}) => (
  <span
    className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
    {...props} />
)
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
```

## 📄 src/components/ui/input.jsx
```jsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
```

## 📄 src/components/ui/label.jsx
```jsx
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/lib/utils"

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
```

## 📄 src/components/ui/popover.jsx
```jsx
import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]",
        className
      )}
      {...props} />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
```

## 📄 src/components/ui/price-input.jsx
```jsx
import { Input } from './input';
import { forwardRef, useState } from 'react';

const PriceInput = forwardRef(({ value, onChange, placeholder = '0,00', className, ...props }, ref) => {
  const [displayValue, setDisplayValue] = useState(formatDisplay(value));

  function formatDisplay(val) {
    if (val === '' || val === null || val === undefined) return '';
    const num = typeof val === 'number' ? val : parseFloat(val);
    if (isNaN(num)) return '';
    return num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function parseValue(str) {
    if (!str) return '';
    // Remove tudo exceto números
    const numbers = str.replace(/\D/g, '');
    if (!numbers) return '';
    // Converte centavos para reais (divide por 100)
    const value = parseInt(numbers) / 100;
    return value;
  }

  const handleChange = (e) => {
    const input = e.target.value;
    const parsed = parseValue(input);
    
    if (parsed === '') {
      setDisplayValue('');
      onChange?.('');
    } else {
      const formatted = formatDisplay(parsed);
      setDisplayValue(formatted);
      onChange?.(parsed);
    }
  };

  const handleBlur = () => {
    if (value !== '' && value !== null && value !== undefined) {
      setDisplayValue(formatDisplay(value));
    }
  };

  return (
    <Input
      ref={ref}
      type="text"
      value={displayValue}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
});

PriceInput.displayName = 'PriceInput';

export { PriceInput };
```

## 📄 src/components/ui/scroll-area.jsx
```jsx
import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
```

## 📄 src/components/ui/select.jsx
```jsx
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}>
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}>
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}>
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn("p-1", position === "popper" &&
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}>
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
```

## 📄 src/components/ui/separator.jsx
```jsx
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef((
  { className, orientation = "horizontal", decorative = true, ...props },
  ref
) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    )}
    {...props} />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
```

## 📄 src/components/ui/sheet.jsx
```jsx
import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva } from "class-variance-authority";
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
```

## 📄 src/components/ui/slider.jsx
```jsx
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}>
    <SliderPrimitive.Track
      className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
```

## 📄 src/components/ui/switch.jsx
```jsx
import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
```

## 📄 src/components/ui/tabs.jsx
```jsx
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

## 📄 src/components/ui/textarea.jsx
```jsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
```

## 📄 src/components/ui/toast.jsx
```jsx
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
```

## 📄 src/components/ui/use-toast.jsx
```jsx
import { useEffect, useState } from "react"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const toastTimeouts = new Map()

const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners = []

let memoryState = { toasts: [] }

function dispatch(action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

function toast({ ...props }) {
  const id = genId()

  const update = (props) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = useState(memoryState)

  useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

export { useToast, Toaster, toast }
```

## 📄 src/features/admin/AdminLayout.jsx
```jsx
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Calendar, BookOpen, Image, Menu, X, GraduationCap, Store } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/noticias', label: 'Notícias', icon: FileText },
  { to: '/admin/eventos', label: 'Eventos', icon: Calendar },
  { to: '/admin/manual', label: 'Manual', icon: BookOpen },
  { to: '/admin/provas', label: 'Banco de Provas', icon: GraduationCap },
  { to: '/admin/figurinhas', label: 'Figurinhas', icon: Image },
  { to: '/admin/loja', label: 'Loja', icon: Store },
];

export function AdminLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar Desktop */}
      <aside className="hidden md:block w-64 border-r bg-background">
        <div className="p-6">
          <h2 className="text-lg font-bold">Painel Admin</h2>
        </div>
        <nav className="space-y-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Mobile */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-64 bg-background z-50 transform transition-transform duration-300 md:hidden',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-bold">Painel Admin</h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1 hover:bg-muted rounded-lg"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 z-30 bg-background border-b px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 hover:bg-muted rounded-lg"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-bold">Painel Admin</h2>
        </div>
        
        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
```

## 📄 src/features/admin/components/ConfirmDeleteDialog.jsx
```jsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export function ConfirmDeleteDialog({ open, onOpenChange, onConfirm, title, description, confirmText, variant }) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title || 'Confirmar exclusão'}</AlertDialogTitle>
          <AlertDialogDescription>
            {description || 'Tem certeza que deseja excluir este item? Esta ação não pode ser desfeita.'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction 
            onClick={onConfirm}
            className={variant || "bg-destructive text-destructive-foreground hover:bg-destructive/90"}
          >
            {confirmText || 'Excluir'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
```

## 📄 src/features/admin/components/DatePicker.jsx
```jsx
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';

export function DatePicker({ value, onChange, error, label, placeholder = "Selecione uma data" }) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium mb-2 flex items-center gap-2">
          {label}
        </label>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !value && "text-muted-foreground",
              error && "border-red-500"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? (
              format(value, "PPP", { locale: ptBR })
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}
```

## 📄 src/features/admin/components/StatsCards.jsx
```jsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
```

## 📄 src/features/admin/components/TimeInput.jsx
```jsx
import { Input } from '@/components/ui/input';

export function TimeInput({ value, onChange, onError, error, placeholder = "00:00", label }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' && e.target.selectionStart === 3 && value.length === 3) {
      e.preventDefault();
      onChange(value.slice(0, 2));
    }
  };

  const handleChange = (e) => {
    let newValue = e.target.value.replace(/[^0-9]/g, '');
    
    if (newValue.length === 0) {
      onChange('');
      return;
    }
    
    if (newValue.length >= 2) {
      newValue = newValue.slice(0, 2) + ':' + newValue.slice(2, 4);
    }
    
    if (newValue.length <= 5) {
      onChange(newValue);
    }
  };

  const handleBlur = (e) => {
    const val = e.target.value;
    if (val && !/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(val)) {
      if (onError) onError('Formato inválido. Use HH:MM (ex: 09:30)');
    } else {
      if (onError) onError(null);
    }
  };

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <Input
        type="text"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        maxLength={5}
        className={error ? 'border-red-500' : ''}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
      <p className="text-xs text-gray-500 mt-1">
        Deixe vazio para {placeholder}. Formato: HH:MM
      </p>
    </div>
  );
}
```

## 📄 src/features/admin/dashboard/AdminDashboard.jsx
```jsx
import React from 'react';
import { Users, FileText, Calendar, Image } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast.jsx';
import { useAdminBannersVM } from './banner/useAdminBannersVM';
import { useAdminWarningsVM } from './warning/useAdminWarningsVM';
import { StatsCards } from '../components/StatsCards';
import { BannersSection } from './banner/components/BannersSection';
import { WarningsSection } from './warning/components/WarningsSection';

export function AdminDashboard() {
  const stats = [
    { title: 'Usuários', value: '1,234', icon: Users, color: 'text-blue-600' },
    { title: 'Notícias', value: '45', icon: FileText, color: 'text-green-600' },
    { title: 'Eventos', value: '12', icon: Calendar, color: 'text-purple-600' },
    { title: 'Figurinhas', value: '28', icon: Image, color: 'text-orange-600' },
  ];

  const { toast } = useToast();

  // ViewModels para cada seção
  const bannersVM = useAdminBannersVM();
  const warningsVM = useAdminWarningsVM();
  
  // Handlers para Banners com feedback de toast
  const handleReorderBanners = async (newOrder) => {
    const result = await bannersVM.reorderActiveBanners(newOrder);
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao reordenar',
        description: result.error,
      });
    }
    return result.success;
  };

  const handleToggleBanner = async (id, isCurrentlyActive) => {
    const result = await bannersVM.toggleBannerStatus(id, isCurrentlyActive);
    if (result.success) {
      toast({
        title: isCurrentlyActive ? 'Banner desativado' : 'Banner ativado',
        description: isCurrentlyActive 
          ? 'O banner foi desativado.' 
          : 'O banner foi ativado e adicionado ao final da lista.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao alterar status',
        description: result.error,
      });
    }
  };

  const handleCreateBanner = async (bannerData) => {
    const result = await bannersVM.createBanner(bannerData);
    if (result.success) {
      toast({
        title: 'Banner criado!',
        description: 'O banner foi adicionado com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao criar banner',
        description: result.error,
      });
    }
    return result.success;
  };

  const handleUpdateBanner = async (id, bannerData) => {
    const result = await bannersVM.updateBanner(id, bannerData);
    if (result.success) {
      toast({
        title: 'Banner atualizado!',
        description: 'O banner foi atualizado com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao atualizar banner',
        description: result.error,
      });
    }
    return result.success;
  };

  const handleDeleteBanner = async (id) => {
    const result = await bannersVM.deleteBanner(id);
    if (result.success) {
      toast({
        title: 'Banner excluído',
        description: 'O banner foi removido com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir',
        description: result.error,
      });
    }
  };

  if (bannersVM.loading || warningsVM.loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Dashboard Admin</h1>

      <StatsCards stats={stats} />

      <BannersSection
        activeBanners={bannersVM.activeBanners}
        inactiveBanners={bannersVM.inactiveBanners}
        loading={bannersVM.loading}
        creating={bannersVM.creating}
        onReorder={handleReorderBanners}
        onToggle={handleToggleBanner}
        onCreate={handleCreateBanner}
        onUpdate={handleUpdateBanner}
        onDelete={handleDeleteBanner}
      />

      <WarningsSection
        activeWarnings={warningsVM.activeWarnings}
        expiredWarnings={warningsVM.expiredWarnings}
        allActiveWarnings={warningsVM.allActiveWarnings}
        allExpiredWarnings={warningsVM.allExpiredWarnings}
        loading={warningsVM.loading}
        creating={warningsVM.creating}
        activeFilter={warningsVM.activeFilter}
        expiredFilter={warningsVM.expiredFilter}
        onActiveFilterChange={warningsVM.setActiveFilter}
        onExpiredFilterChange={warningsVM.setExpiredFilter}
        onCreate={warningsVM.createWarning}
        onUpdate={warningsVM.updateWarning}
        onDelete={warningsVM.deleteWarning}
        onExpire={warningsVM.expireWarning}
      />
    </div>
  );
}
```

## 📄 src/features/admin/dashboard/banner/Banner.js
```javascript
/**
 * Model que representa um Banner do sistema
 * Encapsula dados e validações relacionadas a banners
 */
export class Banner {
  constructor(data) {
    this.id = data.id;
    this.title = data.title || '';
    this.imageUrl = data.imageUrl || '';
    this.targetLink = data.targetLink || '';
    this.active = data.active ?? true;
    this.displayOrder = data.displayOrder ?? 0;
    
    // Propriedades de UI/estado temporário (não persistidas)
    this.isLoading = data.isLoading ?? false;
    this.uploadProgress = data.uploadProgress;
  }

  /**
   * Verifica se o banner está ativo
   */
  get isActive() {
    return this.active === true;
  }

  /**
   * Verifica se o banner está inativo
   */
  get isInactive() {
    return this.active === false;
  }

  /**
   * Valida os dados do banner
   * @throws {Error} Se houver dados inválidos
   */
  validate() {
    const errors = [];

    if (!this.title?.trim()) {
      errors.push('Título é obrigatório');
    }

    if (this.title && this.title.length > 100) {
      errors.push('Título não pode ter mais de 100 caracteres');
    }

    if (!this.targetLink?.trim()) {
      errors.push('Link de redirecionamento é obrigatório');
    }

    if (this.targetLink && !this.isValidUrl(this.targetLink)) {
      errors.push('Link de redirecionamento deve ser uma URL válida ou caminho relativo');
    }

    if (errors.length > 0) {
      throw new Error(errors.join('; '));
    }

    return true;
  }

  /**
   * Valida se uma string é uma URL válida ou caminho relativo
   */
  isValidUrl(url) {
    // Aceita URLs completas ou caminhos relativos
    if (url.startsWith('/') || url.startsWith('./')) {
      return true;
    }

    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Cria uma cópia do banner com propriedades atualizadas
   */
  clone(updates = {}) {
    return new Banner({ ...this, ...updates });
  }

  /**
   * Converte o banner para objeto simples (para envio à API)
   */
  toDTO() {
    return {
      id: this.id,
      title: this.title,
      imageUrl: this.imageUrl,
      targetLink: this.targetLink,
      active: this.active,
      displayOrder: this.displayOrder,
    };
  }

  /**
   * Cria uma instância de Banner a partir de um DTO da API
   */
  static fromDTO(dto) {
    return new Banner(dto);
  }

  /**
   * Cria múltiplas instâncias de Banner a partir de um array de DTOs
   */
  static fromDTOArray(dtos) {
    return dtos.map(dto => Banner.fromDTO(dto));
  }

  /**
   * Cria um banner temporário para upload otimista
   */
  static createTemporary(data) {
    return new Banner({
      id: `temp-${Date.now()}`,
      ...data,
      isLoading: true,
      uploadProgress: 0,
    });
  }
}
```

## 📄 src/features/admin/dashboard/banner/components/BannerItem.jsx
```jsx
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Loader2, Edit, PowerOff, Power, Trash2 } from 'lucide-react';

export function BannerItem({ banner, onDelete, onToggle, onEdit, isActive }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: banner.id,
    disabled: banner.isLoading || !isActive,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={isActive ? setNodeRef : null}
      style={isActive ? style : {}}
      {...(isActive ? attributes : {})}
      {...(isActive ? listeners : {})}
      className={`relative ${isActive ? 'cursor-grab active:cursor-grabbing' : ''}`}
    >
      <div className={`w-full aspect-[21/9] rounded-lg overflow-hidden border-2 ${
        isActive ? 'border-green-500' : 'border-gray-300'
      } bg-muted hover:border-primary transition-colors ${
        banner.isLoading ? 'opacity-60' : ''
      } ${
        isDragging ? 'opacity-50' : ''
      }`}>
        <img
          src={banner.imageUrl}
          alt={banner.title}
          className="w-full h-full object-cover"
        />
        
        {banner.isLoading && (
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center rounded-lg">
            <div className="bg-white/90 rounded-full p-3 mb-2">
              <Loader2 className="h-6 w-6 md:h-8 md:w-8 animate-spin text-primary" />
            </div>
            {banner.uploadProgress !== undefined && (
              <div className="bg-white/90 px-3 py-1 rounded-full">
                <span className="text-xs md:text-sm font-semibold text-primary">
                  {banner.uploadProgress}%
                </span>
              </div>
            )}
          </div>
        )}
        
        {!banner.isLoading && (
          <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-1 rounded-lg">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(banner);
              }}
              className="p-1.5 md:p-2 bg-blue-500/90 hover:bg-blue-500 text-white rounded-md cursor-pointer"
              title="Editar"
            >
              <Edit className="h-3 w-3 md:h-4 md:w-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggle(banner.id, isActive);
              }}
              className={`p-1.5 md:p-2 ${
                isActive ? 'bg-orange-500/90 hover:bg-orange-500' : 'bg-green-500/90 hover:bg-green-500'
              } text-white rounded-md cursor-pointer`}
              title={isActive ? 'Desativar' : 'Ativar'}
            >
              {isActive ? (
                <PowerOff className="h-3 w-3 md:h-4 md:w-4" />
              ) : (
                <Power className="h-3 w-3 md:h-4 md:w-4" />
              )}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(banner.id);
              }}
              className="p-1.5 md:p-2 bg-red-500/90 hover:bg-red-500 text-white rounded-md cursor-pointer"
            >
              <Trash2 className="h-3 w-3 md:h-4 md:w-4" />
            </button>
          </div>
        )}
      </div>
      <p className="text-xs text-center mt-1 truncate px-1">{banner.title}</p>
    </div>
  );
}
```

## 📄 src/features/admin/dashboard/banner/components/BannersSection.jsx
```jsx
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { BannerItem } from './BannerItem';
import { CreateBannerModal } from './CreateBannerModal';
import { ConfirmDeleteDialog } from '../../../components/ConfirmDeleteDialog';

export function BannersSection({ 
  activeBanners, 
  inactiveBanners, 
  loading, 
  creating,
  onReorder,
  onToggle,
  onCreate,
  onUpdate,
  onDelete
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [preservedModalData, setPreservedModalData] = useState(null);
  const [editingBanner, setEditingBanner] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [bannerToDelete, setBannerToDelete] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = activeBanners.findIndex((b) => b.id === active.id);
    const newIndex = activeBanners.findIndex((b) => b.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;

    const newOrder = arrayMove(activeBanners, oldIndex, newIndex);
    await onReorder(newOrder);
  };

  const handleEdit = (banner) => {
    setEditingBanner(banner);
    setPreservedModalData({
      title: banner.title,
      targetLink: banner.targetLink,
      imageUrl: banner.imageUrl,
    });
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setBannerToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!bannerToDelete) return;
    await onDelete(bannerToDelete);
    setDeleteDialogOpen(false);
    setBannerToDelete(null);
  };

  const handleCreateBanner = async (bannerData) => {
    setModalOpen(false);
    setPreservedModalData(bannerData);
    
    const success = editingBanner 
      ? await onUpdate(editingBanner.id, bannerData)
      : await onCreate(bannerData);
    
    if (success) {
      setPreservedModalData(null);
      setEditingBanner(null);
    } else {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setPreservedModalData(null);
    setEditingBanner(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        {/* Banners Ativos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Banners Ativos</CardTitle>
            <p className="text-xs md:text-sm text-muted-foreground">
              Arraste para reordenar. Use o botão para desativar.
            </p>
          </CardHeader>
          <CardContent>
            <SortableContext
              items={activeBanners.map(b => b.id)}
              strategy={rectSortingStrategy}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 pb-4">
                {activeBanners.map((banner) => (
                  <BannerItem
                    key={banner.id}
                    banner={banner}
                    onDelete={handleDelete}
                    onToggle={onToggle}
                    onEdit={handleEdit}
                    isActive={true}
                  />
                ))}

                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full aspect-[21/9] rounded-lg border-2 border-dashed border-primary/30 hover:border-primary hover:bg-primary/5 transition-colors flex items-center justify-center group"
                >
                  <Plus className="h-8 w-8 md:h-12 md:w-12 text-primary/50 group-hover:text-primary transition-colors" />
                </button>
              </div>
            </SortableContext>

            {activeBanners.length === 0 && (
              <div className="text-center py-8 md:py-12">
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Nenhum banner ativo ainda.
                </p>
                <Button onClick={() => setModalOpen(true)} size="sm" className="md:h-10">
                  <Plus className="h-4 w-4 mr-2" />
                  Criar Primeiro Banner
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Banners Inativos */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="inactive-banners">
            <Card>
              <CardHeader className="pb-3">
                <AccordionTrigger className="hover:no-underline [&[data-state=open]>div]:mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg md:text-xl text-left">
                      Banners Inativos ({inactiveBanners.length})
                    </CardTitle>
                    <p className="text-xs md:text-sm text-muted-foreground text-left">
                      Use o botão para ativar. Banners ativados vão para o final da lista ativa.
                    </p>
                  </div>
                </AccordionTrigger>
              </CardHeader>
              <AccordionContent>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 pb-4 min-h-[120px]">
                    {inactiveBanners.map((banner) => (
                      <BannerItem
                        key={banner.id}
                        banner={banner}
                        onDelete={handleDelete}
                        onToggle={onToggle}
                        onEdit={handleEdit}
                        isActive={false}
                      />
                    ))}
                  </div>

                  {inactiveBanners.length === 0 && (
                    <div className="text-center py-8 md:py-12">
                      <p className="text-sm md:text-base text-muted-foreground">
                        Nenhum banner inativo.
                      </p>
                    </div>
                  )}
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        </Accordion>
      </DndContext>

      <ConfirmDeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={confirmDelete}
        title="Confirmar exclusão"
        description="Tem certeza que deseja excluir este banner? Esta ação não pode ser desfeita."
      />

      <CreateBannerModal
        open={modalOpen}
        onClose={handleCloseModal}
        onCreate={handleCreateBanner}
        loading={creating}
        preservedData={preservedModalData}
      />
    </>
  );
}
```

## 📄 src/features/admin/dashboard/banner/components/CreateBannerModal.jsx
```jsx
import { useState, useCallback, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast.jsx';
import { Upload, Crop, Save } from 'lucide-react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '@/shared/utils/imageCrop';

export function CreateBannerModal({ open, onClose, onCreate, loading, preservedData }) {
  const [step, setStep] = useState(1); // 1: upload, 2: crop, 3: form
  const [title, setTitle] = useState('');
  const [targetLink, setTargetLink] = useState('');
  const [originalFile, setOriginalFile] = useState(null); // Arquivo original
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedFile, setCroppedFile] = useState(null); // File object da imagem recortada
  const [isEditingExistingImage, setIsEditingExistingImage] = useState(false); // Flag para saber se está editando
  const { toast } = useToast();

  // Restaura dados preservados quando o modal reabre após erro
  // OU limpa tudo quando abre sem dados preservados (novo banner)
  useEffect(() => {
    if (open) {
      if (preservedData) {
        // Modo edição - já tem imageUrl (não precisa de nova imagem)
        if (preservedData.imageUrl && !preservedData.imageFile) {
          setTitle(preservedData.title || '');
          setTargetLink(preservedData.targetLink || '');
          setCroppedImage(preservedData.imageUrl);
          setIsEditingExistingImage(true);
          setStep(3); // Vai direto pro formulário com a imagem existente
        }
        // Restaura dados após erro
        else if (preservedData.imageFile) {
          setTitle(preservedData.title || '');
          setTargetLink(preservedData.targetLink || '');
          setCroppedFile(preservedData.imageFile);
          
          // Recria preview da imagem
          const reader = new FileReader();
          reader.onloadend = () => {
            setCroppedImage(reader.result);
            setStep(3); // Vai direto pro formulário
          };
          reader.readAsDataURL(preservedData.imageFile);
        }
      } else {
        // Limpa tudo para novo banner
        setStep(1);
        setTitle('');
        setTargetLink('');
        setOriginalFile(null);
        setImageSrc(null);
        setCroppedImage(null);
        setCroppedFile(null);
        setIsEditingExistingImage(false);
        setCrop({ x: 0, y: 0 });
        setZoom(1);
      }
    }
  }, [preservedData, open]);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        variant: 'destructive',
        title: 'Arquivo inválido',
        description: 'Por favor, selecione uma imagem.',
      });
      return;
    }

    // Limite de 8MB para banner
    const maxSize = 8 * 1024 * 1024; // 8MB em bytes
    if (file.size > maxSize) {
      toast({
        variant: 'destructive',
        title: 'Arquivo muito grande',
        description: 'A imagem deve ter no máximo 8 MB.',
      });
      return;
    }

    setIsEditingExistingImage(false); // Agora está usando uma nova imagem
    setOriginalFile(file); // Guarda o arquivo original

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setStep(2);
    };
    reader.readAsDataURL(file);
  };

  const handleCropConfirm = async () => {
    try {
      const croppedImageBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
      
      // Converte blob para File object
      const fileName = originalFile?.name || 'banner.jpg';
      const croppedFileObj = new File([croppedImageBlob], fileName, { 
        type: 'image/jpeg' 
      });
      setCroppedFile(croppedFileObj);
      setIsEditingExistingImage(false); // Agora tem uma nova imagem recortada
      
      // Também cria preview em base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setCroppedImage(reader.result);
        setStep(3);
      };
      reader.readAsDataURL(croppedImageBlob);
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro ao recortar',
        description: 'Não foi possível processar a imagem.',
      });
    }
  };

  // Função para carregar imagem da URL e permitir recorte
  const handleRecropExistingImage = async () => {
    try {
      const response = await fetch(preservedData.imageUrl);
      const blob = await response.blob();
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setIsEditingExistingImage(true);
        setStep(2);
      };
      reader.readAsDataURL(blob);
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro ao carregar imagem',
        description: 'Não foi possível carregar a imagem para recorte.',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Se estamos editando e temos imageUrl (sem novo arquivo), não é necessário croppedFile
    const isEditingWithoutNewImage = preservedData?.imageUrl && !croppedFile;
    
    if (!croppedFile && !isEditingWithoutNewImage) {
      toast({
        variant: 'destructive',
        title: 'Imagem necessária',
        description: 'Por favor, faça upload e recorte uma imagem.',
      });
      return;
    }

    if (!title.trim()) {
      toast({
        variant: 'destructive',
        title: 'Título necessário',
        description: 'Por favor, informe um título para o banner.',
      });
      return;
    }

    if (!targetLink.trim()) {
      toast({
        variant: 'destructive',
        title: 'Link necessário',
        description: 'Por favor, informe um link de redirecionamento.',
      });
      return;
    }

    // Chama onCreate e deixa o componente pai gerenciar o fechamento e reabertura
    await onCreate({
      title: title.trim(),
      imageFile: croppedFile, // File object
      targetLink: targetLink.trim(),
      active: true,
    });
  };

  const handleClose = () => {
    setStep(1);
    setTitle('');
    setTargetLink('');
    setOriginalFile(null);
    setImageSrc(null);
    setCroppedImage(null);
    setCroppedFile(null);
    setIsEditingExistingImage(false);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {preservedData?.imageUrl ? 'Editar Banner' : 'Criar Novo Banner'}
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-primary/30 rounded-lg p-12 text-center hover:border-primary/50 transition-colors">
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-4">
                Clique para fazer upload da imagem do banner (máx. 8 MB)
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="banner-upload"
              />
              <label htmlFor="banner-upload">
                <Button type="button" asChild>
                  <span>Escolher Imagem</span>
                </Button>
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="relative h-96 bg-black rounded-lg overflow-hidden">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={21 / 9}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Zoom</label>
              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="flex gap-3">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => {
                  // Se tem croppedFile OU está editando uma imagem existente, volta para o formulário
                  // Caso contrário, volta para seleção de arquivo
                  if (croppedFile || isEditingExistingImage) {
                    setStep(3);
                  } else {
                    setStep(1);
                  }
                }} 
                className="flex-1"
              >
                Voltar
              </Button>
              <Button type="button" onClick={handleCropConfirm} className="flex-1">
                <Crop className="h-4 w-4 mr-2" />
                Confirmar Recorte
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Preview da imagem recortada */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Preview</label>
              <div className="w-full aspect-[21/9] rounded-lg overflow-hidden bg-muted">
                <img
                  src={croppedImage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Se tem croppedFile, mostra opções de recortar novamente */}
              {croppedFile && (
                <>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setIsEditingExistingImage(false);
                      setStep(2);
                    }}
                  >
                    Recortar Novamente
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsEditingExistingImage(false);
                      setStep(1);
                    }}
                  >
                    Escolher Outra Imagem
                  </Button>
                </>
              )}
              
              {/* Se é edição e não tem novo arquivo, mostra opção de mudar imagem */}
              {!croppedFile && preservedData?.imageUrl && (
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={handleRecropExistingImage}
                  >
                    Recortar Novamente
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsEditingExistingImage(true);
                      setStep(1);
                    }}
                  >
                    Mudar Imagem
                  </Button>
                </div>
              )}
            </div>

            {/* Formulário */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Título do Banner *
                </label>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Bem-vindo ao CACo"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  URL de Redirecionamento *
                </label>
                <Input
                  type="text"
                  value={targetLink}
                  onChange={(e) => setTargetLink(e.target.value)}
                  placeholder="Ex: /eventos/123 ou https://..."
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Para onde o usuário vai ao clicar no banner.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
                Cancelar
              </Button>
              <Button type="submit" disabled={loading} className="flex-1">
                <Save className="h-4 w-4 mr-2" />
                {loading 
                  ? (preservedData?.imageUrl ? 'Salvando...' : 'Criando...') 
                  : (preservedData?.imageUrl ? 'Salvar Alterações' : 'Criar Banner')
                }
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
```

## 📄 src/features/admin/dashboard/banner/useAdminBannersVM.js
```javascript
import { useState, useEffect } from 'react';
import { apiClient } from '@/shared/services/apiClient';
import { Banner } from './Banner';

export function useAdminBannersVM() {
  const [activeBanners, setActiveBanners] = useState([]);
  const [inactiveBanners, setInactiveBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    loadBanners();
  }, []);

  const loadBanners = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [activeData, inactiveData] = await Promise.all([
        apiClient.get('admin/banners/active'),
        apiClient.get('admin/banners/inactive'),
      ]);
      
      // Converte DTOs para instâncias de Banner
      setActiveBanners(Banner.fromDTOArray(activeData));
      setInactiveBanners(Banner.fromDTOArray(inactiveData));
    } catch (err) {
      setError(err.message || 'Erro ao carregar banners');
    } finally {
      setLoading(false);
    }
  };

  const createBanner = async (bannerData) => {
    // Cria preview da imagem localmente
    const imagePreview = URL.createObjectURL(bannerData.imageFile);
    
    // Cria banner temporário usando o Model
    const tempBanner = Banner.createTemporary({
      title: bannerData.title,
      imageUrl: imagePreview,
      targetLink: bannerData.targetLink,
    });
    
    setActiveBanners([...activeBanners, tempBanner]);
    
    try {
      setCreating(true);
      
      // Criar FormData para enviar o arquivo
      const formData = new FormData();
      formData.append('title', bannerData.title);
      formData.append('imageFile', bannerData.imageFile);
      formData.append('targetLink', bannerData.targetLink);
      formData.append('active', true); // Sempre ativo por padrão
      
      // Callback para atualizar progresso
      const onProgress = (percentual) => {
        setActiveBanners(current => 
          current.map(b => 
            b.id === tempBanner.id 
              ? b.clone({ uploadProgress: percentual })
              : b
          )
        );
      };
      
      const newBannerDTO = await apiClient.postFormDataWithProgress(
        'admin/banners', 
        formData, 
        onProgress
      );
      
      // Converte DTO para instância de Banner e substitui o temporário
      const newBanner = Banner.fromDTO(newBannerDTO);
      setActiveBanners(current => 
        current.map(b => b.id === tempBanner.id ? newBanner : b)
      );
      
      // Libera a URL temporária
      URL.revokeObjectURL(imagePreview);
      
      return { success: true, data: newBanner };
    } catch (err) {
      // Remove o banner temporário em caso de erro
      setActiveBanners(current => current.filter(b => b.id !== tempBanner.id));
      URL.revokeObjectURL(imagePreview);
      
      return { success: false, error: err.message };
    } finally {
      setCreating(false);
    }
  };

  const reorderActiveBanners = async (newOrder) => {
    try {
      // Atualiza localmente primeiro para feedback imediato
      setActiveBanners(newOrder);
      
      // Envia para o backend
      const bannerIds = newOrder.map(b => b.id);
      await apiClient.put('admin/banners/reorder', { bannerIds });
      
      return { success: true };
    } catch (err) {
      // Reverte em caso de erro
      await loadBanners();
      return { success: false, error: err.message };
    }
  };

  const toggleBannerStatus = async (bannerId, isCurrentlyActive) => {
    try {
      await apiClient.put(`admin/banners/${bannerId}/toggle`);
      
      if (isCurrentlyActive) {
        // Move de ativo para inativo
        const banner = activeBanners.find(b => b.id === bannerId);
        if (banner) {
          setActiveBanners(activeBanners.filter(b => b.id !== bannerId));
          setInactiveBanners([...inactiveBanners, banner]);
        }
      } else {
        // Move de inativo para ativo (ao final da lista)
        const banner = inactiveBanners.find(b => b.id === bannerId);
        if (banner) {
          setInactiveBanners(inactiveBanners.filter(b => b.id !== bannerId));
          setActiveBanners([...activeBanners, banner]);
        }
      }
      
      return { success: true };
    } catch (err) {
      // Reverte em caso de erro
      await loadBanners();
      return { success: false, error: err.message };
    }
  };

  const deleteBanner = async (id) => {
    try {
      await apiClient.delete(`admin/banners/${id}`);
      setActiveBanners(activeBanners.filter(b => b.id !== id));
      setInactiveBanners(inactiveBanners.filter(b => b.id !== id));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const updateBanner = async (id, bannerData) => {
    try {
      const formData = new FormData();
      formData.append('title', bannerData.title);
      formData.append('targetLink', bannerData.targetLink);
      
      // Se tiver uma nova imagem (File), adiciona ao FormData
      if (bannerData.imageFile instanceof File) {
        formData.append('imageFile', bannerData.imageFile);
      }
      // Senão, não precisa enviar a imagem (mantém a existente no backend)
      
      const updatedBannerDTO = await apiClient.putFormData(`admin/banners/${id}`, formData);
      
      // Converte DTO para instância de Banner
      const updatedBanner = Banner.fromDTO(updatedBannerDTO);
      
      // Atualiza o banner na lista correta
      setActiveBanners(activeBanners.map(b => b.id === id ? updatedBanner : b));
      setInactiveBanners(inactiveBanners.map(b => b.id === id ? updatedBanner : b));
      
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return {
    activeBanners,
    inactiveBanners,
    loading,
    error,
    creating,
    createBanner,
    updateBanner,
    reorderActiveBanners,
    toggleBannerStatus,
    deleteBanner,
    refreshBanners: loadBanners,
  };
}
```

## 📄 src/features/admin/dashboard/warning/Warning.js
```javascript
/**
 * Modelo de Warning (Aviso)
 * Baseado no CreateWarningDTO do backend
 */

export const SeverityLevel = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL',
};

export class Warning {
  constructor(data = {}) {
    this.id = data.id || null;
    this.markdownText = data.markdownText || '';
    this.severityLevel = data.severityLevel || SeverityLevel.LOW;
    this.startsAt = data.startsAt || null; // ISO string
    this.expiresAt = data.expiresAt || null; // ISO string
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  /**
   * Verifica se o aviso está ativo no momento
   */
  isActive() {
    const now = new Date();
    const start = new Date(this.startsAt);
    const end = new Date(this.expiresAt);
    return now >= start && now <= end;
  }

  /**
   * Converte para o DTO de criação
   */
  toCreateDTO() {
    return {
      markdownText: this.markdownText,
      severityLevel: this.severityLevel,
      startsAt: this.startsAt,
      expiresAt: this.expiresAt,
    };
  }

  /**
   * Retorna a cor correspondente ao nível de severidade
   */
  getSeverityColor() {
    switch (this.severityLevel) {
      case SeverityLevel.CRITICAL:
        return 'bg-red-50 border-red-300 text-red-900';
      case SeverityLevel.HIGH:
        return 'bg-orange-50 border-orange-300 text-orange-900';
      case SeverityLevel.MEDIUM:
        return 'bg-yellow-50 border-yellow-300 text-yellow-900';
      case SeverityLevel.LOW:
        return 'bg-blue-50 border-blue-300 text-blue-900';
      default:
        return 'bg-gray-50 border-gray-300 text-gray-900';
    }
  }

  /**
   * Retorna o label traduzido do nível de severidade
   */
  getSeverityLabel() {
    switch (this.severityLevel) {
      case SeverityLevel.CRITICAL:
        return 'Crítico';
      case SeverityLevel.HIGH:
        return 'Alto';
      case SeverityLevel.MEDIUM:
        return 'Médio';
      case SeverityLevel.LOW:
        return 'Baixo';
      default:
        return 'Desconhecido';
    }
  }
}
```

## 📄 src/features/admin/dashboard/warning/components/CreateWarningModal.jsx
```jsx
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { SeverityLevel } from '../Warning';
import { DatePicker } from '../../../components/DatePicker';
import { TimeInput } from '../../../components/TimeInput';
import { SeveritySelector } from './SeveritySelector';
import { WarningPreview } from './WarningPreview';
import { combineDateAndTime } from '@/shared/utils/helpers';

export function CreateWarningModal({ open, onClose, onCreate, onUpdate, loading, editingWarning }) {
  const [formData, setFormData] = useState({
    markdownText: '',
    severityLevel: SeverityLevel.LOW,
    startDate: null,
    startTime: '',
    endDate: null,
    endTime: '',
  });

  const [errors, setErrors] = useState({});

  // Quando editar um aviso, preenche o formulário
  useEffect(() => {
    if (open && editingWarning) {
      const startDate = new Date(editingWarning.startsAt);
      const endDate = new Date(editingWarning.expiresAt);
      
      setFormData({
        markdownText: editingWarning.markdownText || '',
        severityLevel: editingWarning.severityLevel || SeverityLevel.LOW,
        startDate: startDate,
        startTime: startDate.toTimeString().slice(0, 5),
        endDate: endDate,
        endTime: endDate.toTimeString().slice(0, 5),
      });
    } else if (open && !editingWarning) {
      // Reset para novo aviso
      setFormData({
        markdownText: '',
        severityLevel: SeverityLevel.LOW,
        startDate: null,
        startTime: '',
        endDate: null,
        endTime: '',
      });
      setErrors({});
    }
  }, [open, editingWarning]);

  const validate = () => {
    const newErrors = {};

    if (!formData.markdownText.trim()) {
      newErrors.markdownText = 'O texto do aviso é obrigatório';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'A data de início é obrigatória';
    }

    if (!formData.endDate) {
      newErrors.endDate = 'A data de término é obrigatória';
    }

    if (formData.startDate && formData.endDate) {
      const start = combineDateAndTime(formData.startDate, formData.startTime, '00:00');
      const end = combineDateAndTime(formData.endDate, formData.endTime, '23:59');
      
      if (end <= start) {
        newErrors.endDate = 'A data de término deve ser posterior à data de início';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    // Monta as datas ISO usando valores padrão se hora estiver vazia
    const startsAt = combineDateAndTime(formData.startDate, formData.startTime, '00:00');
    const expiresAt = combineDateAndTime(formData.endDate, formData.endTime, '23:59');

    const dto = {
      markdownText: formData.markdownText,
      severityLevel: formData.severityLevel,
      startsAt: startsAt.toISOString(),
      expiresAt: expiresAt.toISOString(),
    };

    if (editingWarning) {
      await onUpdate(editingWarning.id, dto);
    } else {
      await onCreate(dto);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">
            {editingWarning ? 'Editar Aviso' : 'Criar Novo Aviso'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Texto do Aviso (Markdown) */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Texto do Aviso (Markdown)
            </label>
            <textarea
              value={formData.markdownText}
              onChange={(e) => setFormData({ ...formData, markdownText: e.target.value })}
              placeholder="**Atenção:** Este é um exemplo de aviso com *markdown*"
              rows={6}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
            />
            {errors.markdownText && (
              <p className="text-red-500 text-sm mt-1">{errors.markdownText}</p>
            )}
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Você pode usar negrito (**texto**), itálico (*texto*), links ([texto](url)), etc.
            </p>
          </div>

          {/* Nível de Severidade */}
          <SeveritySelector
            value={formData.severityLevel}
            onChange={(level) => setFormData({ ...formData, severityLevel: level })}
          />

          {/* Data e Hora de Início */}
          <div className="grid md:grid-cols-2 gap-4">
            <DatePicker
              value={formData.startDate}
              onChange={(date) => setFormData({ ...formData, startDate: date })}
              error={errors.startDate}
              label="Data de Início"
            />
            
            <TimeInput
              value={formData.startTime}
              onChange={(time) => setFormData({ ...formData, startTime: time })}
              onError={(error) => {
                if (error) {
                  setErrors({ ...errors, startTime: error });
                } else {
                  const newErrors = { ...errors };
                  delete newErrors.startTime;
                  setErrors(newErrors);
                }
              }}
              error={errors.startTime}
              label="Hora de Início (opcional)"
              placeholder="00:00"
            />
          </div>

          {/* Data e Hora de Término */}
          <div className="grid md:grid-cols-2 gap-4">
            <DatePicker
              value={formData.endDate}
              onChange={(date) => setFormData({ ...formData, endDate: date })}
              error={errors.endDate}
              label="Data de Término"
            />
            
            <TimeInput
              value={formData.endTime}
              onChange={(time) => setFormData({ ...formData, endTime: time })}
              onError={(error) => {
                if (error) {
                  setErrors({ ...errors, endTime: error });
                } else {
                  const newErrors = { ...errors };
                  delete newErrors.endTime;
                  setErrors(newErrors);
                }
              }}
              error={errors.endTime}
              label="Hora de Término (opcional)"
              placeholder="23:59"
            />
          </div>

          {/* Preview do Aviso */}
          <WarningPreview
            markdownText={formData.markdownText}
            severityLevel={formData.severityLevel}
          />

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
              className="w-full sm:w-auto"
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading} className="w-full sm:w-auto">
              {loading ? 'Salvando...' : editingWarning ? 'Atualizar' : 'Criar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## 📄 src/features/admin/dashboard/warning/components/FilterButtons.jsx
```jsx
export function FilterButtons({ filters, currentFilter, onFilterChange, items, filterKey = 'severityLevel' }) {
  const getFilterCount = (filterValue) => {
    if (filterValue === 'ALL') return items.length;
    return items.filter(item => item[filterKey] === filterValue).length;
  };

  const getButtonStyles = (filter) => {
    const isActive = currentFilter === filter.value;
    
    if (filter.value === 'ALL') {
      return isActive
        ? 'bg-primary text-primary-foreground'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    }

    const colorClasses = {
      CRITICAL: {
        active: 'bg-gray-300 text-gray-900 border border-gray-900',
        inactive: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      },
      HIGH: {
        active: 'bg-red-500 text-white',
        inactive: 'bg-red-100 text-red-700 hover:bg-red-200'
      },
      MEDIUM: {
        active: 'bg-yellow-500 text-white',
        inactive: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
      },
      LOW: {
        active: 'bg-blue-500 text-white',
        inactive: 'bg-blue-100 text-blue-700 hover:bg-blue-200'
      }
    };

    const colors = colorClasses[filter.value] || colorClasses.LOW;
    return isActive ? colors.active : colors.inactive;
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${getButtonStyles(filter)}`}
        >
          {filter.label} ({getFilterCount(filter.value)})
        </button>
      ))}
    </div>
  );
}
```

## 📄 src/features/admin/dashboard/warning/components/SeveritySelector.jsx
```jsx
import { SeverityLevel } from '../Warning';
import { AlertCircle, AlertTriangle, Ban, Info } from 'lucide-react';

const SEVERITY_CONFIG = {
  LOW: {
    label: 'Baixo',
    icon: Info,
    color: 'border-blue-400 bg-blue-50 hover:bg-blue-100 text-blue-700 data-[selected=true]:bg-blue-500 data-[selected=true]:text-white data-[selected=true]:border-blue-600',
  },
  MEDIUM: {
    label: 'Médio',
    icon: AlertCircle,
    color: 'border-yellow-400 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 data-[selected=true]:bg-yellow-500 data-[selected=true]:text-white data-[selected=true]:border-yellow-600',
  },
  HIGH: {
    label: 'Alto',
    icon: AlertTriangle,
    color: 'border-red-400 bg-red-50 hover:bg-red-100 text-red-700 data-[selected=true]:bg-red-500 data-[selected=true]:text-white data-[selected=true]:border-red-600',
  },
  CRITICAL: {
    label: 'Crítico',
    icon: Ban,
    color: 'border-gray-700 bg-gray-100 hover:bg-gray-200 text-gray-800 data-[selected=true]:bg-gray-800 data-[selected=true]:text-white data-[selected=true]:border-gray-900',
  },
};

export function SeveritySelector({ value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        Nível de Severidade
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {Object.entries(SeverityLevel).map(([key, level]) => {
          const config = SEVERITY_CONFIG[key];
          const Icon = config.icon;
          
          return (
            <button
              key={level}
              type="button"
              data-selected={value === level}
              onClick={() => onChange(level)}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2.5 rounded-lg border-2 font-medium transition-all ${config.color}`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-xs">{config.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
```

## 📄 src/features/admin/dashboard/warning/components/WarningItem.jsx
```jsx
import { Trash2, Edit2, Clock, AlertTriangle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';
import { Warning } from '../Warning';
import { SEVERITY_STYLES, SEVERITY_LABELS } from '../models/WarningSeverity';

export function WarningItem({ warning, onEdit, onDelete, onExpire }) {
  const warningObj = new Warning(warning);
  
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const getSeverityBadge = () => {
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${SEVERITY_STYLES[warning.severityLevel] || 'bg-gray-100'}`}>
        {SEVERITY_LABELS[warning.severityLevel] || warning.severityLevel}
      </span>
    );
  };

  const isActive = warningObj.isActive();

  return (
    <Card className={`${!isActive ? 'opacity-60' : ''}`}>
      <CardContent className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
          <div className="flex-1 space-y-3">
            {/* Cabeçalho com severidade e status */}
            <div className="flex items-center gap-2 flex-wrap">
              {getSeverityBadge()}
              {!isActive && (
                <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-300">
                  Inativo
                </span>
              )}
            </div>

            {/* Texto do aviso */}
            <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 text-sm sm:text-base">
              <ReactMarkdown>{warning.markdownText}</ReactMarkdown>
            </div>

            {/* Data e hora */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="font-medium">Início:</span>
                <span className="break-all">{formatDateTime(warning.startsAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="font-medium">Término:</span>
                <span className="break-all">{formatDateTime(warning.expiresAt)}</span>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="flex gap-2 justify-end sm:justify-start sm:flex-shrink-0">
            {isActive && onExpire && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onExpire(warning)}
                className="h-8 w-8 p-0 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                title="Forçar expiração"
              >
                <XCircle className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit(warning)}
              className="h-8 w-8 p-0"
            >
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(warning)}
              className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
```

## 📄 src/features/admin/dashboard/warning/components/WarningPreview.jsx
```jsx
export function WarningPreview({ markdownText, severityLevel }) {
  if (!markdownText) return null;

  const getSeverityStyles = () => {
    switch (severityLevel) {
      case 'CRITICAL':
        return 'bg-gray-200 border-gray-900 text-gray-950';
      case 'HIGH':
        return 'bg-red-100 border-red-400 text-red-950';
      case 'MEDIUM':
        return 'bg-yellow-100 border-yellow-400 text-yellow-950';
      default:
        return 'bg-blue-100 border-blue-400 text-blue-950';
    }
  };

  const renderMarkdown = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold hover:underline">$1</a>');
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        Preview
      </label>
      <div className={`rounded-lg border-2 p-4 ${getSeverityStyles()}`}>
        <div className="prose prose-sm max-w-none [&_a]:text-primary [&_a]:font-semibold [&_a]:hover:underline">
          <div dangerouslySetInnerHTML={{ __html: renderMarkdown(markdownText) }} />
        </div>
      </div>
    </div>
  );
}
```

## 📄 src/features/admin/dashboard/warning/components/WarningsSection.jsx
```jsx
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Plus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { WarningItem } from './WarningItem';
import { CreateWarningModal } from './CreateWarningModal';
import { ConfirmDeleteDialog } from '../../../components/ConfirmDeleteDialog';
import { FilterButtons } from './FilterButtons';

const WARNING_FILTERS = [
  { value: 'ALL', label: 'Todos' },
  { value: 'CRITICAL', label: 'Crítico' },
  { value: 'HIGH', label: 'Alto' },
  { value: 'MEDIUM', label: 'Médio' },
  { value: 'LOW', label: 'Baixo' },
];

export function WarningsSection({
  activeWarnings,
  expiredWarnings,
  allActiveWarnings,
  allExpiredWarnings,
  loading,
  creating,
  activeFilter,
  expiredFilter,
  onActiveFilterChange,
  onExpiredFilterChange,
  onCreate,
  onUpdate,
  onDelete,
  onExpire,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingWarning, setEditingWarning] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [warningToDelete, setWarningToDelete] = useState(null);

  const handleEdit = (warning) => {
    setEditingWarning(warning);
    setModalOpen(true);
  };

  const handleDelete = (warning) => {
    setWarningToDelete(warning.id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!warningToDelete) return;
    await onDelete(warningToDelete);
    setDeleteDialogOpen(false);
    setWarningToDelete(null);
  };

  const handleCreateWarning = async (dto) => {
    const success = await onCreate(dto);
    if (success) {
      setModalOpen(false);
      setEditingWarning(null);
    }
  };

  const handleUpdateWarning = async (id, dto) => {
    const success = await onUpdate(id, dto);
    if (success) {
      setModalOpen(false);
      setEditingWarning(null);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingWarning(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <>
      {/* Avisos Ativos */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Avisos Ativos
              </CardTitle>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                Avisos que ainda não expiraram
              </p>
            </div>
            <Button onClick={() => setModalOpen(true)} size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Novo Aviso
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <FilterButtons
            filters={WARNING_FILTERS}
            currentFilter={activeFilter}
            onFilterChange={onActiveFilterChange}
            items={allActiveWarnings}
          />

          {allActiveWarnings.length === 0 ? (
            <div className="text-center py-8 md:py-12">
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Nenhum aviso ativo ainda.
              </p>
              <Button onClick={() => setModalOpen(true)} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Criar Primeiro Aviso
              </Button>
            </div>
          ) : activeWarnings.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground">
                Nenhum aviso neste filtro.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {activeWarnings.map((warning) => (
                <WarningItem
                  key={warning.id}
                  warning={warning}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onExpire={onExpire}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Avisos Expirados */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="expired-warnings" className="border-none">
          <Card>
            <CardHeader className="pb-3">
              <AccordionTrigger className="hover:no-underline [&[data-state=open]>div]:mb-2">
                <div className="flex-1">
                  <CardTitle className="text-lg md:text-xl flex items-center gap-2 text-left">
                    <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                    Avisos Expirados ({allExpiredWarnings.length})
                  </CardTitle>
                  <p className="text-xs md:text-sm text-muted-foreground text-left">
                    Avisos que já passaram da data de término
                  </p>
                </div>
              </AccordionTrigger>
            </CardHeader>
            <AccordionContent>
              <CardContent>
                <FilterButtons
                  filters={WARNING_FILTERS}
                  currentFilter={expiredFilter}
                  onFilterChange={onExpiredFilterChange}
                  items={allExpiredWarnings}
                />

                {allExpiredWarnings.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-sm text-muted-foreground">
                      Nenhum aviso expirado.
                    </p>
                  </div>
                ) : expiredWarnings.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-sm text-muted-foreground">
                      Nenhum aviso neste filtro.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {expiredWarnings.map((warning) => (
                      <WarningItem
                        key={warning.id}
                        warning={warning}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </AccordionContent>
          </Card>
        </AccordionItem>
      </Accordion>

      <ConfirmDeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={confirmDelete}
        title="Confirmar exclusão"
        description="Tem certeza que deseja excluir este aviso? Esta ação não pode ser desfeita."
      />

      <CreateWarningModal
        open={modalOpen}
        onClose={handleCloseModal}
        onCreate={handleCreateWarning}
        onUpdate={handleUpdateWarning}
        loading={creating}
        editingWarning={editingWarning}
      />
    </>
  );
}
```

## 📄 src/features/admin/dashboard/warning/models/WarningSeverity.js
```javascript
export const WarningSeverity = {
    CRITICAL: 'CRITICAL',
    HIGH: 'HIGH',
    MEDIUM: 'MEDIUM',
    LOW: 'LOW',
    INFO: 'INFO',
};

export const SEVERITY_STYLES = {
    [WarningSeverity.CRITICAL]: 'bg-red-500 text-white hover:bg-red-600',
    [WarningSeverity.HIGH]: 'bg-orange-500 text-white hover:bg-orange-600',
    [WarningSeverity.MEDIUM]: 'bg-yellow-500 text-white hover:bg-yellow-600',
    [WarningSeverity.LOW]: 'bg-blue-500 text-white hover:bg-blue-600',
    [WarningSeverity.INFO]: 'bg-gray-500 text-white hover:bg-gray-600',
};

export const SEVERITY_LABELS = {
    [WarningSeverity.CRITICAL]: 'Crítico',
    [WarningSeverity.HIGH]: 'Alto',
    [WarningSeverity.MEDIUM]: 'Médio',
    [WarningSeverity.LOW]: 'Baixo',
    [WarningSeverity.INFO]: 'Info',
};
```

## 📄 src/features/admin/dashboard/warning/useAdminWarningsVM.js
```javascript
import { useState, useEffect } from 'react';
import { warningService } from '@/shared/services/warningService';
import { useToast } from '@/components/ui/use-toast.jsx';
import { SeverityLevel } from './Warning';

export function useAdminWarningsVM() {
  const [activeWarnings, setActiveWarnings] = useState([]);
  const [expiredWarnings, setExpiredWarnings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [expiredFilter, setExpiredFilter] = useState('ALL');
  const { toast } = useToast();

  useEffect(() => {
    loadWarnings();
  }, []);

  const loadWarnings = async () => {
    try {
      setLoading(true);
      const data = await warningService.getAllWarnings();
      
      const now = new Date();
      
      // Separa em ativos e expirados
      const active = [];
      const expired = [];
      
      data.forEach(warning => {
        const expiresAt = new Date(warning.expiresAt);
        if (expiresAt > now) {
          active.push(warning);
        } else {
          expired.push(warning);
        }
      });
      
      // Ordena ambos por data de criação (mais recentes primeiro)
      active.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      expired.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      
      setActiveWarnings(active);
      setExpiredWarnings(expired);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao carregar avisos',
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const createWarning = async (createDTO) => {
    try {
      setCreating(true);
      const newWarning = await warningService.createWarning(createDTO);
      
      // Determina se é ativo ou expirado
      const now = new Date();
      const expiresAt = new Date(newWarning.expiresAt);
      
      if (expiresAt > now) {
        setActiveWarnings(prev => [newWarning, ...prev]);
      } else {
        setExpiredWarnings(prev => [newWarning, ...prev]);
      }
      
      toast({
        title: 'Aviso criado',
        description: 'O aviso foi criado com sucesso.',
      });
      
      return true;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao criar aviso',
        description: error.message,
      });
      return false;
    } finally {
      setCreating(false);
    }
  };

  const updateWarning = async (id, updateDTO) => {
    try {
      setCreating(true);
      const updatedWarning = await warningService.updateWarning(id, updateDTO);
      
      const now = new Date();
      const expiresAt = new Date(updatedWarning.expiresAt);
      const isActive = expiresAt > now;
      
      // Remove das duas listas
      setActiveWarnings(prev => prev.filter(w => w.id !== id));
      setExpiredWarnings(prev => prev.filter(w => w.id !== id));
      
      // Adiciona na lista correta
      if (isActive) {
        setActiveWarnings(prev => {
          const updated = [updatedWarning, ...prev];
          return updated.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        });
      } else {
        setExpiredWarnings(prev => {
          const updated = [updatedWarning, ...prev];
          return updated.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        });
      }
      
      toast({
        title: 'Aviso atualizado',
        description: 'O aviso foi atualizado com sucesso.',
      });
      
      return true;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao atualizar aviso',
        description: error.message,
      });
      return false;
    } finally {
      setCreating(false);
    }
  };

  const deleteWarning = async (id) => {
    try {
      await warningService.deleteWarning(id);
      
      // Remove de ambas as listas
      setActiveWarnings(prev => prev.filter(w => w.id !== id));
      setExpiredWarnings(prev => prev.filter(w => w.id !== id));
      
      toast({
        title: 'Aviso excluído',
        description: 'O aviso foi excluído com sucesso.',
      });
      
      return true;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir aviso',
        description: error.message,
      });
      return false;
    }
  };

  const expireWarning = async (id) => {
    try {
      // Encontra o aviso antes de expirar
      const warningToExpire = activeWarnings.find(w => w.id === id);
      if (!warningToExpire) return false;
      
      await warningService.expireWarning(id);
      
      // Atualiza a data de expiração para agora
      const expiredWarning = {
        ...warningToExpire,
        expiresAt: new Date().toISOString(),
      };
      
      // Remove dos avisos ativos e adiciona aos expirados
      setActiveWarnings(prev => prev.filter(w => w.id !== id));
      setExpiredWarnings(prev => {
        const updated = [expiredWarning, ...prev];
        return updated.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      });
      
      toast({
        title: 'Aviso expirado',
        description: 'O aviso foi marcado como expirado.',
      });
      
      return true;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao expirar aviso',
        description: error.message,
      });
      return false;
    }
  };

  // Filtra warnings baseado no filtro selecionado
  const getFilteredWarnings = (warnings, filter) => {
    if (filter === 'ALL') return warnings;
    return warnings.filter(w => w.severityLevel === filter);
  };

  return {
    activeWarnings: getFilteredWarnings(activeWarnings, activeFilter),
    expiredWarnings: getFilteredWarnings(expiredWarnings, expiredFilter),
    allActiveWarnings: activeWarnings,
    allExpiredWarnings: expiredWarnings,
    loading,
    creating,
    activeFilter,
    expiredFilter,
    setActiveFilter,
    setExpiredFilter,
    createWarning,
    updateWarning,
    deleteWarning,
    expireWarning,
  };
}
```

## 📄 src/features/admin/event/AdminEventsPage.jsx
```jsx
import { useAdminEventsVM } from './useAdminEventsVM';
import { EventForm } from './components/EventForm'; 
import { EventItem } from './components/EventItem';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Plus, PenTool, Trash2, Search, X } from 'lucide-react';

export function AdminEventsPage() {
  const vm = useAdminEventsVM();

  if (vm.viewMode === 'FORM') {
    return (
      <EventForm 
        key={vm.selectedEvent ? vm.selectedEvent.id : 'new-event'}
        initialData={vm.selectedEvent}
        onSubmit={vm.handleSubmit}
        onCancel={vm.handleCancelForm}
        onDelete={vm.deleteEvent}
        loading={vm.loading}
      />
    );
  }

  // Componente Auxiliar para Tags de Filtro
  const FilterTag = ({ label, active, onClick }) => (
    <Badge 
      variant={active ? "default" : "outline"}
      className={`cursor-pointer px-4 py-1.5 text-sm hover:bg-primary/90 hover:text-primary-foreground transition-all ${
        !active && "hover:bg-muted text-muted-foreground"
      }`}
      onClick={onClick}
    >
      {label}
    </Badge>
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Gerenciar Eventos</h1>
        <Button onClick={vm.handleCreateClick}>
          <Plus className="w-4 h-4 mr-2" /> Novo Evento
        </Button>
      </div>

      {/* Alerta de Rascunho */}
      {vm.hasDraft && (
        <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950/20 text-orange-800 dark:text-orange-200">
          <PenTool className="h-4 w-4" />
          <AlertTitle>Rascunho encontrado!</AlertTitle>
          <AlertDescription className="flex items-center justify-between mt-2">
            <span>Você tem um evento não finalizado salvo.</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-transparent border-orange-300 hover:bg-orange-100" onClick={vm.discardDraft}>
                <Trash2 className="w-3 h-3 mr-1" /> Descartar
              </Button>
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white" onClick={vm.handleCreateClick}>
                Continuar Editando
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* --- SISTEMA DE FILTROS POR TAGS --- */}
      <div className="space-y-4">
        {/* Busca e Limpar */}
        <div className="relative max-w-md">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
                placeholder="Buscar por título ou local..." 
                className="pl-8"
                value={vm.searchTerm}
                onChange={(e) => vm.setSearchTerm(e.target.value)}
            />
            {vm.searchTerm && (
                <button 
                    onClick={() => vm.setSearchTerm('')}
                    className="absolute right-2 top-2.5 text-muted-foreground hover:text-foreground"
                >
                    <X className="w-4 h-4" />
                </button>
            )}
        </div>

        {/* Grupos de Tags */}
        <div className="flex flex-col gap-3">
            {/* Status (Temporal) */}
            <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-semibold text-muted-foreground uppercase mr-2 w-20">Período:</span>
                <FilterTag label="Todos" active={vm.filters.period === 'ALL'} onClick={() => vm.setFilter('period', 'ALL')} />
                <FilterTag label="Próximos" active={vm.filters.period === 'UPCOMING'} onClick={() => vm.setFilter('period', 'UPCOMING')} />
                <FilterTag label="Passados" active={vm.filters.period === 'PAST'} onClick={() => vm.setFilter('period', 'PAST')} />
            </div>

            {/* Tipo */}
            <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-semibold text-muted-foreground uppercase mr-2 w-20">Tipo:</span>
                <FilterTag label="Todos" active={vm.filters.type === 'ALL'} onClick={() => vm.setFilter('type', 'ALL')} />
                <FilterTag label="CACo" active={vm.filters.type === 'CACO'} onClick={() => vm.setFilter('type', 'CACO')} />
                <FilterTag label="IC" active={vm.filters.type === 'IC'} onClick={() => vm.setFilter('type', 'IC')} />
                <FilterTag label="Feriado" active={vm.filters.type === 'FERIADO'} onClick={() => vm.setFilter('type', 'FERIADO')} />
            </div>

            {/* Importância */}
            <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-semibold text-muted-foreground uppercase mr-2 w-20">Destaque:</span>
                <FilterTag label="Todos" active={vm.filters.importance === 'ALL'} onClick={() => vm.setFilter('importance', 'ALL')} />
                <FilterTag label="Importante" active={vm.filters.importance === 'MAJOR'} onClick={() => vm.setFilter('importance', 'MAJOR')} />
                <FilterTag label="Comum" active={vm.filters.importance === 'MINOR'} onClick={() => vm.setFilter('importance', 'MINOR')} />
            </div>
        </div>
      </div>

      {/* Lista de Eventos (Unificada) */}
      {vm.loading ? (
        <div className="py-20 text-center text-muted-foreground">Carregando eventos...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            {vm.filteredList.length === 0 ? (
                 <div className="col-span-full text-center py-12 border-2 border-dashed rounded-lg text-muted-foreground">
                    Nenhum evento encontrado com os filtros selecionados.
                 </div>
            ) : (
                vm.filteredList.map(event => (
                    <EventItem 
                        key={event.id} 
                        event={event} 
                        onUpdate={() => vm.handleEditClick(event)} 
                        onDelete={() => vm.deleteEvent(event.id)} 
                    />
                ))
            )}
        </div>
      )}
    </div>
  );
}
```

## 📄 src/features/admin/event/Event.js
```javascript
export class Event {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.description = data.description;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.location = data.location;
    this.locationUrl = data.locationUrl;
    this.coverImage = data.coverImage;
    this.type = data.type; // 'CACO', 'IC', 'FERIADO'
    this.importance = data.importance; // 'MAJOR', 'MINOR'
    this.status = data.status; // 'SCHEDULED', 'HAPPENING', 'ENDED'
    this.galleryItems = data.galleryItems || [];
  }

  static fromDTO(dto) {
    return new Event({
      ...dto,
      galleryItems: dto.galleryItems || []
    });
  }

  static fromDTOArray(dtos) {
    return dtos.map(dto => Event.fromDTO(dto));
  }

  clone(updates = {}) {
    return new Event({ ...this, ...updates });
  }

  // Propriedades computadas
  get isMajor() {
    return this.importance === 'MAJOR';
  }

  get isMinor() {
    return this.importance === 'MINOR';
  }

  get isScheduled() {
    return this.status === 'SCHEDULED';
  }

  get isHappening() {
    return this.status === 'HAPPENING';
  }

  get isEnded() {
    return this.status === 'ENDED';
  }

  get isCacoEvent() {
    return this.type === 'CACO';
  }

  get isIcEvent() {
    return this.type === 'IC';
  }

  get isHoliday() {
    return this.type === 'FERIADO';
  }

  get hasCoverImage() {
    return !!this.coverImage;
  }

  get galleryImageUrls() {
    return this.galleryItems
      .filter(item => item.type === 'IMAGE')
      .map(item => item.mediaUrl);
  }

  get formattedStartDate() {
    return this.formatDateTime(this.startDate);
  }

  get formattedEndDate() {
    return this.formatDateTime(this.endDate);
  }

  get durationInHours() {
    if (!this.startDate || !this.endDate) return 0;
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    return Math.round((end - start) / (1000 * 60 * 60));
  }

  // Método auxiliar para formatação
  formatDateTime(dateTime) {
    if (!dateTime) return '';
    const date = new Date(dateTime);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Validação
  isValid() {
    return this.title && 
           this.startDate && 
           this.endDate && 
           new Date(this.startDate) < new Date(this.endDate);
  }

  // Para formulários
  toFormData() {
    const formData = new FormData();
    formData.append('title', this.title || '');
    formData.append('slug', this.slug || '');
    formData.append('description', this.description || '');
    formData.append('startDate', this.startDate || '');
    formData.append('endDate', this.endDate || '');
    formData.append('location', this.location || '');
    formData.append('locationUrl', this.locationUrl || '');
    formData.append('type', this.type || 'CACO');
    formData.append('importance', this.importance || 'MINOR');
    formData.append('status', this.status || 'SCHEDULED');
    
    // Para arquivos (coverImage), você precisa lidar separadamente
    return formData;
  }
}
```

## 📄 src/features/admin/event/components/EventForm.jsx
```jsx
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { MDXEditor } from '@/shared/components/MDXEditor';
import { useToast } from '@/components/ui/use-toast';
import {
    CalendarIcon, Upload, MapPin, Type, AlertCircle, Link as LinkIcon,
    Save, Trash2, ArrowLeft, Image as ImageIcon, ExternalLink, Eraser, Crop, X
} from 'lucide-react';
import Cropper from 'react-easy-crop';
import { combineDateAndTime, toLocalISOString } from '@/shared/utils/helpers';
import { DatePicker } from '../../components/DatePicker';
import { TimeInput } from '../../components/TimeInput';
import { ConfirmDeleteDialog } from '../../components/ConfirmDeleteDialog';
import { useImageCropper } from '@/shared/hooks/useImageCropper';
import { extractUrlFromIframe } from '@/lib/utils';

const DRAFT_KEY = 'event-draft';

const EVENT_TYPES = [
    { value: 'CACO', label: 'Evento CACo' },
    { value: 'IC', label: 'IC' },
    { value: 'FERIADO', label: 'Feriado' },
];

const IMPORTANCE_TYPES = [
    { value: 'MAJOR', label: 'Importante' },
    { value: 'MINOR', label: 'Comum' },
];

const STATUS_TYPES = [
    { value: 'SCHEDULED', label: 'Agendado' },
    { value: 'HAPPENING', label: 'Ocorrendo' },
    { value: 'ENDED', label: 'Finalizado' },
];

const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
};

const ErrorMessage = ({ message }) => {
    if (!message) return null;
    return <p className="text-sm font-medium text-destructive mt-1 animate-in slide-in-from-top-1 fade-in">{message}</p>;
};

export function EventForm({
    initialData,
    onSubmit,
    onCancel,
    loading,
    onDelete
}) {
    const { toast } = useToast();

    // --- ESTADOS DE IMAGEM ---
    const imageCropper = useImageCropper(initialData?.coverImage || null);
    
    // --- ESTADOS DO FORMULÁRIO ---
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [slugEdited, setSlugEdited] = useState(false);
    const [description, setDescription] = useState('');
    const [editorKey, setEditorKey] = useState(0);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [location, setLocation] = useState('');
    const [locationUrl, setLocationUrl] = useState('');
    const [type, setType] = useState('CACO');
    const [importance, setImportance] = useState('MINOR');
    const [status, setStatus] = useState('SCHEDULED');
    const [differentDay, setDifferentDay] = useState(false);

    const [errors, setErrors] = useState({});

    // Dialogs
    const [exitDialogOpen, setExitDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [discardDraftDialogOpen, setDiscardDraftDialogOpen] = useState(false);

    // CARREGAMENTO DE DADOS
    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || '');
            setSlug(initialData.slug || '');
            setDescription(initialData.description || '');
            setEditorKey(prev => prev + 1);
            setLocation(initialData.location || '');
            setLocationUrl(initialData.locationUrl || '');
            setType(initialData.type || 'CACO');
            setImportance(initialData.importance || 'MINOR');
            setStatus(initialData.status || 'SCHEDULED');

            if (initialData.startDate) {
                const start = new Date(initialData.startDate);
                setStartDate(start);
                setStartTime(formatTime(start));
            }

            if (initialData.endDate) {
                const end = new Date(initialData.endDate);
                setEndDate(end);
                setEndTime(formatTime(end));
                if (initialData.startDate) {
                    const start = new Date(initialData.startDate);
                    setDifferentDay(start.toDateString() !== end.toDateString());
                }
            }
        } else {
            const savedDraft = localStorage.getItem(DRAFT_KEY);
            if (savedDraft) {
                try {
                    const draft = JSON.parse(savedDraft);
                    if (draft.title) setTitle(draft.title);
                    if (draft.slug) setSlug(draft.slug);
                    if (draft.description) {
                        setDescription(draft.description);
                        setEditorKey(prev => prev + 1);
                    }
                    if (draft.location) setLocation(draft.location);
                    if (draft.locationUrl) setLocationUrl(draft.locationUrl);
                    if (draft.type) setType(draft.type);
                    if (draft.importance) setImportance(draft.importance);
                    if (draft.startTime) setStartTime(draft.startTime);
                    if (draft.endTime) setEndTime(draft.endTime);
                    if (draft.differentDay) setDifferentDay(draft.differentDay);
                    if (draft.startDate) setStartDate(new Date(draft.startDate));
                    if (draft.endDate) setEndDate(new Date(draft.endDate));

                    // Nota: Imagens não são salvas no rascunho do localStorage por serem pesadas
                } catch (e) {
                    console.error("Erro ao ler rascunho", e);
                }
            }
        }
    }, [initialData]);

   // Salvar rascunho com DEBOUNCE (atraso)
    useEffect(() => {
        if (!initialData) {
            // Cria um timer para salvar apenas após 2 segundos sem digitar
            const timeoutId = setTimeout(() => {
                if (title || description || startDate) {
                    const draft = {
                        title, slug, description, location, locationUrl,
                        type, importance, startDate, endDate, startTime, endTime, differentDay
                    };
                    console.log("Salvando rascunho..."); // Opcional: para debug
                    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
                }
            }, 2000);

            // Se o usuário digitar novamente antes de 2s, limpa o timer anterior
            return () => clearTimeout(timeoutId);
        }
    }, [initialData, title, slug, description, location, locationUrl, type, importance, startDate, endDate, startTime, endTime, differentDay]);

    const formatTime = (date) => date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false });

    const handleDiscardDraft = () => {
        localStorage.removeItem(DRAFT_KEY);
        setTitle('');
        setSlug('');
        setDescription('');
        setEditorKey(prev => prev + 1);
        setLocation('');
        setLocationUrl('');
        setStartDate(null);
        setEndDate(null);
        setStartTime('');
        setEndTime('');

        // Limpar imagem
        imageCropper.reset();

        setDiscardDraftDialogOpen(false);
        toast({ title: "Rascunho limpo" });
    };

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        if (!slugEdited) setSlug(slugify(newTitle));
        if (errors.title) setErrors(prev => ({ ...prev, title: null }));
    };

    const handleSlugChange = (e) => {
        setSlug(slugify(e.target.value));
        setSlugEdited(true);
        if (errors.slug) setErrors(prev => ({ ...prev, slug: null }));
    };

    const handleBackClick = () => {
        if (!initialData) {
            setExitDialogOpen(true);
        } else {
            onCancel();
        }
    };

    const handleLocationUrlChange = (e) => {
        let value = e.target.value;
        const extracted = extractUrlFromIframe(value);
        if (extracted !== value) {
            toast({
                title: "Link do mapa detectado",
                description: "O link foi extraído automaticamente do código iframe.",
            });
            value = extracted;
        }
        setLocationUrl(value);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!title.trim()) newErrors.title = "O título é obrigatório.";
        if (!slug.trim()) newErrors.slug = "O slug é obrigatório.";
        if (!description.trim()) newErrors.description = "A descrição é obrigatória.";
        if (!startDate) newErrors.startDate = "Data de início obrigatória.";

        if (differentDay && !endDate) newErrors.endDate = "Data de término obrigatória.";

        if (!newErrors.startDate && !newErrors.startTime && !newErrors.endTime) {
            const startDateTime = combineDateAndTime(startDate, startTime, '00:00');
            const endDateTime = differentDay
                ? combineDateAndTime(endDate, endTime, '23:59')
                : combineDateAndTime(startDate, endTime, '23:59');

            if (endDateTime && startDateTime && endDateTime <= startDateTime) {
                newErrors.dateLogic = "A data final deve ser posterior à data inicial.";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast({
                variant: "destructive",
                title: "Campos inválidos",
                description: "Por favor, verifique os campos em vermelho.",
            });

            setTimeout(() => {
                const firstErrorElement = document.querySelector('[data-error="true"]');
                if (firstErrorElement) {
                    firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstErrorElement.focus({ preventScroll: true });
                }
            }, 100);
            return;
        }

        // Combina data e hora usando valores padrão se hora estiver vazia
        const startDateTime = combineDateAndTime(startDate, startTime, '00:00');
        const endDateTime = differentDay
            ? combineDateAndTime(endDate, endTime, '23:59')
            : combineDateAndTime(startDate, endTime, '23:59');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('slug', slug);
        formData.append('description', description);

        if (startDateTime) formData.append('startDate', toLocalISOString(startDateTime));
        if (endDateTime) formData.append('endDate', toLocalISOString(endDateTime));

        formData.append('location', location);
        formData.append('locationUrl', locationUrl);
        formData.append('type', type);
        formData.append('importance', importance);

        if (initialData) {
            formData.append('status', status);
            // Flag de remoção (para DTO)
            formData.append('removeCoverImage', imageCropper.isRemoved.toString());
        }

        // Se tiver arquivo novo, envia.
        if (imageCropper.file) {
            formData.append('coverImage', imageCropper.file);
        }

        const result = await onSubmit(formData, initialData?.id);

        if (result?.success) {
            localStorage.removeItem(DRAFT_KEY);
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">

            {/* Cabeçalho */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={handleBackClick}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar
                    </Button>
                    <h1 className="text-2xl font-bold tracking-tight">
                        {initialData ? 'Editar Evento' : 'Novo Evento'}
                    </h1>
                </div>
                <div className="flex gap-2">
                    {!initialData && (
                        <Button variant="ghost" className="text-muted-foreground hover:text-destructive" size="sm" onClick={() => setDiscardDraftDialogOpen(true)}>
                            <Eraser className="w-4 h-4 mr-2" /> Descartar Rascunho
                        </Button>
                    )}
                    {initialData && (
                        <Button variant="destructive" size="sm" onClick={() => setDeleteDialogOpen(true)} disabled={loading}>
                            <Trash2 className="w-4 h-4 mr-2" /> Excluir
                        </Button>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* COLUNA ESQUERDA: Conteúdo */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Informações do Evento</CardTitle>
                            <CardDescription>Detalhes principais do evento.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label className={errors.title ? "text-destructive" : ""}>Título *</Label>
                                <Input
                                    value={title}
                                    onChange={handleTitleChange}
                                    placeholder="Ex: Recepção de Calouros"
                                    className={errors.title ? "border-destructive" : ""}
                                    data-error={!!errors.title}
                                />
                                <ErrorMessage message={errors.title} />
                            </div>

                            <div className="space-y-2">
                                <Label className={`text-xs font-bold ${errors.slug ? "text-destructive" : "text-muted-foreground"}`}>Slug (URL-Friendly) *</Label>
                                <Input
                                    value={slug}
                                    onChange={handleSlugChange}
                                    placeholder="Ex: recepcao-de-calouros"
                                    className={`font-mono text-sm ${errors.slug ? "border-destructive" : ""}`}
                                    data-error={!!errors.slug}
                                />
                                <ErrorMessage message={errors.slug} />
                            </div>

                            <div className="space-y-2">
                                <Label className={errors.description ? "text-destructive" : ""}>Descrição (Markdown) *</Label>
                                <div
                                    className={`rounded-md ${errors.description ? "border-destructive" : ""}`}
                                    data-error={!!errors.description}
                                >
                                    <MDXEditor
                                        editorKey={editorKey.toString()}
                                        value={description}
                                        onChange={(val) => {
                                            setDescription(val);
                                            if (errors.description && val.trim()) setErrors(prev => ({ ...prev, description: null }));
                                        }}
                                        placeholder="Descreva o evento..."
                                    />
                                </div>
                                <ErrorMessage message={errors.description} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><CalendarIcon className="w-5 h-5" /> Data e Horário</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ErrorMessage message={errors.dateLogic} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <div data-error={!!errors.startDate}>
                                        <DatePicker
                                            value={startDate}
                                            onChange={(val) => {
                                                setStartDate(val);
                                                if (val) setErrors(prev => ({ ...prev, startDate: null }));
                                            }}
                                            label="Data Início *"
                                            hasError={!!errors.startDate}
                                        />
                                    </div>
                                    <ErrorMessage message={errors.startDate} />
                                </div>

                                <div className="space-y-1">
                                    <TimeInput
                                        value={startTime}
                                        onChange={(val) => {
                                            setStartTime(val);
                                            if (val) setErrors(prev => ({ ...prev, startTime: null }));
                                        }}
                                        label="Hora Início *"
                                        className={errors.startTime ? "border-destructive" : ""}
                                        data-error={!!errors.startTime}
                                    />
                                    <ErrorMessage message={errors.startTime} />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 py-2">
                                <Switch id="diff-day" checked={differentDay} onCheckedChange={setDifferentDay} />
                                <Label htmlFor="diff-day">Termina em outro dia?</Label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {differentDay ? (
                                    <div className="space-y-1">
                                        <div data-error={!!errors.endDate}>
                                            <DatePicker
                                                value={endDate}
                                                onChange={(val) => {
                                                    setEndDate(val);
                                                    if (val) setErrors(prev => ({ ...prev, endDate: null }));
                                                }}
                                                label="Data Término *"
                                                hasError={!!errors.endDate}
                                            />
                                        </div>
                                        <ErrorMessage message={errors.endDate} />
                                    </div>
                                ) : <div className="hidden md:block"></div>}

                                <div className="space-y-1">
                                    <TimeInput
                                        value={endTime}
                                        onChange={(val) => {
                                            setEndTime(val);
                                            if (val) setErrors(prev => ({ ...prev, endTime: null }));
                                        }}
                                        label="Hora Término *"
                                        placeholder="23:59"
                                        className={errors.endTime ? "border-destructive" : ""}
                                        data-error={!!errors.endTime}
                                    />
                                    <ErrorMessage message={errors.endTime} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* COLUNA DIREITA: Mídia e Configs */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><ImageIcon className="w-5 h-5" /> Imagem de Capa</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {imageCropper.previewUrl ? (
                                    <div className="relative group rounded-lg overflow-hidden border aspect-video bg-muted">
                                        <img src={imageCropper.previewUrl} alt="Cover" className="w-full h-full object-cover" />

                                        {/* Overlay com Ações (Trocar e Remover) */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                            <Button size="sm" variant="secondary" onClick={() => document.getElementById('cover-upload').click()}>
                                                Trocar
                                            </Button>
                                            <Button size="sm" variant="destructive" onClick={imageCropper.handleRemove} title="Remover imagem">
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition group"
                                        onClick={() => document.getElementById('cover-upload').click()}
                                    >
                                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                                        <p className="text-sm text-muted-foreground">Clique para enviar (Opcional)</p>
                                        <p className="text-xs text-muted-foreground mt-1">Formato 16:9 recomendado</p>
                                    </div>
                                )}
                                <input id="cover-upload" type="file" accept="image/*" className="hidden" onChange={imageCropper.handleFileSelect} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle>Configurações</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label><MapPin className="w-4 h-4 inline mr-1" /> Local (Nome)</Label>
                                <Input value={location} onChange={e => setLocation(e.target.value)} placeholder="Ex: Auditório Central" />
                            </div>

                            <div className="space-y-2">
                                <Label><LinkIcon className="w-4 h-4 inline mr-1" /> Link do Mapa</Label>
                                <div className="flex gap-2">
                                    <Input value={locationUrl} onChange={handleLocationUrlChange} placeholder="Cole o link ou iframe do Google Maps" />
                                    {locationUrl && <Button variant="outline" size="icon" asChild><a href={locationUrl} target="_blank" rel="noreferrer"><ExternalLink className="w-4 h-4" /></a></Button>}
                                </div>
                            </div>

                            <Separator />

                            <div className="space-y-2">
                                <Label><Type className="w-4 h-4 inline mr-1" /> Tipo</Label>
                                <div className="flex flex-wrap gap-2">
                                    {EVENT_TYPES.map(t => (
                                        <Badge key={t.value} variant={type === t.value ? "default" : "outline"} className="cursor-pointer" onClick={() => setType(t.value)}>{t.label}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label><AlertCircle className="w-4 h-4 inline mr-1" /> Importância</Label>
                                <div className="flex flex-wrap gap-2">
                                    {IMPORTANCE_TYPES.map(t => (
                                        <Badge key={t.value} variant={importance === t.value ? "default" : "outline"} className="cursor-pointer" onClick={() => setImportance(t.value)}>{t.label}</Badge>
                                    ))}
                                </div>
                            </div>

                            {initialData && (
                                <div className="space-y-2 pt-2">
                                    <Label>Status</Label>
                                    <select className="w-full border rounded-md p-2 text-sm bg-background" value={status} onChange={e => setStatus(e.target.value)}>
                                        {STATUS_TYPES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                                    </select>
                                </div>
                            )}
                        </CardContent>
                        <CardFooter className="bg-muted/20 border-t p-4 flex justify-end gap-3">
                            <Button variant="outline" onClick={handleBackClick} disabled={loading}>Cancelar</Button>
                            <Button onClick={handleFormSubmit} disabled={loading}>{loading ? 'Salvando...' : <><Save className="w-4 h-4 mr-2" /> Salvar</>}</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            {/* --- MODAL DE RECORTE (Mantido o layout solicitado) --- */}
            <Dialog open={imageCropper.isModalOpen} onOpenChange={imageCropper.setIsModalOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Ajustar Imagem</DialogTitle>
                        <DialogDescription>Recorte e ajuste a imagem para melhor visualização.</DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4">
                        <div className="relative h-96 bg-black rounded-lg overflow-hidden border">
                            <Cropper
                                image={imageCropper.imageSrc}
                                crop={imageCropper.crop}
                                zoom={imageCropper.zoom}
                                aspect={16 / 9}
                                onCropChange={imageCropper.setCrop}
                                onZoomChange={imageCropper.setZoom}
                                onCropComplete={imageCropper.onCropComplete}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <Label className="text-sm font-medium">Zoom</Label>
                                <span className="text-xs text-muted-foreground">{imageCropper.zoom.toFixed(1)}x</span>
                            </div>
                            <input
                                type="range"
                                min={1}
                                max={3}
                                step={0.1}
                                value={imageCropper.zoom}
                                onChange={(e) => imageCropper.setZoom(Number(e.target.value))}
                                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                        </div>
                    </div>

                    <DialogFooter className="gap-2 sm:gap-0 mt-4">
                        <Button
                            variant="outline"
                            onClick={imageCropper.handleCancelCrop}
                        >
                            Voltar
                        </Button>
                        <Button onClick={imageCropper.handleCropConfirm} disabled={imageCropper.loading}>
                            {imageCropper.loading ? 'Processando...' : <><Crop className="h-4 w-4 mr-2" /> Confirmar Recorte</>}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <ConfirmDeleteDialog
                open={exitDialogOpen}
                onOpenChange={setExitDialogOpen}
                title="Rascunho Salvo"
                description="Suas alterações foram salvas. Deseja sair?"
                onConfirm={onCancel}
                confirmText="Sair"
                cancelText="Continuar Editando"
            />

            <ConfirmDeleteDialog
                open={discardDraftDialogOpen}
                onOpenChange={setDiscardDraftDialogOpen}
                title="Descartar Rascunho?"
                description="Você perderá todo o progresso deste evento novo."
                onConfirm={handleDiscardDraft}
                confirmText="Descartar"
            />

            <ConfirmDeleteDialog
                open={deleteDialogOpen}
                onOpenChange={setDeleteDialogOpen}
                title="Excluir Evento?"
                description="Essa ação não pode ser desfeita."
                onConfirm={() => onDelete(initialData.id)}
                confirmText="Excluir Definitivamente"
            />
        </div>
    );
}
```

## 📄 src/features/admin/event/components/EventItem.jsx
```jsx
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ConfirmDeleteDialog } from "../../components/ConfirmDeleteDialog"; // Ajuste o caminho conforme necessário
import { CalendarIcon, MapPin, Image as ImageIcon, Edit2, Trash2, ExternalLink } from "lucide-react";

export function EventItem({ event, onUpdate, onDelete }) {
  // Estado local para controlar o Dialog de exclusão deste item específico
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // Ação ao clicar no card (abrir evento)
  const handleCardClick = () => {
    if (event.slug) {
        window.open(`/eventos/${event.slug}`, '_blank');
    } else {
        // Fallback ou apenas ignorar se não tiver slug
        console.warn("Evento sem slug");
    }
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Impede que o clique no botão abra o card
    setIsDeleteDialogOpen(true); // Abre o dialog
  };

  // Cores e Labels
  const getStatusColor = () => {
      if (event.isHappening) return "default";
      if (event.isScheduled) return "secondary";
      return "outline";
  };

  const getStatusLabel = () => {
      if (event.isHappening) return "Acontecendo Agora";
      if (event.isScheduled) return "Agendado";
      return "Finalizado";
  };

  return (
    <>
        <Card 
            className="flex flex-col overflow-hidden hover:shadow-lg transition-all cursor-pointer group border-transparent hover:border-muted-foreground/20"
            onClick={handleCardClick}
        >
        {/* Imagem */}
        <div className="relative w-full aspect-video bg-muted overflow-hidden">
            {event.coverImage ? (
            <img
                src={event.coverImage}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            ) : (
                <div className="w-full h-full flex items-center justify-center flex-col text-muted-foreground/40">
                    <ImageIcon className="h-10 w-10 mb-2" />
                    <span className="text-xs">Sem capa</span>
                </div>
            )}
            
            <div className="absolute top-2 right-2">
                <Badge variant={getStatusColor()} className="shadow-sm uppercase text-[10px] tracking-wider">
                    {getStatusLabel()}
                </Badge>
            </div>

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-background/80 text-foreground text-xs px-2 py-1 rounded-full flex items-center shadow-sm">
                    <ExternalLink className="w-3 h-3 mr-1" /> Ver no site
                </span>
            </div>
        </div>

        <CardHeader className="p-4 pb-2">
            <h3 className="font-bold text-lg leading-tight line-clamp-2 mb-2 group-hover:text-primary transition-colors" title={event.title}>
                {event.title}
            </h3>
            
            <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-[10px] px-1.5 h-5 border-primary/20 text-primary/80">
                    {event.type}
                </Badge>
                {event.importance === 'MAJOR' && (
                    <Badge variant="destructive" className="text-[10px] px-1.5 h-5">
                        ★ Importante
                    </Badge>
                )}
            </div>
        </CardHeader>

        <CardContent className="p-4 py-2 flex-1 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 shrink-0" />
                <span>
                    {new Date(event.startDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
                    {' • '}
                    {new Date(event.startDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute:'2-digit' })}
                </span>
            </div>
            {event.location && (
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="line-clamp-1">{event.location}</span>
                </div>
            )}
        </CardContent>

        <CardFooter className="p-3 border-t bg-muted/5 gap-2">
            <div className="flex w-full gap-2 justify-end">
                <Button 
                    variant="secondary" 
                    size="sm" 
                    className="h-8 px-3 text-xs"
                    onClick={(e) => {
                        e.stopPropagation();
                        onUpdate();
                    }}
                >
                    <Edit2 className="w-3 h-3 mr-1.5" /> Editar
                </Button>
                
                {/* Botão de Excluir que abre o Dialog */}
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive" 
                    onClick={handleDeleteClick}
                >
                    <Trash2 className="w-4 h-4" />
                </Button>
            </div>
        </CardFooter>
        </Card>

        {/* DIALOG DE CONFIRMAÇÃO DENTRO DO ITEM */}
        <ConfirmDeleteDialog
            open={isDeleteDialogOpen}
            onOpenChange={setIsDeleteDialogOpen}
            title="Excluir Evento?"
            description={`Tem certeza que deseja excluir "${event.title}"? Essa ação não pode ser desfeita.`}
            onConfirm={(e) => {
                onDelete();
            }}
            confirmText="Excluir"
        />
    </>
  );
}
```

## 📄 src/features/admin/event/useAdminEventsVM.js
```javascript
import { useState, useEffect, useMemo } from 'react';
import { eventService } from '@/shared/services/eventService';
import { Event } from './Event';
import { useToast } from '@/components/ui/use-toast';

const DRAFT_KEY = 'event-draft';

export function useAdminEventsVM() {
  const { toast } = useToast();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Controle de Visualização
  const [viewMode, setViewMode] = useState('LIST');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Controle de Rascunho
  const [hasDraft, setHasDraft] = useState(false);

  // Filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    period: 'UPCOMING',
    type: 'ALL',
    importance: 'ALL'
  });

  useEffect(() => {
    loadEvents();
    checkForDraft();
  }, []);

  // Helper para extrair mensagem de erro do backend
  const getErrorMessage = (err) => {
    if (err.response?.data?.errors && Array.isArray(err.response.data.errors)) {
      // Formato comum de validação do Spring (BindingResult)
      return err.response.data.errors.map(e => e.defaultMessage || e.message).join(' | ');
    }
    return err.response?.data?.message || err.message || "Ocorreu um erro inesperado.";
  };

  const checkForDraft = () => {
    const draft = localStorage.getItem(DRAFT_KEY);
    setHasDraft(!!draft);
  };

  const discardDraft = () => {
    localStorage.removeItem(DRAFT_KEY);
    setHasDraft(false);
    toast({
      title: "Rascunho descartado",
      description: "As informações não salvas foram removidas.",
    });
  };

  const loadEvents = async () => {
    try {
      setLoading(true);
      const [upcoming, past] = await Promise.all([
        eventService.getUpcomingEvents(0, 100),
        eventService.getPastEvents(0, 100),
      ]);

      const allEvents = [
        ...Event.fromDTOArray(upcoming.content || []),
        ...Event.fromDTOArray(past.content || [])
      ];

      allEvents.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
      setEvents(allEvents);
    } catch (err) {
      console.error('Erro ao carregar eventos:', err);
      toast({
        variant: "destructive",
        title: "Erro ao carregar",
        description: "Não foi possível buscar a lista de eventos.",
      });
    } finally {
      setLoading(false);
    }
  };

  const createEvent = async (formData) => {
    try {
      setIsSubmitting(true);
      const newEvent = await eventService.createEvent(formData);
      const eventInstance = Event.fromDTO(newEvent);

      setEvents(prev => [eventInstance, ...prev]);
      setViewMode('LIST');

      localStorage.removeItem(DRAFT_KEY);
      setHasDraft(false);

      toast({
        title: "Evento criado!",
        description: `O evento "${eventInstance.title}" foi salvo com sucesso.`,
      });
      return { success: true };
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Erro ao criar",
        description: getErrorMessage(err),
      });
      return { success: false, error: err.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateEvent = async (id, formData) => {
    try {
      setIsSubmitting(true);
      const updated = await eventService.updateEvent(id, formData);
      const eventInstance = Event.fromDTO(updated);

      setEvents(prev => prev.map(e => e.id === id ? eventInstance : e));
      setViewMode('LIST');

      toast({
        title: "Evento atualizado!",
        description: "As alterações foram salvas com sucesso.",
      });
      return { success: true };
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Erro ao atualizar",
        description: getErrorMessage(err),
      });
      return { success: false, error: err.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteEvent = async (id) => {
    try {
      setLoading(true);
      await eventService.deleteEvent(id);
      setEvents(prev => prev.filter(e => e.id !== id));

      if (viewMode === 'FORM') {
        setViewMode('LIST');
        setSelectedEvent(null);
      }

      toast({
        title: "Evento excluído",
        description: "O evento foi removido permanentemente.",
      });
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Erro ao excluir",
        description: getErrorMessage(err),
      });
    } finally {
      setLoading(false);
    }
  };

  // --- FILTRAGEM ---
  const setFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredList = useMemo(() => {
    return events.filter(event => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        event.title.toLowerCase().includes(searchLower) ||
        (event.location && event.location.toLowerCase().includes(searchLower));

      if (!matchesSearch) return false;
      if (filters.type !== 'ALL' && event.type !== filters.type) return false;
      if (filters.importance !== 'ALL' && event.importance !== filters.importance) return false;

      if (filters.period === 'UPCOMING') return event.isScheduled || event.isHappening;
      if (filters.period === 'PAST') return event.isEnded;

      return true;
    });
  }, [events, searchTerm, filters]);

  const handleCreateClick = () => { setSelectedEvent(null); setViewMode('FORM'); };
  
  const handleEditClick = async (eventSummary) => {
    try {
      setLoading(true);
      // Busca o DTO completo usando o ID do evento
      const fullEventData = await apiClient.get(`public/events/${eventSummary.id}`);

      // Transforma o DTO completo em uma instância da classe Event
      const eventInstance = Event.fromDTO(fullEventData);

      setSelectedEvent(eventInstance);
      setViewMode('FORM');
    } catch (err) {
      console.error('Erro ao buscar detalhes do evento:', err);
      toast({
        variant: "destructive",
        title: "Erro ao carregar detalhes",
        description: "Não foi possível recuperar todas as informações do evento.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancelForm = () => {
    setSelectedEvent(null);
    setViewMode('LIST');
    checkForDraft();
  };
  const handleSubmit = async (data, id) => id ? await updateEvent(id, data) : await createEvent(data);

  return {
    loading: loading || isSubmitting,
    viewMode,
    selectedEvent,
    hasDraft,
    searchTerm, setSearchTerm,
    filters, setFilter, filteredList,
    loadEvents, deleteEvent, discardDraft, handleSubmit,
    handleCreateClick, handleEditClick, handleCancelForm,
  };
}
```

## 📄 src/features/admin/exams/AdminExamBankPage.jsx
```jsx
import React from 'react';
import { useToast } from '@/components/ui/use-toast.jsx';
import { useAdminExamsVM } from './useAdminExamsVM';
import { ExamsSection } from './components/ExamsSection';

export function AdminExamBankPage() {
  const { toast } = useToast();
  const examsVM = useAdminExamsVM();

  const handleDeleteExam = async (examId) => {
    const result = await examsVM.deleteExam(examId);
    if (result.success) {
      toast({
        title: 'Prova excluída',
        description: 'A prova foi removida com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir',
        description: result.error,
      });
    }
    return result.success;
  };

  const handleDeleteSubject = async (subjectCode) => {
    const result = await examsVM.deleteSubject(subjectCode);
    if (result.success) {
      toast({
        title: 'Disciplina excluída',
        description: 'A disciplina e todas as suas provas foram removidas.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir',
        description: result.error,
      });
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Banco de Provas</h1>

      <ExamsSection
        subjects={examsVM.subjects}
        selectedSubject={examsVM.selectedSubject}
        onSelectSubject={examsVM.setSelectedSubject}
        exams={examsVM.exams}
        loading={examsVM.loading}
        loadingExams={examsVM.loadingExams}
        creating={examsVM.creating}
        onCreateSubject={examsVM.createSubject}
        onDeleteSubject={handleDeleteSubject}
        onCreateExam={examsVM.createExam}
        onUpdateExam={examsVM.updateExam}
        onDeleteExam={handleDeleteExam}
      />
    </div>
  );
}
```

## 📄 src/features/admin/exams/components/CreateExamModal.jsx
```jsx
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast.jsx';

const EXAM_TYPES = [
  { value: 'P1', label: 'P1' },
  { value: 'P2', label: 'P2' },
  { value: 'P3', label: 'P3' },
  { value: 'EXAME', label: 'EXAME' },
  { value: 'SUB', label: 'SUB' },
  { value: 'OUTROS', label: 'OUTROS' },
];

export function CreateExamModal({ open, onClose, onCreate, onUpdate, loading, selectedSubject, editingExam }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [type, setType] = useState('P1');
  const [pdfUrl, setPdfUrl] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      if (editingExam) {
        // Modo edição - preenche com dados existentes
        setYear(editingExam.year);
        setType(editingExam.type);
        setPdfUrl(editingExam.pdfUrl || '');
      } else {
        // Modo criação - limpa campos
        setYear(new Date().getFullYear());
        setType('P1');
        setPdfUrl('');
      }
    }
  }, [open, editingExam]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSubject) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Nenhuma disciplina selecionada',
      });
      return;
    }

    if (!year) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Ano é obrigatório',
      });
      return;
    }

    if (!type) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Tipo de prova é obrigatório',
      });
      return;
    }

    if (!pdfUrl.trim()) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Por favor, informe o link do PDF',
      });
      return;
    }

    // Validação básica de URL
    try {
      new URL(pdfUrl);
    } catch {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Por favor, informe uma URL válida',
      });
      return;
    }

    const examData = {
      subjectCode: selectedSubject.subjectCode,
      year: parseInt(year),
      type,
      fileUrl: pdfUrl.trim(), // Backend espera fileUrl
    };

    let result;
    if (editingExam) {
      result = await onUpdate(editingExam.id, examData);
    } else {
      result = await onCreate(examData);
    }

    if (result.success) {
      toast({
        title: 'Sucesso',
        description: editingExam ? 'Prova atualizada com sucesso!' : 'Prova adicionada com sucesso!',
      });
      onClose();
    } else {
      toast({
        variant: 'destructive',
        title: editingExam ? 'Erro ao atualizar prova' : 'Erro ao adicionar prova',
        description: result.error,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {editingExam ? 'Editar Prova' : 'Adicionar Prova'}
            {selectedSubject && (
              <span className="block text-sm text-gray-500 mt-1 font-normal">
                {selectedSubject.subjectCode} - {selectedSubject.name}
              </span>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="year" className="text-sm font-medium">
              Ano *
            </label>
            <Input
              id="year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              min="1900"
              max="2100"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="type" className="text-sm font-medium">
              Tipo de Prova *
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              {EXAM_TYPES.map((examType) => (
                <option key={examType.value} value={examType.value}>
                  {examType.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="pdfUrl" className="text-sm font-medium">
              Link do PDF *
            </label>
            <Input
              id="pdfUrl"
              type="url"
              value={pdfUrl}
              onChange={(e) => setPdfUrl(e.target.value)}
              placeholder="https://drive.google.com/..."
              required
            />
            <p className="text-xs text-gray-500">
              Cole o link direto do PDF (Google Drive, Dropbox, etc.)
            </p>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading 
                ? (editingExam ? 'Atualizando...' : 'Adicionando...') 
                : (editingExam ? 'Atualizar Prova' : 'Adicionar Prova')
              }
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## 📄 src/features/admin/exams/components/CreateSubjectModal.jsx
```jsx
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast.jsx';

export function CreateSubjectModal({ open, onClose, onCreate, loading }) {
  const [subjectCode, setSubjectCode] = useState('');
  const [name, setName] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      setSubjectCode('');
      setName('');
    }
  }, [open]);

  const handleSubjectCodeChange = (e) => {
    // Converte automaticamente para maiúsculas
    const value = e.target.value.toUpperCase();
    // Remove caracteres que não sejam letras ou números
    const sanitized = value.replace(/[^A-Z0-9]/g, '');
    setSubjectCode(sanitized);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subjectCode.trim()) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Código da disciplina é obrigatório',
      });
      return;
    }

    if (!name.trim()) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Nome da disciplina é obrigatório',
      });
      return;
    }

    const result = await onCreate({
      subjectCode: subjectCode.trim(),
      name: name.trim(),
    });

    if (result.success) {
      toast({
        title: 'Sucesso',
        description: 'Disciplina criada com sucesso!',
      });
      onClose();
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao criar disciplina',
        description: result.error,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Adicionar Nova Disciplina</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="subjectCode" className="text-sm font-medium">
              Código da Disciplina *
            </label>
            <Input
              id="subjectCode"
              value={subjectCode}
              onChange={handleSubjectCodeChange}
              placeholder="Ex: MAC0338"
              maxLength={20}
              required
              className="font-mono"
            />
            <p className="text-xs text-gray-500">
              Apenas letras maiúsculas e números
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nome da Disciplina *
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Análise de Algoritmos"
              maxLength={100}
              required
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Criando...' : 'Criar Disciplina'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## 📄 src/features/admin/exams/components/ExamItem.jsx
```jsx
import { FileText, ExternalLink, Trash2, Edit } from 'lucide-react';

export function ExamItem({ exam, onDelete, onEdit }) {
  const handleOpenLink = () => {
    if (exam.pdfUrl) {
      // Garante que a URL tenha protocolo
      let url = exam.pdfUrl;
      
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative border rounded-lg p-4 hover:shadow-md transition-all">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
          <FileText className="h-6 w-6 text-blue-600" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm">
            {exam.typeLabel} - {exam.year}
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            {exam.createdAt 
              ? `Adicionado em ${exam.createdAt.toLocaleDateString('pt-BR')}`
              : 'Recém adicionado'
            }
          </p>
        </div>
      </div>
      
      <div className="flex gap-2 justify-between items-center border-t pt-2">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(exam)}
            className="text-xs px-2 py-1 text-gray-600 hover:bg-gray-50 rounded transition-colors flex items-center gap-1"
            title="Editar prova"
          >
            <Edit size={14} />
            Editar
          </button>
          <button
            onClick={() => onDelete(exam.id)}
            className="text-xs px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors flex items-center gap-1"
            title="Excluir prova"
          >
            <Trash2 size={14} />
            Excluir
          </button>
        </div>
        
        <button
          onClick={handleOpenLink}
          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
          title="Abrir PDF"
        >
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
}
```

## 📄 src/features/admin/exams/components/ExamList.jsx
```jsx
import { ExamItem } from './ExamItem';
import { Button } from '@/components/ui/button';
import { Plus, FileQuestion } from 'lucide-react';

export function ExamList({ exams, loading, onAddExam, onDeleteExam, onEditExam, selectedSubject }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12 min-h-[300px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (!selectedSubject) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500 min-h-[300px]">
        <FileQuestion size={48} className="mb-4" />
        <p>Selecione uma disciplina para ver as provas</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            Provas - {selectedSubject.subjectCode}
          </h3>
          <p className="text-sm text-gray-500">{selectedSubject.name}</p>
        </div>
        <Button onClick={onAddExam} size="sm">
          <Plus size={16} className="mr-1" />
          Adicionar Prova
        </Button>
      </div>

      {exams.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-gray-500 border-2 border-dashed rounded-lg">
          <FileQuestion size={48} className="mb-4" />
          <p>Nenhuma prova cadastrada para esta disciplina</p>
          <Button onClick={onAddExam} variant="outline" className="mt-4" size="sm">
            <Plus size={16} className="mr-1" />
            Adicionar primeira prova
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {exams.map((exam) => (
            <ExamItem
              key={exam.id}
              exam={exam}
              onDelete={onDeleteExam}
              onEdit={onEditExam}
            />
          ))}
        </div>
      )}
    </div>
  );
}
```

## 📄 src/features/admin/exams/components/ExamsSection.jsx
```jsx
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExamList } from './ExamList';
import { CreateExamModal } from './CreateExamModal';
import { SubjectTabs } from './SubjectTabs';
import { CreateSubjectModal } from './CreateSubjectModal';
import { ConfirmDeleteDialog } from '../../components/ConfirmDeleteDialog';

export function ExamsSection({
  subjects,
  selectedSubject,
  onSelectSubject,
  exams,
  loading,
  loadingExams,
  creating,
  onCreateSubject,
  onDeleteSubject,
  onCreateExam,
  onUpdateExam,
  onDeleteExam,
}) {
  const [subjectModalOpen, setSubjectModalOpen] = useState(false);
  const [examModalOpen, setExamModalOpen] = useState(false);
  const [editingExam, setEditingExam] = useState(null);
  const [deleteExamDialogOpen, setDeleteExamDialogOpen] = useState(false);
  const [examToDelete, setExamToDelete] = useState(null);

  const handleEditExam = (exam) => {
    setEditingExam(exam);
    setExamModalOpen(true);
  };

  const handleCloseExamModal = () => {
    setExamModalOpen(false);
    setEditingExam(null);
  };

  const handleDeleteExam = (examId) => {
    setExamToDelete(examId);
    setDeleteExamDialogOpen(true);
  };

  const confirmDeleteExam = async () => {
    if (!examToDelete) return;
    await onDeleteExam(examToDelete);
    setDeleteExamDialogOpen(false);
    setExamToDelete(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Banco de Provas</CardTitle>
          <p className="text-xs md:text-sm text-muted-foreground">
            Gerencie as disciplinas e adicione provas por matéria.
          </p>
        </CardHeader>
        <CardContent>
          <SubjectTabs
            subjects={subjects}
            selectedSubject={selectedSubject}
            onSelectSubject={onSelectSubject}
            onAddSubject={() => setSubjectModalOpen(true)}
            onDeleteSubject={onDeleteSubject}
          />

          <ExamList
            exams={exams}
            loading={loadingExams}
            onAddExam={() => setExamModalOpen(true)}
            onDeleteExam={handleDeleteExam}
            onEditExam={handleEditExam}
            selectedSubject={selectedSubject}
          />
        </CardContent>
      </Card>

      <CreateSubjectModal
        open={subjectModalOpen}
        onClose={() => setSubjectModalOpen(false)}
        onCreate={onCreateSubject}
        loading={creating}
      />

      <CreateExamModal
        open={examModalOpen}
        onClose={handleCloseExamModal}
        onCreate={onCreateExam}
        onUpdate={onUpdateExam}
        loading={creating}
        selectedSubject={selectedSubject}
        editingExam={editingExam}
      />

      <ConfirmDeleteDialog
        open={deleteExamDialogOpen}
        onOpenChange={setDeleteExamDialogOpen}
        onConfirm={confirmDeleteExam}
        title="Confirmar exclusão"
        description="Tem certeza que deseja excluir esta prova? Esta ação não pode ser desfeita."
      />
    </>
  );
}
```

## 📄 src/features/admin/exams/components/SubjectTabs.jsx
```jsx
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export function SubjectTabs({ subjects, selectedSubject, onSelectSubject, onAddSubject, onDeleteSubject }) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [subjectToDelete, setSubjectToDelete] = useState(null);

  const handleDeleteClick = (subject, e) => {
    e.stopPropagation();
    setSubjectToDelete(subject);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (subjectToDelete) {
      onDeleteSubject(subjectToDelete.subjectCode);
      setDeleteDialogOpen(false);
      setSubjectToDelete(null);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-6">
        {subjects.map((subject) => (
          <div
            key={subject.subjectCode}
            className={`
              relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full 
              cursor-pointer transition-all
              ${selectedSubject?.subjectCode === subject.subjectCode
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
            onClick={() => onSelectSubject(subject)}
          >
            <span className="text-sm font-semibold font-mono">
              {subject.subjectCode}
            </span>
            <button
              onClick={(e) => handleDeleteClick(subject, e)}
              className={`
                transition-colors
                ${selectedSubject?.subjectCode === subject.subjectCode
                  ? 'text-white hover:text-red-200'
                  : 'text-gray-400 hover:text-red-500'
                }
              `}
              title="Excluir disciplina"
            >
              <X size={14} />
            </button>
          </div>
        ))}
        
        <Button
          variant="outline"
          size="sm"
          onClick={onAddSubject}
          className="rounded-full px-4 py-2 border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50"
        >
          <Plus size={16} className="mr-1" />
          Adicionar Matéria
        </Button>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir disciplina?</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir a disciplina{' '}
              <strong>{subjectToDelete?.subjectCode} - {subjectToDelete?.name}</strong>?
              <br />
              <br />
              <span className="text-red-600 font-semibold">
                Todas as provas desta disciplina também serão excluídas!
              </span>
              <br />
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
```

## 📄 src/features/admin/exams/models/Exam.js
```javascript
/**
 * Model que representa uma prova
 */
export class Exam {
  constructor(data) {
    this.id = data.id;
    // Backend retorna subject como objeto, extraímos o subjectCode
    this.subjectCode = data.subject?.subjectCode || data.subjectCode || '';
    this.year = data.year;
    this.type = data.type; // 'P1', 'P2', 'P3', 'EXAME', 'SUB', 'OUTROS'
    // Backend usa fileUrl, mantemos como pdfUrl internamente
    this.pdfUrl = data.fileUrl || data.pdfUrl || '';
    this.createdAt = data.createdAt ? new Date(data.createdAt) : null;
  }

  /**
   * Retorna o rótulo formatado do tipo de prova
   */
  get typeLabel() {
    const labels = {
      'P1': 'P1',
      'P2': 'P2',
      'P3': 'P3',
      'EXAME': 'EXAME',
      'SUB': 'SUB',
      'OUTROS': 'OUTROS',
    };
    return labels[this.type] || this.type;
  }

  /**
   * Retorna uma descrição formatada da prova
   */
  get description() {
    return `${this.typeLabel} - ${this.year}`;
  }

  /**
   * Valida os dados da prova
   * @throws {Error} Se houver dados inválidos
   */
  validate() {
    const errors = [];

    if (!this.subjectCode?.trim()) {
      errors.push('Código da disciplina é obrigatório');
    }

    if (!this.year) {
      errors.push('Ano é obrigatório');
    }

    if (this.year && (this.year < 1900 || this.year > 2100)) {
      errors.push('Ano inválido');
    }

    if (!this.type) {
      errors.push('Tipo de prova é obrigatório');
    }

    const validTypes = ['P1', 'P2', 'P3', 'EXAME', 'SUB', 'OUTROS'];
    if (this.type && !validTypes.includes(this.type)) {
      errors.push('Tipo de prova inválido');
    }

    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }

    return true;
  }

  /**
   * Clona a prova com novas propriedades
   */
  clone(updates = {}) {
    return new Exam({ ...this, ...updates });
  }

  /**
   * Converte para objeto simples (para enviar à API)
   */
  toDTO() {
    return {
      subjectCode: this.subjectCode,
      year: this.year,
      type: this.type,
      fileUrl: this.pdfUrl, // Backend espera fileUrl
    };
  }

  /**
   * Cria instância a partir de DTO da API
   */
  static fromDTO(dto) {
    return new Exam(dto);
  }

  /**
   * Cria array de instâncias a partir de array de DTOs
   */
  static fromDTOArray(dtoArray) {
    return dtoArray.map(dto => Exam.fromDTO(dto));
  }
}
```

## 📄 src/features/admin/exams/models/Subject.js
```javascript
/**
 * Model que representa uma disciplina (matéria)
 */
export class Subject {
  constructor(data) {
    this.subjectCode = data.subjectCode || '';
    this.name = data.name || '';
  }

  /**
   * Valida os dados da disciplina
   * @throws {Error} Se houver dados inválidos
   */
  validate() {
    const errors = [];

    if (!this.subjectCode?.trim()) {
      errors.push('Código da disciplina é obrigatório');
    }

    if (this.subjectCode && !/^[A-Z0-9]+$/.test(this.subjectCode)) {
      errors.push('Código deve conter apenas letras maiúsculas e números');
    }

    if (!this.name?.trim()) {
      errors.push('Nome da disciplina é obrigatório');
    }

    if (this.name && this.name.length > 100) {
      errors.push('Nome não pode ter mais de 100 caracteres');
    }

    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }

    return true;
  }

  /**
   * Clona a disciplina com novas propriedades
   */
  clone(updates = {}) {
    return new Subject({ ...this, ...updates });
  }

  /**
   * Converte para objeto simples (para enviar à API)
   */
  toDTO() {
    return {
      subjectCode: this.subjectCode,
      name: this.name,
    };
  }

  /**
   * Cria instância a partir de DTO da API
   */
  static fromDTO(dto) {
    return new Subject(dto);
  }

  /**
   * Cria array de instâncias a partir de array de DTOs
   */
  static fromDTOArray(dtoArray) {
    return dtoArray.map(dto => Subject.fromDTO(dto));
  }
}
```

## 📄 src/features/admin/exams/useAdminExamsVM.js
```javascript
import { useState, useEffect } from 'react';
import { examService } from '@/shared/services/examService';
import { Subject } from './models/Subject';
import { Exam } from './models/Exam';

export function useAdminExamsVM() {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingExams, setLoadingExams] = useState(false);
  const [error, setError] = useState(null);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    loadSubjects();
  }, []);

  useEffect(() => {
    if (selectedSubject) {
      loadExams(selectedSubject.subjectCode);
    }
  }, [selectedSubject]);

  const loadSubjects = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await examService.getSubjects();
      const subjectInstances = Subject.fromDTOArray(data);
      setSubjects(subjectInstances);
      
      // Seleciona a primeira matéria automaticamente se houver
      if (subjectInstances.length > 0 && !selectedSubject) {
        setSelectedSubject(subjectInstances[0]);
      }
    } catch (err) {
      setError(err.message || 'Erro ao carregar disciplinas');
    } finally {
      setLoading(false);
    }
  };

  const loadExams = async (subjectCode) => {
    try {
      setLoadingExams(true);
      setError(null);
      
      const data = await examService.getExamsBySubject(subjectCode);
      const examInstances = Exam.fromDTOArray(data);
      setExams(examInstances);
    } catch (err) {
      setError(err.message || 'Erro ao carregar provas');
    } finally {
      setLoadingExams(false);
    }
  };

  const createSubject = async (subjectData) => {
    try {
      setCreating(true);
      
      const newSubjectDTO = await examService.createSubject(subjectData);
      const newSubject = Subject.fromDTO(newSubjectDTO);
      
      setSubjects(prev => [...prev, newSubject]);
      setSelectedSubject(newSubject);
      
      return { success: true, subject: newSubject };
    } catch (err) {
      return { 
        success: false, 
        error: err.message || 'Erro ao criar disciplina' 
      };
    } finally {
      setCreating(false);
    }
  };

  const deleteSubject = async (subjectCode) => {
    try {
      await examService.deleteSubject(subjectCode);
      
      setSubjects(prev => prev.filter(s => s.subjectCode !== subjectCode));
      
      // Se a matéria deletada estava selecionada, seleciona outra
      if (selectedSubject?.subjectCode === subjectCode) {
        const remainingSubjects = subjects.filter(s => s.subjectCode !== subjectCode);
        setSelectedSubject(remainingSubjects.length > 0 ? remainingSubjects[0] : null);
        setExams([]);
      }
      
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err.message || 'Erro ao excluir disciplina' 
      };
    }
  };

  const createExam = async (examData) => {
    try {
      setCreating(true);
      
      const newExamDTO = await examService.createExam(examData);
      const newExam = Exam.fromDTO(newExamDTO);
      
      setExams(prev => [...prev, newExam]);
      
      return { success: true, exam: newExam };
    } catch (err) {
      return { 
        success: false, 
        error: err.message || 'Erro ao criar prova' 
      };
    } finally {
      setCreating(false);
    }
  };

  const updateExam = async (examId, examData) => {
    try {
      const updatedExamDTO = await examService.updateExam(examId, examData);
      
      const updatedExam = Exam.fromDTO(updatedExamDTO);
      setExams(current => 
        current.map(e => e.id === examId ? updatedExam : e)
      );
      
      return { success: true, exam: updatedExam };
    } catch (err) {
      return { 
        success: false, 
        error: err.message || 'Erro ao atualizar prova' 
      };
    }
  };

  const deleteExam = async (examId) => {
    try {
      await examService.deleteExam(examId);
      setExams(prev => prev.filter(e => e.id !== examId));
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err.message || 'Erro ao excluir prova' 
      };
    }
  };

  return {
    subjects,
    selectedSubject,
    setSelectedSubject,
    exams,
    loading,
    loadingExams,
    error,
    creating,
    createSubject,
    deleteSubject,
    createExam,
    updateExam,
    deleteExam,
  };
}
```

## 📄 src/features/admin/manual/AdminManualPage.jsx
```jsx
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookOpen, Plus, Trash2, Save, X, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast.jsx';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useAdminManualVM } from './useAdminManualVM';
import { CategoryItem } from './components/CategoryItem';
import { ChapterItem } from './components/ChapterItem';
import { ArticleItem } from './components/ArticleItem';
import { CreateCategoryModal } from './components/CreateCategoryModal';
import { CreateChapterModal } from './components/CreateChapterModal';
import { MDXEditor } from '@/shared/components/MDXEditor';
import { apiClient } from '@/shared/services/apiClient';
import { ConfirmDeleteDialog } from '../components/ConfirmDeleteDialog';

export function AdminManualPage() {
  const {
    categories,
    chapters,
    articles,
    selectedCategory,
    selectedChapter,
    loading,
    creating,
    setSelectedCategory,
    setSelectedChapter,
    createCategory,
    updateCategory,
    deleteCategory,
    reorderCategories,
    createChapter,
    updateChapter,
    deleteChapter,
    reorderChapters,
    createArticle,
    updateArticle,
    deleteArticle,
    reorderArticles,
  } = useAdminManualVM();

  // Estados para categorias
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [deleteCategoryDialogOpen, setDeleteCategoryDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  // Estados para capítulos
  const [chapterModalOpen, setChapterModalOpen] = useState(false);
  const [editingChapter, setEditingChapter] = useState(null);
  const [deleteChapterDialogOpen, setDeleteChapterDialogOpen] = useState(false);
  const [chapterToDelete, setChapterToDelete] = useState(null);

  // Estados para artigos (editor inline)
  const [editingArticle, setEditingArticle] = useState(null);
  const [articleTitle, setArticleTitle] = useState('');
  const [articleSlug, setArticleSlug] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [originalSlug, setOriginalSlug] = useState('');
  const [deleteArticleDialogOpen, setDeleteArticleDialogOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);
  const [discardDialogOpen, setDiscardDialogOpen] = useState(false);
  const [hasDraft, setHasDraft] = useState(false);
  const [isViewingDraft, setIsViewingDraft] = useState(false);
  const [selectedArticleForFeedback, setSelectedArticleForFeedback] = useState(null);
  const [articleFeedbacks, setArticleFeedbacks] = useState([]);
  const [loadingFeedbacks, setLoadingFeedbacks] = useState(false);
  const [editorResetKey, setEditorResetKey] = useState(0);

  const { toast } = useToast();

  const DRAFT_KEY = 'article-draft';

  // Verificar se existe rascunho no localStorage
  useEffect(() => {
    const savedDraft = localStorage.getItem(DRAFT_KEY);
    setHasDraft(!!savedDraft);
  }, []);

  // Atualizar estado de hasDraft quando houver mudanças
  useEffect(() => {
    const checkDraft = () => {
      const savedDraft = localStorage.getItem(DRAFT_KEY);
      setHasDraft(!!savedDraft);
    };
    
    // Verificar periodicamente
    const interval = setInterval(checkDraft, 500);
    return () => clearInterval(interval);
  }, []);

  // Quando selecionar um artigo para editar
  useEffect(() => {
    if (editingArticle) {
      setArticleTitle(editingArticle.title || '');
      setArticleSlug(editingArticle.slug || '');
      setArticleContent(editingArticle.content || '');
      setOriginalSlug(editingArticle.slug || '');
      setIsViewingDraft(false);
      setEditorResetKey(prev => prev + 1); // Força re-montagem do editor
    }
  }, [editingArticle]);

  // Salvar no localStorage sempre que houver mudanças (apenas se não estiver editando)
  useEffect(() => {
    if (!editingArticle && selectedChapter && (articleTitle || articleSlug || articleContent)) {
      const draft = { title: articleTitle, slug: articleSlug, content: articleContent };
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
      setIsViewingDraft(true);
      setHasDraft(true);
    }
  }, [articleTitle, articleSlug, articleContent, selectedChapter, editingArticle]);

  // Limpar edição/visualização ao mudar de categoria ou capítulo
  useEffect(() => {
    setEditingArticle(null);
    setSelectedArticleForFeedback(null);
    setArticleFeedbacks([]);
    setArticleTitle('');
    setArticleSlug('');
    setArticleContent('');
    setIsViewingDraft(false);
  }, [selectedCategory, selectedChapter]);

  const manualSensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // ==================== Handlers de Categorias ====================
  const handleDragEndCategories = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = categories.findIndex((c) => c.id === active.id);
    const newIndex = categories.findIndex((c) => c.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;

    const newOrder = arrayMove(categories, oldIndex, newIndex);
    const result = await reorderCategories(newOrder);
    
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao reordenar',
        description: result.error,
      });
    }
  };

  const handleCreateCategory = async (categoryData) => {
    const result = editingCategory
      ? await updateCategory(editingCategory.id, categoryData)
      : await createCategory(categoryData);
    
    if (result.success) {
      setCategoryModalOpen(false);
      setEditingCategory(null);
      toast({
        title: editingCategory ? 'Categoria atualizada' : 'Categoria criada',
        description: editingCategory 
          ? 'A categoria foi atualizada com sucesso.'
          : 'A categoria foi criada com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: editingCategory ? 'Erro ao atualizar' : 'Erro ao criar',
        description: result.error,
      });
    }
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setCategoryModalOpen(true);
  };

  const handleDeleteCategory = (category) => {
    setCategoryToDelete(category.id);
    setDeleteCategoryDialogOpen(true);
  };

  const confirmDeleteCategory = async () => {
    if (!categoryToDelete) return;
    const result = await deleteCategory(categoryToDelete);
    
    if (result.success) {
      toast({
        title: 'Categoria excluída',
        description: 'A categoria foi removida com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir',
        description: result.error,
      });
    }
    
    setDeleteCategoryDialogOpen(false);
    setCategoryToDelete(null);
  };

  // ==================== Handlers de Capítulos ====================
  const handleDragEndChapters = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id || !selectedCategory) return;

    const oldIndex = chapters.findIndex((ch) => ch.id === active.id);
    const newIndex = chapters.findIndex((ch) => ch.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;

    const newOrder = arrayMove(chapters, oldIndex, newIndex);
    const result = await reorderChapters(selectedCategory.id, newOrder);
    
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao reordenar',
        description: result.error,
      });
    }
  };

  const handleCreateChapter = async (chapterData) => {
    const result = editingChapter
      ? await updateChapter(editingChapter.id, chapterData)
      : await createChapter(chapterData);
    
    if (result.success) {
      setChapterModalOpen(false);
      setEditingChapter(null);
      toast({
        title: editingChapter ? 'Capítulo atualizado' : 'Capítulo criado',
        description: editingChapter 
          ? 'O capítulo foi atualizado com sucesso.'
          : 'O capítulo foi criado com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: editingChapter ? 'Erro ao atualizar' : 'Erro ao criar',
        description: result.error,
      });
    }
  };

  const handleEditChapter = (chapter) => {
    setEditingChapter(chapter);
    setChapterModalOpen(true);
  };

  const handleDeleteChapter = (chapter) => {
    setChapterToDelete(chapter.id);
    setDeleteChapterDialogOpen(true);
  };

  const confirmDeleteChapter = async () => {
    if (!chapterToDelete) return;
    const result = await deleteChapter(chapterToDelete);
    
    if (result.success) {
      toast({
        title: 'Capítulo excluído',
        description: 'O capítulo foi removido com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir',
        description: result.error,
      });
    }
    
    setDeleteChapterDialogOpen(false);
    setChapterToDelete(null);
  };

  // ==================== Handlers de Artigos ====================
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleArticleTitleChange = (value) => {
    setArticleTitle(value);
    // Atualiza slug automaticamente se estiver criando OU se editando e o slug não foi customizado
    if (!editingArticle || articleSlug === originalSlug || articleSlug === generateSlug(articleTitle)) {
      setArticleSlug(generateSlug(value));
    }
  };

  const handleNewArticle = () => {
    setEditingArticle(null);
    setSelectedArticleForFeedback(null);
    setArticleFeedbacks([]);
    setArticleTitle('');
    setArticleSlug('');
    setArticleContent('');
    setOriginalSlug('');
    setIsViewingDraft(false);
  };

  const handleViewDraft = () => {
    const savedDraft = localStorage.getItem(DRAFT_KEY);
    if (savedDraft) {
      try {
        const draft = JSON.parse(savedDraft);
        setEditingArticle(null);
        setSelectedArticleForFeedback(null);
        setArticleFeedbacks([]);
        setArticleTitle(draft.title || '');
        setArticleSlug(draft.slug || '');
        setArticleContent(draft.content || '');
        setOriginalSlug('');
        setIsViewingDraft(true);
        setEditorResetKey(prev => prev + 1); // Força re-montagem do editor
      } catch (err) {
        console.error('Erro ao carregar rascunho:', err);
        toast({
          variant: 'destructive',
          title: 'Erro ao carregar rascunho',
          description: 'Não foi possível carregar o rascunho salvo.',
        });
      }
    }
  };

  const handleEditArticle = (article) => {
    setEditingArticle(article);
    setSelectedArticleForFeedback(null);
    setArticleFeedbacks([]);
  };

  const handleSelectArticleForFeedback = async (article) => {
    setEditingArticle(null);
    setSelectedArticleForFeedback(article);
    setArticleTitle('');
    setArticleSlug('');
    setArticleContent('');
    setIsViewingDraft(false);
    
    // Carregar feedbacks do artigo
    setLoadingFeedbacks(true);
    try {
      const response = await apiClient.get(`admin/manual/articles/${article.id}/feedback?page=0&size=100`);
      // Backend retorna Page<ArticleFeedbackDTO>, extrair o conteúdo
      const feedbacks = response.content || response;
      // Garantir que seja sempre um array
      setArticleFeedbacks(Array.isArray(feedbacks) ? feedbacks : []);
    } catch (err) {
      console.error('Erro ao carregar feedbacks:', err);
      toast({
        variant: 'destructive',
        title: 'Erro ao carregar feedbacks',
        description: 'Não foi possível carregar os feedbacks deste artigo.',
      });
      setArticleFeedbacks([]);
    } finally {
      setLoadingFeedbacks(false);
    }
  };

  const handleCancelArticle = () => {
    if (!editingArticle && (articleTitle || articleSlug || articleContent)) {
      setDiscardDialogOpen(true);
    } else {
      clearArticleForm();
    }
  };

  const clearArticleForm = () => {
    setEditingArticle(null);
    setArticleTitle('');
    setArticleSlug('');
    setArticleContent('');
    setOriginalSlug('');
    setIsViewingDraft(false);
  };

  const handleDiscardDraft = () => {
    localStorage.removeItem(DRAFT_KEY);
    clearArticleForm();
    setDiscardDialogOpen(false);
    setHasDraft(false);
  };

  const handleSaveArticle = async () => {
    if (!articleTitle.trim() || !articleSlug.trim() || !articleContent.trim() || !selectedChapter) {
      toast({
        variant: 'destructive',
        title: 'Campos obrigatórios',
        description: 'Preencha título, slug e conteúdo.',
      });
      return;
    }

    const articleData = {
      title: articleTitle,
      slug: articleSlug,
      content: articleContent,
      chapterId: selectedChapter.id,
    };

    const result = editingArticle
      ? await updateArticle(editingArticle.id, articleData)
      : await createArticle(articleData);
    
    if (result.success) {
      // Limpar rascunho do localStorage após sucesso
      if (!editingArticle || isViewingDraft) {
        localStorage.removeItem(DRAFT_KEY);
        setHasDraft(false);
      }
      clearArticleForm();
      toast({
        title: editingArticle ? 'Artigo atualizado' : 'Artigo criado',
        description: editingArticle 
          ? 'O artigo foi atualizado com sucesso.'
          : 'O artigo foi criado com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: editingArticle ? 'Erro ao atualizar' : 'Erro ao criar',
        description: result.error,
      });
    }
  };

  const handleDragEndArticles = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id || !selectedChapter) return;

    const oldIndex = articles.findIndex((a) => a.id === active.id);
    const newIndex = articles.findIndex((a) => a.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;

    const newOrder = arrayMove(articles, oldIndex, newIndex);
    const result = await reorderArticles(selectedChapter.id, newOrder);
    
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao reordenar',
        description: result.error,
      });
    }
  };

  const handleDeleteArticle = (article) => {
    setArticleToDelete(article.id);
    setDeleteArticleDialogOpen(true);
  };

  const confirmDeleteArticle = async () => {
    if (!articleToDelete) return;
    const result = await deleteArticle(articleToDelete);
    
    if (result.success) {
      toast({
        title: 'Artigo excluído',
        description: 'O artigo foi removido com sucesso.',
      });
      // Se estava editando o artigo excluído, limpar o formulário
      if (editingArticle?.id === articleToDelete) {
        clearArticleForm();
      }
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir',
        description: result.error,
      });
    }
    
    setDeleteArticleDialogOpen(false);
    setArticleToDelete(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <BookOpen className="h-7 w-7" />
            Manual do Calouro
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Gerencie categorias, capítulos e artigos do manual
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Coluna de Categorias */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">Categorias</h3>
                <Button
                  size="sm"
                  onClick={() => setCategoryModalOpen(true)}
                  className="h-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <DndContext
                sensors={manualSensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEndCategories}
              >
                <SortableContext
                  items={categories.map(c => c.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <CategoryItem
                        key={category.id}
                        category={category}
                        onDelete={handleDeleteCategory}
                        onEdit={handleEditCategory}
                        onSelect={setSelectedCategory}
                        isSelected={selectedCategory?.id === category.id}
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>

              {categories.length === 0 && (
                <div className="text-center py-8 border-2 border-dashed rounded-lg">
                  <p className="text-sm text-muted-foreground mb-3">
                    Nenhuma categoria
                  </p>
                  <Button
                    size="sm"
                    onClick={() => setCategoryModalOpen(true)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Criar Categoria
                  </Button>
                </div>
              )}
            </div>

            {/* Coluna de Capítulos */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">Capítulos</h3>
                <Button
                  size="sm"
                  onClick={() => setChapterModalOpen(true)}
                  disabled={!selectedCategory}
                  className="h-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {!selectedCategory ? (
                <div className="text-center py-12 border-2 border-dashed rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Selecione uma categoria
                  </p>
                </div>
              ) : (
                <>
                  <DndContext
                    sensors={manualSensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEndChapters}
                  >
                    <SortableContext
                      items={chapters.map(ch => ch.id)}
                      strategy={verticalListSortingStrategy}
                    >
                      <div className="space-y-2">
                        {chapters.map((chapter) => (
                          <ChapterItem
                            key={chapter.id}
                            chapter={chapter}
                            onDelete={handleDeleteChapter}
                            onEdit={handleEditChapter}
                            onSelect={setSelectedChapter}
                            isSelected={selectedChapter?.id === chapter.id}
                          />
                        ))}
                      </div>
                    </SortableContext>
                  </DndContext>

                  {chapters.length === 0 && (
                    <div className="text-center py-8 border-2 border-dashed rounded-lg">
                      <p className="text-sm text-muted-foreground mb-3">
                        Nenhum capítulo
                      </p>
                      <Button
                        size="sm"
                        onClick={() => setChapterModalOpen(true)}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Criar Capítulo
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Coluna de Artigos */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">Artigos</h3>
                <Button
                  size="sm"
                  onClick={handleNewArticle}
                  disabled={!selectedChapter}
                  className="h-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {!selectedChapter ? (
                <div className="text-center py-12 border-2 border-dashed rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Selecione um capítulo
                  </p>
                </div>
              ) : (
                <>
                  <DndContext
                    sensors={manualSensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEndArticles}
                  >
                    <SortableContext
                      items={articles.map(a => a.id)}
                      strategy={verticalListSortingStrategy}
                    >
                      <div className="space-y-2">
                        {/* Item de rascunho - aparece quando houver rascunho e um capítulo estiver selecionado */}
                        {hasDraft && (() => {
                          const savedDraft = localStorage.getItem(DRAFT_KEY);
                          if (savedDraft) {
                            try {
                              const draft = JSON.parse(savedDraft);
                              const draftArticle = {
                                id: 'draft',
                                title: draft.title || 'Rascunho',
                                slug: draft.slug || 'Sem slug',
                                isDraft: true,
                                totalFeedback: 0,
                                helpfulCount: 0,
                                unhelpfulCount: 0,
                                helpfulPercentage: 0,
                              };
                              return (
                                <ArticleItem
                                  key="draft"
                                  article={draftArticle}
                                  onDelete={() => {
                                    setDiscardDialogOpen(true);
                                  }}
                                  onEdit={handleViewDraft}
                                  onSelect={handleViewDraft}
                                  isSelected={isViewingDraft}
                                />
                              );
                            } catch (err) {
                              console.error('Erro ao renderizar rascunho:', err);
                              return null;
                            }
                          }
                          return null;
                        })()}
                        
                        {articles.map((article) => (
                          <ArticleItem
                            key={article.id}
                            article={article}
                            onDelete={handleDeleteArticle}
                            onEdit={handleEditArticle}
                            onSelect={handleSelectArticleForFeedback}
                            isSelected={editingArticle?.id === article.id || selectedArticleForFeedback?.id === article.id}
                          />
                        ))}
                      </div>
                    </SortableContext>
                  </DndContext>

                  {articles.length === 0 && !hasDraft && (
                    <div className="text-center py-8 border-2 border-dashed rounded-lg">
                      <p className="text-sm text-muted-foreground mb-3">
                        Nenhum artigo
                      </p>
                      <Button
                        size="sm"
                        onClick={handleNewArticle}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Criar Artigo
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Editor de Artigo Inline ou Visualização de Feedbacks */}
      {selectedChapter && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span>
                  {selectedArticleForFeedback 
                    ? `Feedbacks - ${selectedArticleForFeedback.title}` 
                    : editingArticle 
                      ? 'Editar Artigo' 
                      : 'Novo Artigo'
                  }
                </span>
                {isViewingDraft && (
                  <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-md font-medium">
                    Rascunho
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                {selectedArticleForFeedback && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedArticleForFeedback(null);
                      setArticleFeedbacks([]);
                    }}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Fechar
                  </Button>
                )}
                {!editingArticle && !selectedArticleForFeedback && (articleTitle || articleSlug || articleContent) && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => setDiscardDialogOpen(true)}
                    disabled={creating}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Descartar
                  </Button>
                )}
                {(editingArticle || articleTitle || articleSlug || articleContent) && !selectedArticleForFeedback && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCancelArticle}
                    disabled={creating}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancelar
                  </Button>
                )}
                {!selectedArticleForFeedback && (
                  <Button
                    size="sm"
                    onClick={handleSaveArticle}
                    disabled={!articleTitle.trim() || !articleSlug.trim() || !articleContent.trim() || creating}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {creating ? 'Salvando...' : editingArticle ? 'Atualizar' : 'Criar'}
                  </Button>
                )}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedArticleForFeedback ? (
              // Visualização de feedbacks
              <div className="space-y-4">
                {loadingFeedbacks ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
                  </div>
                ) : !Array.isArray(articleFeedbacks) || articleFeedbacks.length === 0 ? (
                  <div className="text-center py-12 border-2 border-dashed rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Nenhum feedback recebido para este artigo
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-sm">
                        <span className="font-semibold">{articleFeedbacks.length}</span> feedback(s) total
                      </div>
                      <div className="text-sm text-green-600">
                        <ThumbsUp className="h-4 w-4 inline mr-1" />
                        <span className="font-semibold">
                          {articleFeedbacks.filter(f => f.isHelpful).length}
                        </span> úteis
                      </div>
                      <div className="text-sm text-red-600">
                        <ThumbsDown className="h-4 w-4 inline mr-1" />
                        <span className="font-semibold">
                          {articleFeedbacks.filter(f => !f.isHelpful).length}
                        </span> não úteis
                      </div>
                    </div>
                    
                    {articleFeedbacks.map((feedback) => (
                      <div key={feedback.id} className="p-4 border rounded-lg bg-white">
                        <div className="flex items-start gap-3">
                          {/* Avatar do usuário */}
                          {feedback.userAvatarUrl ? (
                            <img 
                              src={feedback.userAvatarUrl} 
                              alt={feedback.userName}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                              {feedback.userName?.charAt(0).toUpperCase() || '?'}
                            </div>
                          )}
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium text-gray-900">
                                {feedback.userName || 'Anônimo'}
                              </span>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                feedback.isHelpful 
                                  ? 'bg-green-100 text-green-700' 
                                  : 'bg-red-100 text-red-700'
                              }`}>
                                {feedback.isHelpful ? (
                                  <><ThumbsUp className="h-3 w-3 inline mr-1" />Útil</>
                                ) : (
                                  <><ThumbsDown className="h-3 w-3 inline mr-1" />Não útil</>
                                )}
                              </span>
                              {feedback.postedAt && (
                                <span className="text-xs text-muted-foreground">
                                  {new Date(feedback.postedAt).toLocaleString('pt-BR')}
                                </span>
                              )}
                            </div>
                            {feedback.comment ? (
                              <p className="text-sm text-gray-700">{feedback.comment}</p>
                            ) : (
                              <p className="text-sm text-muted-foreground italic">Sem comentário</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // Editor de artigo
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="article-title">Título</Label>
                    <Input
                      id="article-title"
                      value={articleTitle}
                      onChange={(e) => handleArticleTitleChange(e.target.value)}
                      placeholder="Título do artigo"
                      disabled={creating}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="article-slug">Slug</Label>
                    <Input
                      id="article-slug"
                      value={articleSlug}
                      onChange={(e) => setArticleSlug(e.target.value)}
                      placeholder="slug-do-artigo"
                      disabled={creating}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Conteúdo</Label>
                  <MDXEditor
                    editorKey={`editor-${editorResetKey}`}
                    value={articleContent}
                    onChange={setArticleContent}
                    placeholder="Escreva o conteúdo do artigo..."
                  />
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}

      {/* Modais e Dialogs */}
      <CreateCategoryModal
        open={categoryModalOpen}
        onOpenChange={setCategoryModalOpen}
        onSubmit={handleCreateCategory}
        editingCategory={editingCategory}
        loading={creating}
      />

      <CreateChapterModal
        open={chapterModalOpen}
        onOpenChange={setChapterModalOpen}
        onSubmit={handleCreateChapter}
        editingChapter={editingChapter}
        loading={creating}
        categoryId={selectedCategory?.id}
      />

      {/* Diálogos de confirmação de exclusão */}
      <ConfirmDeleteDialog
        open={discardDialogOpen}
        onOpenChange={setDiscardDialogOpen}
        onConfirm={handleDiscardDraft}
        title={"Descartar rascunho?"}
        description={"Tem certeza que deseja descartar este rascunho? Todo o conteúdo será perdido e esta ação não pode ser desfeita."}
        confirmText={"Descartar"}
      />

      <ConfirmDeleteDialog
        open={deleteCategoryDialogOpen}
        onOpenChange={setDeleteCategoryDialogOpen}
        onConfirm={confirmDeleteCategory}
        title={"Confirmar exclusão"}
        description={"Tem certeza que deseja excluir esta categoria? Todos os capítulos e artigos também serão removidos. Esta ação não pode ser desfeita."}
        confirmText={"Excluir"}
      />

      <ConfirmDeleteDialog
        open={deleteChapterDialogOpen}
        onOpenChange={setDeleteChapterDialogOpen}
        onConfirm={confirmDeleteChapter}
        title={"Confirmar exclusão"}
        description={"Tem certeza que deseja excluir este capítulo? Todos os artigos também serão removidos. Esta ação não pode ser desfeita."}
        confirmText={"Excluir"}
      />

      <ConfirmDeleteDialog
        open={deleteArticleDialogOpen}
        onOpenChange={setDeleteArticleDialogOpen}
        onConfirm={confirmDeleteArticle}
        title={"Confirmar exclusão"}
        description={"Tem certeza que deseja excluir este artigo? Esta ação não pode ser desfeita."}
        confirmText={"Excluir"}
      />
    </div>
  );
}
```

## 📄 src/features/admin/manual/components/ArticleItem.jsx
```jsx
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Edit, Trash2, FileText, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ArticleItem({ article, onDelete, onEdit, onSelect, isSelected = false }) {
  const isDraft = article.isDraft === true;
  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: article.id,
    disabled: isDraft, // Rascunho não pode ser arrastado
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...(!isDraft ? listeners : {})}
      className={isDraft ? '' : 'cursor-grab active:cursor-grabbing'}
    >
      <div 
        className={`p-3 rounded-lg border-2 transition-all ${
          isSelected 
            ? 'border-primary bg-primary/5' 
            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-card'
        } ${isDragging ? 'opacity-50' : ''}`}
      >
        {isDraft && (
          <div className="mb-2">
            <span className="text-xs px-2 py-0.5 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-md font-medium">
              Rascunho
            </span>
          </div>
        )}
        <div className="flex items-start justify-between gap-3">
          <div 
            className={`flex-1 ${onSelect ? 'cursor-pointer' : ''}`}
            onClick={() => onSelect && onSelect(article)}
          >
            <div className="flex items-center gap-2 mb-1">
              <FileText className="h-4 w-4 text-primary" />
              <h5 className="font-semibold text-sm">{article.title}</h5>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              Slug: <span className="font-mono">{article.slug}</span>
            </p>
            
            {!isDraft && article.totalFeedback > 0 && (
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1 text-green-600">
                  <ThumbsUp className="h-3 w-3" />
                  <span>{article.helpfulCount}</span>
                </div>
                <div className="flex items-center gap-1 text-red-600">
                  <ThumbsDown className="h-3 w-3" />
                  <span>{article.unhelpfulCount}</span>
                </div>
                <span className="text-muted-foreground">
                  ({article.helpfulPercentage}% útil)
                </span>
              </div>
            )}
          </div>
          
          <div className="flex gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(article);
              }}
              title={isDraft ? "Editar rascunho" : "Editar artigo"}
            >
              <Edit className="h-3.5 w-3.5" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-destructive hover:text-destructive"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(article);
              }}
              title={isDraft ? "Excluir rascunho" : "Deletar artigo"}
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 📄 src/features/admin/manual/components/CategoryItem.jsx
```jsx
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Edit, Trash2, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CategoryItem({ category, onDelete, onEdit, onSelect, isSelected }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: category.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-grab active:cursor-grabbing"
    >
      <div 
        className={`p-4 rounded-lg border-2 transition-all ${
          isSelected 
            ? 'border-primary bg-primary/5' 
            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-card'
        } ${isDragging ? 'opacity-50' : ''}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div 
            className="flex-1 cursor-pointer"
            onClick={() => onSelect(category)}
          >
            <div className="flex items-center gap-2 mb-1">
              <Book className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-sm">{category.title}</h3>
            </div>
            <p className="text-xs text-muted-foreground">
              {category.chapterCount} {category.chapterCount === 1 ? 'capítulo' : 'capítulos'}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Slug: <span className="font-mono">{category.slug}</span>
            </p>
          </div>
          
          <div className="flex gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(category);
              }}
              title="Editar categoria"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 text-destructive hover:text-destructive"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(category);
              }}
              title="Deletar categoria"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 📄 src/features/admin/manual/components/ChapterItem.jsx
```jsx
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Edit, Trash2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ChapterItem({ chapter, onDelete, onEdit, onSelect, isSelected }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: chapter.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-grab active:cursor-grabbing"
    >
      <div 
        className={`p-3 rounded-lg border-2 transition-all ${
          isSelected 
            ? 'border-primary bg-primary/5' 
            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-card'
        } ${isDragging ? 'opacity-50' : ''}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div 
            className="flex-1 cursor-pointer"
            onClick={() => onSelect(chapter)}
          >
            <div className="flex items-center gap-2 mb-1">
              <FileText className="h-4 w-4 text-primary" />
              <h4 className="font-semibold text-sm">{chapter.title}</h4>
            </div>
            <p className="text-xs text-muted-foreground">
              {chapter.articleCount} {chapter.articleCount === 1 ? 'artigo' : 'artigos'}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Slug: <span className="font-mono">{chapter.slug}</span>
            </p>
          </div>
          
          <div className="flex gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(chapter);
              }}
              title="Editar capítulo"
            >
              <Edit className="h-3.5 w-3.5" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-destructive hover:text-destructive"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(chapter);
              }}
              title="Deletar capítulo"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 📄 src/features/admin/manual/components/CreateArticleModal.jsx
```jsx
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MDXEditor } from '@/shared/components/MDXEditor';
import { Trash2 } from 'lucide-react';
import { ConfirmDeleteDialog } from '../../components/ConfirmDeleteDialog';

const DRAFT_KEY = 'article-draft';

export function CreateArticleModal({ 
  open, 
  onOpenChange, 
  onSubmit, 
  editingArticle, 
  loading,
  chapterId 
}) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [originalSlug, setOriginalSlug] = useState('');
  const [discardDialogOpen, setDiscardDialogOpen] = useState(false);

  // Carregar do localStorage ao abrir o modal (apenas se não estiver editando)
  useEffect(() => {
    if (open && !editingArticle) {
      const savedDraft = localStorage.getItem(DRAFT_KEY);
      if (savedDraft) {
        try {
          const draft = JSON.parse(savedDraft);
          setTitle(draft.title || '');
          setSlug(draft.slug || '');
          setContent(draft.content || '');
        } catch (err) {
          console.error('Erro ao carregar rascunho:', err);
        }
      }
    }
  }, [open, editingArticle]);

  useEffect(() => {
    if (editingArticle) {
      setTitle(editingArticle.title);
      setSlug(editingArticle.slug);
      setContent(editingArticle.content || '');
      setOriginalSlug(editingArticle.slug);
    } else if (!open) {
      // Limpa apenas quando fecha o modal e não está editando
      setTitle('');
      setSlug('');
      setContent('');
      setOriginalSlug('');
    }
  }, [editingArticle, open]);

  // Salvar no localStorage sempre que houver mudanças (apenas se não estiver editando)
  useEffect(() => {
    if (!editingArticle && open && (title || slug || content)) {
      const draft = { title, slug, content, chapterId };
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    }
  }, [title, slug, content, chapterId, editingArticle, open]);

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (value) => {
    setTitle(value);
    // Atualiza slug automaticamente se estiver criando OU se editando e o slug não foi customizado
    if (!editingArticle || slug === originalSlug || slug === generateSlug(title)) {
      setSlug(generateSlug(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, slug, content, chapterId });
  };

  const handleDiscard = () => {
    setDiscardDialogOpen(true);
  };

  const confirmDiscard = () => {
    localStorage.removeItem(DRAFT_KEY);
    setTitle('');
    setSlug('');
    setContent('');
    setOriginalSlug('');
    setDiscardDialogOpen(false);
    onOpenChange(false);
  };

  const isValid = title.trim() && slug.trim() && content.trim();
  const hasDraft = !editingArticle && (title || slug || content);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {editingArticle ? 'Editar Artigo' : 'Novo Artigo'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="article-title">Título</Label>
            <Input
              id="article-title"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Ex: Como fazer matrícula"
              required
            />
          </div>

          <div>
            <Label htmlFor="article-slug">Slug</Label>
            <Input
              id="article-slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="Ex: como-fazer-matricula"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              URL amigável para o artigo
            </p>
          </div>

          <div>
            <Label htmlFor="article-content">Conteúdo</Label>
            <div className="border rounded-md overflow-hidden">
              <MDXEditor
                value={content}
                onChange={setContent}
                placeholder="Escreva o conteúdo do artigo aqui..."
                className="min-h-[300px]"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Suporta Markdown com imagens e formatação
            </p>
          </div>

          <DialogFooter>
            {hasDraft && (
              <Button
                type="button"
                variant="destructive"
                onClick={handleDiscard}
                disabled={loading}
                className="mr-auto"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Descartar
              </Button>
            )}
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={!isValid || loading}>
              {loading ? 'Salvando...' : editingArticle ? 'Atualizar' : 'Criar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>

      <ConfirmDeleteDialog
        open={discardDialogOpen}
        onOpenChange={setDiscardDialogOpen}
        title="Descartar rascunho?"
        description="Tem certeza que deseja descartar este rascunho? Todo o conteúdo será perdido e esta ação não pode ser desfeita."
        onConfirm={confirmDiscard}
        confirmText="Descartar"
      />    
    </Dialog>
  );
}
```

## 📄 src/features/admin/manual/components/CreateCategoryModal.jsx
```jsx
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function CreateCategoryModal({ open, onClose, onSubmit, loading, category }) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) {
      if (category) {
        setTitle(category.title);
        setSlug(category.slug);
      } else {
        setTitle('');
        setSlug('');
      }
      setErrors({});
    }
  }, [open, category]);

  const handleTitleChange = (value) => {
    setTitle(value);
    // Auto-gera slug sempre
    const generatedSlug = value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setSlug(generatedSlug);
  };

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Nome é obrigatório';
    }
    if (!slug.trim()) {
      newErrors.slug = 'Slug é obrigatório';
    } else if (!/^[a-z0-9-]+$/.test(slug)) {
      newErrors.slug = 'Slug deve conter apenas letras minúsculas, números e hífens';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await onSubmit({ title: title.trim(), slug: slug.trim() });
    }
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && !loading && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {category ? 'Editar Categoria' : 'Nova Categoria'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Nome *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Ex: Vestuário"
              className={errors.title ? 'border-destructive' : ''}
            />
            {errors.title && (
              <p className="text-sm text-destructive">{errors.title}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">Slug (URL) *</Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value.toLowerCase())}
              placeholder="Ex: vestuario"
              className={errors.slug ? 'border-destructive' : ''}
            />
            {errors.slug && (
              <p className="text-sm text-destructive">{errors.slug}</p>
            )}
            <p className="text-xs text-muted-foreground">
              Apenas letras minúsculas, números e hífens
            </p>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Salvando...' : category ? 'Salvar' : 'Criar'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## 📄 src/features/admin/manual/components/CreateChapterModal.jsx
```jsx
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function CreateChapterModal({ 
  open, 
  onOpenChange, 
  onSubmit, 
  editingChapter, 
  loading,
  categoryId 
}) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [originalSlug, setOriginalSlug] = useState('');

  useEffect(() => {
    if (editingChapter) {
      setTitle(editingChapter.title);
      setSlug(editingChapter.slug);
      setOriginalSlug(editingChapter.slug);
    } else {
      setTitle('');
      setSlug('');
      setOriginalSlug('');
    }
  }, [editingChapter, open]);

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (value) => {
    setTitle(value);
    // Atualiza slug automaticamente se estiver criando OU se editando e o slug não foi customizado
    if (!editingChapter || slug === originalSlug || slug === generateSlug(title)) {
      setSlug(generateSlug(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, slug, categoryId });
  };

  const isValid = title.trim() && slug.trim();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {editingChapter ? 'Editar Capítulo' : 'Novo Capítulo'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="chapter-title">Título</Label>
            <Input
              id="chapter-title"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Ex: Matrícula e Trancamento"
              required
            />
          </div>

          <div>
            <Label htmlFor="chapter-slug">Slug</Label>
            <Input
              id="chapter-slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="Ex: matricula-trancamento"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              URL amigável para o capítulo
            </p>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={!isValid || loading}>
              {loading ? 'Salvando...' : editingChapter ? 'Atualizar' : 'Criar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## 📄 src/features/admin/manual/models/ManualArticle.js
```javascript
export class ManualArticle {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.content = data.content;
    this.order = data.order;
    this.chapterId = data.chapterId;
    this.chapterTitle = data.chapterTitle;
    this.categoryId = data.categoryId;
    this.categoryTitle = data.categoryTitle;
    this.helpfulCount = data.helpfulCount || 0;
    this.unhelpfulCount = data.unhelpfulCount || 0;
  }

  static fromDTO(dto) {
    return new ManualArticle(dto);
  }

  static fromDTOArray(dtos) {
    return dtos.map(dto => ManualArticle.fromDTO(dto));
  }

  clone(updates = {}) {
    return new ManualArticle({ ...this, ...updates });
  }

  get totalFeedback() {
    return this.helpfulCount + this.unhelpfulCount;
  }

  get helpfulPercentage() {
    if (this.totalFeedback === 0) return 0;
    return Math.round((this.helpfulCount / this.totalFeedback) * 100);
  }
}
```

## 📄 src/features/admin/manual/models/ManualCategory.js
```javascript
export class ManualCategory {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.order = data.order;
    this.chapterCount = data.chapterCount || 0;
  }

  static fromDTO(dto) {
    return new ManualCategory(dto);
  }

  static fromDTOArray(dtos) {
    return dtos.map(dto => ManualCategory.fromDTO(dto));
  }

  clone(updates = {}) {
    return new ManualCategory({ ...this, ...updates });
  }
}
```

## 📄 src/features/admin/manual/models/ManualChapter.js
```javascript
export class ManualChapter {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.order = data.order;
    this.categoryId = data.categoryId;
    this.categoryTitle = data.categoryTitle;
    this.articleCount = data.articleCount || 0;
  }

  static fromDTO(dto) {
    return new ManualChapter(dto);
  }

  static fromDTOArray(dtos) {
    return dtos.map(dto => ManualChapter.fromDTO(dto));
  }

  clone(updates = {}) {
    return new ManualChapter({ ...this, ...updates });
  }
}
```

## 📄 src/features/admin/manual/useAdminManualVM.js
```javascript
import { useState, useEffect } from 'react';
import { manualService } from '@/shared/services/manualService';
import { ManualCategory } from './models/ManualCategory';
import { ManualChapter } from './models/ManualChapter';
import { ManualArticle } from './models/ManualArticle';

export function useAdminManualVM() {
  const [categories, setCategories] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setSelectedChapter(null); // Limpa capítulo selecionado ao trocar de categoria
      loadChapters(selectedCategory.id);
    } else {
      setChapters([]);
      setSelectedChapter(null);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedChapter) {
      loadArticles(selectedChapter.id);
    } else {
      setArticles([]);
    }
  }, [selectedChapter]);

  // === CATEGORIAS ===
  const loadCategories = async () => {
    try {
      setLoading(true);
      const data = await manualService.getCategories();
      setCategories(ManualCategory.fromDTOArray(data));
    } catch (err) {
      console.error('Erro ao carregar categorias:', err);
    } finally {
      setLoading(false);
    }
  };

  const createCategory = async (categoryData) => {
    try {
      setCreating(true);
      const newCategoryDTO = await manualService.createCategory(categoryData);
      const newCategory = ManualCategory.fromDTO(newCategoryDTO);
      setCategories([...categories, newCategory]);
      return { success: true, data: newCategory };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setCreating(false);
    }
  };

  const updateCategory = async (id, categoryData) => {
    try {
      const updatedDTO = await manualService.updateCategory(id, categoryData);
      const updatedCategory = ManualCategory.fromDTO(updatedDTO);
      setCategories(categories.map(c => c.id === id ? updatedCategory : c));
      
      // Atualiza a categoria selecionada se for ela
      if (selectedCategory?.id === id) {
        setSelectedCategory(updatedCategory);
      }
      
      return { success: true, data: updatedCategory };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const deleteCategory = async (id) => {
    try {
      await manualService.deleteCategory(id);
      setCategories(categories.filter(c => c.id !== id));
      
      // Remove seleção se for a categoria deletada
      if (selectedCategory?.id === id) {
        setSelectedCategory(null);
      }
      
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const reorderCategories = async (newOrder) => {
    try {
      setCategories(newOrder);
      const categoryIds = newOrder.map(c => c.id);
      await manualService.reorderCategories(categoryIds);
      return { success: true };
    } catch (err) {
      await loadCategories(); // Reverte em caso de erro
      return { success: false, error: err.message };
    }
  };

  // === CAPÍTULOS ===
  const loadChapters = async (categoryId) => {
    try {
      const data = await manualService.getChaptersByCategory(categoryId);
      setChapters(ManualChapter.fromDTOArray(data));
    } catch (err) {
      console.error('Erro ao carregar capítulos:', err);
    }
  };

  const createChapter = async (chapterData) => {
    try {
      setCreating(true);
      const newChapterDTO = await manualService.createChapter(chapterData);
      const newChapter = ManualChapter.fromDTO(newChapterDTO);
      setChapters([...chapters, newChapter]);
      
      // Atualiza contador da categoria
      setCategories(categories.map(c => 
        c.id === chapterData.categoryId 
          ? c.clone({ chapterCount: c.chapterCount + 1 })
          : c
      ));
      
      return { success: true, data: newChapter };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setCreating(false);
    }
  };

  const updateChapter = async (id, chapterData) => {
    try {
      const updatedDTO = await manualService.updateChapter(id, chapterData);
      const updatedChapter = ManualChapter.fromDTO(updatedDTO);
      setChapters(chapters.map(ch => ch.id === id ? updatedChapter : ch));
      
      // Atualiza o capítulo selecionado se for ele
      if (selectedChapter?.id === id) {
        setSelectedChapter(updatedChapter);
      }
      
      return { success: true, data: updatedChapter };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const deleteChapter = async (id) => {
    try {
      const chapter = chapters.find(ch => ch.id === id);
      await manualService.deleteChapter(id);
      setChapters(chapters.filter(ch => ch.id !== id));
      
      // Remove seleção se for o capítulo deletado
      if (selectedChapter?.id === id) {
        setSelectedChapter(null);
      }
      
      // Atualiza contador da categoria
      if (chapter) {
        setCategories(categories.map(c => 
          c.id === chapter.categoryId 
            ? c.clone({ chapterCount: Math.max(0, c.chapterCount - 1) })
            : c
        ));
      }
      
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const reorderChapters = async (categoryId, newOrder) => {
    try {
      setChapters(newOrder);
      const chapterIds = newOrder.map(ch => ch.id);
      await manualService.reorderChapters(categoryId, chapterIds);
      return { success: true };
    } catch (err) {
      if (selectedCategory) {
        await loadChapters(selectedCategory.id); // Reverte em caso de erro
      }
      return { success: false, error: err.message };
    }
  };

  // === ARTIGOS ===
  const loadArticles = async (chapterId) => {
    try {
      const data = await manualService.getArticlesByChapter(chapterId);
      setArticles(ManualArticle.fromDTOArray(data));
    } catch (err) {
      console.error('Erro ao carregar artigos:', err);
    }
  };

  const createArticle = async (articleData) => {
    try {
      setCreating(true);
      const newArticleDTO = await manualService.createArticle(articleData);
      const newArticle = ManualArticle.fromDTO(newArticleDTO);
      setArticles([...articles, newArticle]);
      
      // Atualiza contador do capítulo
      setChapters(chapters.map(ch => 
        ch.id === articleData.chapterId 
          ? ch.clone({ articleCount: ch.articleCount + 1 })
          : ch
      ));
      
      return { success: true, data: newArticle };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setCreating(false);
    }
  };

  const updateArticle = async (id, articleData) => {
    try {
      const updatedDTO = await manualService.updateArticle(id, articleData);
      const updatedArticle = ManualArticle.fromDTO(updatedDTO);
      setArticles(articles.map(a => a.id === id ? updatedArticle : a));
      return { success: true, data: updatedArticle };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const deleteArticle = async (id) => {
    try {
      const article = articles.find(a => a.id === id);
      await manualService.deleteArticle(id);
      setArticles(articles.filter(a => a.id !== id));
      
      // Atualiza contador do capítulo
      if (article) {
        setChapters(chapters.map(ch => 
          ch.id === article.chapterId 
            ? ch.clone({ articleCount: Math.max(0, ch.articleCount - 1) })
            : ch
        ));
      }
      
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const reorderArticles = async (chapterId, newOrder) => {
    try {
      setArticles(newOrder);
      const articleIds = newOrder.map(a => a.id);
      await manualService.reorderArticles(chapterId, articleIds);
      return { success: true };
    } catch (err) {
      if (selectedChapter) {
        await loadArticles(selectedChapter.id); // Reverte em caso de erro
      }
      return { success: false, error: err.message };
    }
  };

  return {
    // Estados
    categories,
    chapters,
    articles,
    selectedCategory,
    selectedChapter,
    loading,
    creating,
    
    // Setters de seleção
    setSelectedCategory,
    setSelectedChapter,
    
    // Categorias
    createCategory,
    updateCategory,
    deleteCategory,
    reorderCategories,
    
    // Capítulos
    createChapter,
    updateChapter,
    deleteChapter,
    reorderChapters,
    
    // Artigos
    createArticle,
    updateArticle,
    deleteArticle,
    reorderArticles,
  };
}
```

## 📄 src/features/admin/store/AdminStorePage.jsx
```jsx
import React from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useAdminStoreCategoriesVM } from './useAdminStoreCategoriesVM';
import { useAdminStoreProductsVM } from './useAdminStoreProductsVM';
import { StoreSection } from './components/StoreSection';

export function AdminStorePage() {
  const { toast } = useToast();
  const categoriesVM = useAdminStoreCategoriesVM();
  const productsVM = useAdminStoreProductsVM();

  // ============= CATEGORIAS =============

  const handleCreateCategory = async (data) => {
    const result = await categoriesVM.createCategory(data);
    if (result.success) {
      toast({
        title: 'Categoria criada',
        description: `A categoria "${data.name}" foi criada com sucesso.`,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao criar categoria',
        description: result.error,
      });
    }
    return result;
  };

  const handleUpdateCategory = async (id, data) => {
    const result = await categoriesVM.updateCategory(id, data);
    if (result.success) {
      toast({
        title: 'Categoria atualizada',
        description: 'A categoria foi atualizada com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao atualizar categoria',
        description: result.error,
      });
    }
    return result;
  };

  const handleDeleteCategory = async (id) => {
    const result = await categoriesVM.deleteCategory(id);
    if (result.success) {
      toast({
        title: 'Categoria removida',
        description: 'A categoria foi removida com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao remover categoria',
        description: result.error,
      });
    }
  };

  const handleReorderCategories = async (categoryIds) => {
    const result = await categoriesVM.reorderCategories(categoryIds);
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao reordenar',
        description: result.error,
      });
    }
  };

  // ============= PRODUTOS =============

  const handleCreateProduct = async (data) => {
    const result = await productsVM.createProduct(data);
    if (result.success) {
      toast({
        title: 'Produto criado',
        description: `O produto "${data.name}" foi criado com sucesso.`,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao criar produto',
        description: result.error,
      });
    }
    return result;
  };

  const handleUpdateProduct = async (id, data) => {
    const result = await productsVM.updateProduct(id, data);
    if (result.success) {
      toast({
        title: 'Produto atualizado',
        description: 'O produto foi atualizado com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao atualizar produto',
        description: result.error,
      });
    }
    return result;
  };

  const handleDeleteProduct = async (id) => {
    const result = await productsVM.deleteProduct(id);
    if (result.success) {
      toast({
        title: 'Produto removido',
        description: 'O produto foi removido com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao remover produto',
        description: result.error,
      });
    }
    return result;
  };

  // ============= VARIAÇÕES =============

  const handleCreateVariation = async (productId, data) => {
    const result = await productsVM.createVariation(productId, data);
    if (result.success) {
      toast({
        title: 'Variação criada',
        description: `A variação "${data.name}" foi criada com sucesso.`,
      });
      // Recarrega o produto atualizado
      const updatedProduct = await productsVM.getProductById(productId);
      return updatedProduct;
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao criar variação',
        description: result.error,
      });
    }
    return result;
  };

  const handleUpdateVariation = async (productId, variationId, data) => {
    const result = await productsVM.updateVariation(productId, variationId, data);
    if (result.success) {
      toast({
        title: 'Variação atualizada',
        description: 'A variação foi atualizada com sucesso.',
      });
      // Recarrega o produto atualizado
      const updatedProduct = await productsVM.getProductById(productId);
      return updatedProduct;
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao atualizar variação',
        description: result.error,
      });
    }
    return result;
  };

  const handleDeleteVariation = async (productId, variationId) => {
    const result = await productsVM.deleteVariation(productId, variationId);
    if (result.success) {
      toast({
        title: 'Variação removida',
        description: 'A variação foi removida com sucesso.',
      });
      // Recarrega o produto atualizado
      const updatedProduct = await productsVM.getProductById(productId);
      return updatedProduct;
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao remover variação',
        description: result.error,
      });
    }
    return result;
  };

  // ============= IMAGENS =============

  const handleGetProductImages = async (productId) => {
    return await productsVM.getProductImages(productId);
  };

  const handleAddProductImage = async (productId, imageFile) => {
    const result = await productsVM.addProductImage(productId, imageFile);
    if (result.success) {
      toast({
        title: 'Imagem adicionada',
        description: 'A imagem foi adicionada com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao adicionar imagem',
        description: result.error,
      });
    }
    return result;
  };

  const handleDeleteProductImage = async (productId, imageId, imageUrl) => {
    const result = await productsVM.deleteProductImage(productId, imageId, imageUrl);
    if (result.success) {
      toast({
        title: 'Imagem removida',
        description: 'A imagem foi removida com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao remover imagem',
        description: result.error,
      });
    }
    return result;
  };

  const handleReorderProductImages = async (productId, imageIds, newImagesOrder) => {
    const result = await productsVM.reorderProductImages(productId, imageIds, newImagesOrder);
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao reordenar imagens',
        description: result.error,
      });
    }
    return result;
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Loja</h1>

      <StoreSection
        categories={categoriesVM.categories}
        selectedCategory={categoriesVM.selectedCategory}
        onSelectCategory={categoriesVM.selectCategory}
        products={productsVM.products}
        loading={categoriesVM.isLoading}
        loadingProducts={productsVM.isLoading}
        creating={categoriesVM.isCreating || productsVM.isCreating}
        onCreateCategory={handleCreateCategory}
        onUpdateCategory={handleUpdateCategory}
        onDeleteCategory={handleDeleteCategory}
        onReorderCategories={handleReorderCategories}
        onCreateProduct={handleCreateProduct}
        onUpdateProduct={handleUpdateProduct}
        onDeleteProduct={handleDeleteProduct}
        onGetProductImages={handleGetProductImages}
        onAddProductImage={handleAddProductImage}
        onDeleteProductImage={handleDeleteProductImage}
        onReorderProductImages={handleReorderProductImages}
        onCreateVariation={handleCreateVariation}
        onUpdateVariation={handleUpdateVariation}
        onDeleteVariation={handleDeleteVariation}
      />
    </div>
  );
}
```

## 📄 src/features/admin/store/components/CreateProductModal.jsx
```jsx
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { PriceInput } from '@/components/ui/price-input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export function CreateProductModal({ open, onClose, onSave, loading, product, categoryId }) {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    price: '',
    originalPrice: '',
    manageStock: true,
    stockQuantity: '',
    active: true
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) {
      if (product) {
        setFormData({
          name: product.name || '',
          slug: product.slug || '',
          description: product.description || '',
          price: product.price?.toString() || '',
          originalPrice: product.originalPrice?.toString() || '',
          manageStock: product.manageStock ?? true,
          stockQuantity: product.stockQuantity?.toString() || '',
          active: product.active ?? true
        });
      } else {
        setFormData({
          name: '',
          slug: '',
          description: '',
          price: '',
          originalPrice: '',
          manageStock: true,
          stockQuantity: '',
          active: true
        });
      }
      setErrors({});
    }
  }, [open, product]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }

    // Auto-gera slug quando o nome muda
    if (field === 'name') {
      const generatedSlug = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setFormData(prev => ({ ...prev, slug: generatedSlug }));
    }
  };



  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.slug.trim()) {
      newErrors.slug = 'Slug é obrigatório';
    } else if (!/^[a-z0-9-]+$/.test(formData.slug)) {
      newErrors.slug = 'Slug deve conter apenas letras minúsculas, números e hífens';
    }
    
    const priceValue = parseFloat(formData.price);
    if (!formData.price || isNaN(priceValue) || priceValue <= 0) {
      newErrors.price = 'Preço deve ser maior que zero';
    }

    if (formData.originalPrice) {
      const originalPriceValue = parseFloat(formData.originalPrice);
      const currentPriceValue = parseFloat(formData.price);
      if (!isNaN(originalPriceValue) && !isNaN(currentPriceValue) && originalPriceValue >= currentPriceValue) {
        newErrors.originalPrice = 'Preço de custo deve ser menor que o preço de venda';
      }
    }
    
    if (formData.manageStock) {
      const stockValue = parseInt(formData.stockQuantity);
      if (!formData.stockQuantity || isNaN(stockValue) || stockValue < 0) {
        newErrors.stockQuantity = 'Estoque inválido';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const priceValue = parseFloat(formData.price);
    const originalPriceValue = formData.originalPrice ? parseFloat(formData.originalPrice) : null;

    if (!categoryId) {
      setErrors({ general: 'Categoria não selecionada' });
      return;
    }

    const data = {
      name: formData.name.trim(),
      slug: formData.slug.trim(),
      description: formData.description.trim(),
      price: priceValue,
      originalPrice: originalPriceValue,
      manageStock: formData.manageStock,
      stockQuantity: formData.manageStock ? parseInt(formData.stockQuantity) : 0,
      active: formData.active,
      categoryId: categoryId
    };

    await onSave(data);
  };



  return (
    <Dialog open={open} onOpenChange={(open) => !open && !loading && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {product ? 'Editar Produto' : 'Novo Produto'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="name">Nome *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Ex: Camiseta CACO 2024"
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Slug */}
          <div className="space-y-2">
            <Label htmlFor="slug">Slug (URL) *</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => handleChange('slug', e.target.value.toLowerCase())}
              placeholder="Ex: camiseta-caco-2024"
              className={errors.slug ? 'border-destructive' : ''}
            />
            {errors.slug && (
              <p className="text-sm text-destructive">{errors.slug}</p>
            )}
            <p className="text-xs text-muted-foreground">
              Apenas letras minúsculas, números e hífens
            </p>
          </div>

          {/* Descrição */}
          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Descrição detalhada do produto..."
              rows={3}
            />
          </div>

          {/* Preço e Preço Original */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Preço (R$) *</Label>
              <PriceInput
                id="price"
                value={formData.price}
                onChange={(value) => handleChange('price', value)}
                placeholder="0,00"
                className={errors.price ? 'border-destructive' : ''}
              />
              {errors.price && (
                <p className="text-sm text-destructive">{errors.price}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="originalPrice">Preço de Custo (R$)</Label>
              <PriceInput
                id="originalPrice"
                value={formData.originalPrice}
                onChange={(value) => handleChange('originalPrice', value)}
                placeholder="0,00"
                className={errors.originalPrice ? 'border-destructive' : ''}
              />
              {errors.originalPrice && (
                <p className="text-sm text-destructive">{errors.originalPrice}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Preço original de compra/produção
              </p>
            </div>
          </div>

          {/* Gerenciar Estoque */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="space-y-0.5">
              <Label htmlFor="manageStock" className="cursor-pointer">Gerenciar Estoque</Label>
              <p className="text-xs text-muted-foreground">
                Ative para controlar a quantidade disponível
              </p>
            </div>
            <Switch
              id="manageStock"
              checked={formData.manageStock}
              onCheckedChange={(checked) => handleChange('manageStock', checked)}
            />
          </div>

          {/* Estoque (condicional) */}
          {formData.manageStock && (
            <div className="space-y-2">
              <Label htmlFor="stockQuantity">Quantidade em Estoque *</Label>
              <Input
                id="stockQuantity"
                type="number"
                min="0"
                value={formData.stockQuantity}
                onChange={(e) => handleChange('stockQuantity', e.target.value)}
                placeholder="0"
                className={errors.stockQuantity ? 'border-destructive' : ''}
              />
              {errors.stockQuantity && (
                <p className="text-sm text-destructive">{errors.stockQuantity}</p>
              )}
            </div>
          )}

          {/* Ativo */}
          <div className="flex items-center justify-between">
            <Label htmlFor="active">Produto Ativo</Label>
            <Switch
              id="active"
              checked={formData.active}
              onCheckedChange={(checked) => handleChange('active', checked)}
            />
          </div>

          {/* Alerta informativo para novos produtos */}
          {!product && (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Após criar o produto, você poderá adicionar imagens e variações através dos botões de ação na lista de produtos.
              </AlertDescription>
            </Alert>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Salvando...' : product ? 'Salvar' : 'Criar'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

## 📄 src/features/admin/store/components/ManageProductImagesModal.jsx
```jsx
import { useState, useRef, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Upload, X, GripVertical, ImagePlus, Crop, Loader2, AlertCircle } from 'lucide-react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '@/shared/utils/imageCrop';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

function SortableImageItem({ image, onDelete, isFirst }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: image.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative group border-2 rounded-lg overflow-hidden bg-card hover:border-primary transition-colors"
    >
      <div className="aspect-square">
        <img
          src={image.url}
          alt={`Imagem ${image.order + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay com ações */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <button
            {...attributes}
            {...listeners}
            className="bg-primary text-primary-foreground p-3 rounded-full cursor-move hover:scale-110 transition-transform shadow-lg"
            title="Arrastar para reordenar"
          >
            <GripVertical className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(image.id)}
            className="bg-destructive text-destructive-foreground p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
            title="Excluir imagem"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Badge de ordem */}
        <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-sm font-semibold px-2.5 py-1 rounded-full shadow-md">
          #{image.order + 1}
        </div>
        
        {/* Badge de capa */}
        {isFirst && (
          <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
            CAPA
          </div>
        )}
      </div>
    </div>
  );
}

export function ManageProductImagesModal({ 
  open, 
  onClose, 
  product,
  onGetImages,
  onAddImage,
  onDeleteImage,
  onReorderImages,
  loading 
}) {
  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [deleteImageId, setDeleteImageId] = useState(null);
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [pendingFiles, setPendingFiles] = useState([]);
  const [croppedFiles, setCroppedFiles] = useState([]);
  const [croppedPreviews, setCroppedPreviews] = useState([]);
  const [uploadStatus, setUploadStatus] = useState([]);
  const [currentCropIndex, setCurrentCropIndex] = useState(0);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isCropping, setIsCropping] = useState(false);
  const [isLoadingImages, setIsLoadingImages] = useState(false);
  const [loadError, setLoadError] = useState(null);
  const fileInputRef = useRef(null);
  const loadedProductIdRef = useRef(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // Busca as imagens do produto via ViewModel quando o modal abre
  useEffect(() => {
    if (!open) {
      // Limpa as imagens quando o modal fecha
      setImages([]);
      setLoadError(null);
      loadedProductIdRef.current = null;
      return;
    }

    // Só carrega se for um produto diferente ou se ainda não carregou
    if (product?.id && product.id !== loadedProductIdRef.current) {
      const loadImages = async () => {
        if (onGetImages) {
          try {
            setIsLoadingImages(true);
            setLoadError(null);
            const result = await onGetImages(product.id);
            
            if (result.success && result.data) {
              // Mapeia a resposta do backend para o formato esperado
              const formattedImages = result.data.map((img) => ({
                id: img.id,
                url: img.imageUrl,
                order: img.displayOrder
              }));
              
              // Ordena as imagens por displayOrder
              formattedImages.sort((a, b) => a.order - b.order);
              
              setImages(formattedImages);
              loadedProductIdRef.current = product.id;
            } else if (result.success && (!result.data || result.data.length === 0)) {
              // Lista vazia não é erro, apenas não há imagens
              setImages([]);
              loadedProductIdRef.current = product.id;
            } else {
              setLoadError(result.error || 'Erro ao carregar imagens');
              setImages([]);
            }
          } catch (error) {
            console.error('Erro ao carregar imagens:', error);
            setLoadError('Erro inesperado ao carregar imagens');
            setImages([]);
          } finally {
            setIsLoadingImages(false);
          }
        }
      };

      loadImages();
    }
  }, [open, product?.id, onGetImages]);

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    // Valida arquivos
    const validFiles = files.filter(file => {
      if (!file.type.startsWith('image/')) return false;
      if (file.size > 10 * 1024 * 1024) return false;
      return true;
    });

    if (validFiles.length === 0) return;

    // Inicia processo de recorte
    setPendingFiles(validFiles);
    setCroppedFiles([]);
    setCurrentCropIndex(0);
    
    // Carrega primeira imagem para recortar
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setCropModalOpen(true);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
    };
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };
    reader.readAsDataURL(validFiles[0]);
  };

  const handleCropConfirm = async () => {
    if (isCropping) return;
    
    setIsCropping(true);
    
    try {
      // Inicia o recorte em background
      const cropPromise = getCroppedImg(imageSrc, croppedAreaPixels);
      
      // Se não é a última imagem, já carrega a próxima
      const isLast = currentCropIndex >= pendingFiles.length - 1;
      
      if (!isLast) {
        const nextIndex = currentCropIndex + 1;
        setCurrentCropIndex(nextIndex);
        
        const reader = new FileReader();
        reader.onload = () => {
          setImageSrc(reader.result);
          setCrop({ x: 0, y: 0 });
          setZoom(1);
        };
        reader.readAsDataURL(pendingFiles[nextIndex]);
      }
      
      // Aguarda o recorte terminar
      const croppedBlob = await cropPromise;
      const originalFile = pendingFiles[currentCropIndex];
      const croppedFile = new File([croppedBlob], originalFile.name, { type: 'image/jpeg' });

      // Gera preview
      const previewUrl = URL.createObjectURL(croppedBlob);
      
      // Armazena arquivo recortado e preview
      const newCroppedFiles = [...croppedFiles, croppedFile];
      const newPreviews = [...croppedPreviews, { url: previewUrl, name: originalFile.name }];
      setCroppedFiles(newCroppedFiles);
      setCroppedPreviews(newPreviews);

      // Se era a última, finaliza recortes e inicia uploads
      if (isLast) {
        setCropModalOpen(false);
        setImageSrc(null);
        await uploadAllCroppedImages(newCroppedFiles, newPreviews);
      }
    } catch (err) {
      console.error('Erro ao recortar imagem:', err);
    } finally {
      setIsCropping(false);
    }
  };

  const uploadAllCroppedImages = async (filesToUpload, previews) => {
    setIsUploading(true);
    
    // Inicializa status de upload
    const initialStatus = previews.map((preview, index) => ({
      preview: preview.url,
      name: preview.name,
      status: 'pending',
      progress: 0
    }));
    setUploadStatus(initialStatus);
    
    for (let i = 0; i < filesToUpload.length; i++) {
      // Atualiza status para uploading
      setUploadStatus(prev => prev.map((item, idx) => 
        idx === i ? { ...item, status: 'uploading', progress: 50 } : item
      ));
      
      const result = await onAddImage(product.id, filesToUpload[i]);
      
      // Atualiza status baseado no resultado
      if (result.success && result.data) {
        setUploadStatus(prev => prev.map((item, idx) => 
          idx === i ? { ...item, status: 'success', progress: 100 } : item
        ));
        
        // Adiciona a imagem com os dados reais do backend
        const newImage = {
          id: result.data.id,
          url: result.data.imageUrl,
          order: result.data.displayOrder !== undefined ? result.data.displayOrder : prev.length
        };
        
        setImages(prev => [...prev, newImage]);
      } else {
        setUploadStatus(prev => prev.map((item, idx) => 
          idx === i ? { ...item, status: 'error', progress: 0 } : item
        ));
      }
    }

    // Aguarda 1 segundo para mostrar todos como success
    setTimeout(() => {
      // Limpa estados
      setIsUploading(false);
      setUploadProgress(null);
      setPendingFiles([]);
      setCroppedFiles([]);
      setCroppedPreviews([]);
      setUploadStatus([]);
      setCurrentCropIndex(0);
      
      // Libera URLs de preview
      previews.forEach(preview => URL.revokeObjectURL(preview.url));
      
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 1500);
  };

  const handleCropCancel = () => {
    setCropModalOpen(false);
    setPendingFiles([]);
    setCroppedFiles([]);
    setCroppedPreviews([]);
    setCurrentCropIndex(0);
    setImageSrc(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDeleteImage = async () => {
    if (!deleteImageId) return;
    
    const imageToDelete = images.find(img => img.id === deleteImageId);
    const result = await onDeleteImage(product.id, deleteImageId, imageToDelete?.url);
    if (result.success) {
      setImages(prev => prev.filter(img => img.id !== deleteImageId));
    }
    setDeleteImageId(null);
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      const oldIndex = images.findIndex(img => img.id === active.id);
      const newIndex = images.findIndex(img => img.id === over.id);
      
      const newImages = arrayMove(images, oldIndex, newIndex).map((img, index) => ({
        ...img,
        order: index
      }));
      
      setImages(newImages);
      
      // Salva nova ordem no backend e atualiza o estado do produto
      const imageIds = newImages.map(img => String(img.id));
      
      const result = await onReorderImages(product.id, imageIds, newImages);
      
      // Se der erro, reverte a ordenação local
      if (!result.success) {
        setImages(images);
      }
    }
  };

  if (!product) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={(open) => !open && !loading && onClose()}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <ImagePlus className="h-5 w-5" />
              Gerenciar Imagens - {product.name}
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-2">
              {images.length === 0 
                ? 'Adicione imagens para o produto'
                : `${images.length} ${images.length === 1 ? 'imagem' : 'imagens'} • A primeira imagem é a capa do produto`
              }
            </p>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Estado de Loading */}
            {isLoadingImages ? (
              <div className="text-center py-16 border-2 border-dashed rounded-lg bg-muted/20">
                <div className="flex flex-col items-center gap-4">
                  <Loader2 className="h-12 w-12 text-primary animate-spin" />
                  <p className="font-medium text-lg">Carregando imagens...</p>
                </div>
              </div>
            ) : loadError ? (
              /* Estado de Erro */
              <div className="text-center py-16 border-2 border-dashed rounded-lg bg-destructive/10">
                <div className="flex flex-col items-center gap-4">
                  <div className="rounded-full bg-destructive/10 p-4">
                    <AlertCircle className="h-12 w-12 text-destructive" />
                  </div>
                  <div>
                    <p className="font-medium text-lg mb-1">Erro ao carregar imagens</p>
                    <p className="text-sm text-muted-foreground">{loadError}</p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setLoadError(null);
                      setIsLoadingImages(true);
                      onGetImages(product.id).then(result => {
                        if (result.success && result.data) {
                          const formattedImages = result.data.map((img) => ({
                            id: img.id,
                            url: img.imageUrl,
                            order: img.displayOrder
                          }));
                          formattedImages.sort((a, b) => a.order - b.order);
                          setImages(formattedImages);
                        } else {
                          setLoadError(result.error || 'Erro ao carregar imagens');
                        }
                        setIsLoadingImages(false);
                      });
                    }}
                  >
                    Tentar Novamente
                  </Button>
                </div>
              </div>
            ) : images.length === 0 ? (
              /* Estado Vazio */
              <div className="text-center py-16 border-2 border-dashed rounded-lg bg-muted/20">
                <div className="flex flex-col items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    <ImagePlus className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg mb-1">Nenhuma imagem adicionada</p>
                    <p className="text-sm text-muted-foreground">
                      Adicione fotos do produto para melhorar a apresentação
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,image/webp"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                    disabled={loading || uploadProgress || isUploading}
                  />
                  <Button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={loading || uploadProgress || isUploading}
                    className="mt-2"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {uploadProgress || 'Selecionar Imagens'}
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={images.map(img => img.id)}
                    strategy={rectSortingStrategy}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {images.map((image, index) => (
                        <SortableImageItem
                          key={image.id}
                          image={image}
                          onDelete={setDeleteImageId}
                          isFirst={index === 0}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>

                {/* Botão para adicionar mais */}
                <div className="border-2 border-dashed rounded-lg p-6 text-center bg-muted/10 hover:bg-muted/20 transition-colors">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,image/webp"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                    disabled={loading || uploadProgress || isUploading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={loading || uploadProgress || isUploading}
                    className="w-full"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {uploadProgress || 'Adicionar Mais Imagens'}
                  </Button>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={onClose} disabled={loading || isUploading}>
              {isUploading ? 'Enviando...' : 'Fechar'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Crop Modal - FORA do Dialog principal */}
      <Dialog open={cropModalOpen} onOpenChange={handleCropCancel}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Crop className="h-5 w-5" />
              Recortar Imagem {currentCropIndex + 1} de {pendingFiles.length}
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              Recorte todas as imagens. O upload será feito após finalizar os recortes.
            </p>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Cropper */}
            <div className="relative w-full h-[400px] bg-black rounded-lg overflow-hidden">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            {/* Zoom Control */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Zoom</label>
              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-4 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={handleCropCancel}
                className="flex-1"
              >
                Cancelar Tudo
              </Button>
              <Button
                type="button"
                onClick={handleCropConfirm}
                disabled={loading || isCropping}
                className="flex-1"
              >
                {isCropping ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processando...
                  </>
                ) : (
                  <>
                    <Crop className="h-4 w-4 mr-2" />
                    {currentCropIndex < pendingFiles.length - 1 ? 'Próxima Imagem' : 'Finalizar e Enviar'}
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Upload Progress Modal */}
      <Dialog open={isUploading} onOpenChange={() => {}}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" onInteractOutside={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 animate-pulse" />
              Enviando Imagens
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              {uploadStatus.filter(s => s.status === 'success').length} de {uploadStatus.length} imagens enviadas
            </p>
          </DialogHeader>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
            {uploadStatus.map((item, index) => (
              <div key={index} className="relative border rounded-lg overflow-hidden">
                <div className="aspect-square">
                  <img
                    src={item.preview}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay de status */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                  item.status === 'pending' ? 'bg-black/20' :
                  item.status === 'uploading' ? 'bg-primary/20' :
                  item.status === 'success' ? 'bg-green-600/20' :
                  'bg-red-600/20'
                }`}>
                  {item.status === 'pending' && (
                    <div className="bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
                      Aguardando...
                    </div>
                  )}
                  {item.status === 'uploading' && (
                    <div className="bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-full flex items-center gap-2">
                      <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </div>
                  )}
                  {item.status === 'success' && (
                    <div className="bg-green-600 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Enviada
                    </div>
                  )}
                  {item.status === 'error' && (
                    <div className="bg-red-600 text-white text-xs px-3 py-1.5 rounded-full">
                      Erro
                    </div>
                  )}
                </div>
                
                {/* Nome do arquivo */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-white text-xs truncate">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteImageId} onOpenChange={() => setDeleteImageId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir esta imagem? Esta ação não pode ser desfeita.
              {images.findIndex(img => img.id === deleteImageId) === 0 && (
                <span className="block mt-2 font-semibold text-amber-600">
                  ⚠️ Esta é a imagem de capa do produto.
                </span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteImage} disabled={loading} className="bg-destructive hover:bg-destructive/90">
              Excluir Imagem
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
```

## 📄 src/features/admin/store/components/ProductList.jsx
```jsx
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StoreProductItem } from './StoreProductItem';

export function ProductList({
  products,
  loading,
  onAddProduct,
  onDeleteProduct,
  onEditProduct,
  onManageVariations,
  onManageImages,
  selectedCategory,
}) {
  if (!selectedCategory) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>Selecione uma categoria para ver e gerenciar os produtos</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">
          Produtos de {selectedCategory.name}
        </h3>
        <Button onClick={onAddProduct} size="sm">
          <Plus size={16} className="mr-2" />
          Novo Produto
        </Button>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>Nenhum produto nesta categoria</p>
          <Button onClick={onAddProduct} variant="outline" className="mt-4">
            <Plus size={16} className="mr-2" />
            Adicionar Primeiro Produto
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <StoreProductItem
              key={product.id}
              product={product}
              onEdit={onEditProduct}
              onDelete={onDeleteProduct}
              onManageVariations={onManageVariations}
              onManageImages={onManageImages}
            />
          ))}
        </div>
      )}
    </div>
  );
}
```

## 📄 src/features/admin/store/components/ProductVariationsDialog.jsx
```jsx
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Pencil, X, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function ProductVariationsDialog({
  open,
  product,
  onClose,
  onCreateVariation,
  onUpdateVariation,
  onDeleteVariation,
}) {
  const [variations, setVariations] = React.useState([]);
  const [editingId, setEditingId] = React.useState(null);
  const [formData, setFormData] = React.useState({
    name: '',
    additionalPrice: '',
    stockQuantity: '',
  });
  const [isCreating, setIsCreating] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    if (open && product) {
      setVariations(product.variations || []);
      setIsCreating(false);
      setEditingId(null);
      resetForm();
    }
  }, [open, product]);

  const resetForm = () => {
    setFormData({
      name: '',
      additionalPrice: '',
      stockQuantity: '',
    });
    setErrors({});
  };

  const startCreate = () => {
    setIsCreating(true);
    setEditingId(null);
    resetForm();
  };

  const startEdit = (variation) => {
    setEditingId(variation.id);
    setIsCreating(false);
    setFormData({
      name: variation.name,
      additionalPrice: variation.additionalPrice.toString(),
      stockQuantity: variation.stockQuantity?.toString() || '0',
    });
    setErrors({});
  };

  const cancelEdit = () => {
    setEditingId(null);
    setIsCreating(false);
    resetForm();
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    if (formData.additionalPrice === '' || isNaN(parseFloat(formData.additionalPrice))) {
      newErrors.additionalPrice = 'Preço adicional é obrigatório';
    }
    if (formData.stockQuantity === '' || isNaN(parseInt(formData.stockQuantity)) || parseInt(formData.stockQuantity) < 0) {
      newErrors.stockQuantity = 'Quantidade inválida';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;

    const data = {
      name: formData.name.trim(),
      additionalPrice: parseFloat(formData.additionalPrice),
      stockQuantity: parseInt(formData.stockQuantity),
    };

    let result;
    if (editingId) {
      result = await onUpdateVariation(product.id, editingId, data);
    } else {
      result = await onCreateVariation(product.id, data);
    }

    if (result.success) {
      if (editingId) {
        setVariations(prev =>
          prev.map(v => (v.id === editingId ? result.data : v))
        );
      } else {
        setVariations(prev => [...prev, result.data]);
      }
      cancelEdit();
    }
  };

  const handleDelete = async (variationId) => {
    const result = await onDeleteVariation(product.id, variationId);
    if (result.success) {
      setVariations(prev => prev.filter(v => v.id !== variationId));
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Gerenciar Variações</DialogTitle>
          <DialogDescription>
            Produto: {product.name}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Lista de Variações */}
          <div className="space-y-2">
            {variations.map((variation) => (
              <div
                key={variation.id}
                className="flex items-center gap-3 p-3 border rounded-lg bg-card"
              >
                {editingId === variation.id ? (
                  // Modo de Edição
                  <div className="flex-1 space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <Label className="text-xs">Nome</Label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Ex: Tamanho M"
                          className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <Label className="text-xs">Preço Adicional (R$)</Label>
                        <Input
                          type="number"
                          step="0.01"
                          value={formData.additionalPrice}
                          onChange={(e) => setFormData(prev => ({ ...prev, additionalPrice: e.target.value }))}
                          placeholder="0.00"
                          className={errors.additionalPrice ? 'border-destructive' : ''}
                        />
                        {errors.additionalPrice && (
                          <p className="text-xs text-destructive mt-1">{errors.additionalPrice}</p>
                        )}
                      </div>
                      <div>
                        <Label className="text-xs">Estoque</Label>
                        <Input
                          type="number"
                          min="0"
                          value={formData.stockQuantity}
                          onChange={(e) => setFormData(prev => ({ ...prev, stockQuantity: e.target.value }))}
                          placeholder="0"
                          className={errors.stockQuantity ? 'border-destructive' : ''}
                        />
                        {errors.stockQuantity && (
                          <p className="text-xs text-destructive mt-1">{errors.stockQuantity}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={handleSave}>
                        <Check className="h-4 w-4 mr-1" />
                        Salvar
                      </Button>
                      <Button size="sm" variant="outline" onClick={cancelEdit}>
                        <X className="h-4 w-4 mr-1" />
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  // Modo de Visualização
                  <>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{variation.name}</h4>
                        {!variation.available && (
                          <Badge variant="secondary">Indisponível</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>+ {formatPrice(variation.additionalPrice)}</span>
                        {product.manageStock && (
                          <span>Estoque: {variation.stockQuantity || 0}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => startEdit(variation)}
                        className="h-8 w-8"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(variation.id)}
                        className="h-8 w-8 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}

            {variations.length === 0 && !isCreating && (
              <div className="text-center py-8 text-muted-foreground">
                Nenhuma variação cadastrada
              </div>
            )}
          </div>

          {/* Formulário de Nova Variação */}
          {isCreating && (
            <div className="border rounded-lg p-4 bg-muted/50 space-y-3">
              <h4 className="font-medium text-sm">Nova Variação</h4>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Label className="text-xs">Nome *</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Ex: Tamanho M"
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <Label className="text-xs">Preço Adicional (R$) *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={formData.additionalPrice}
                    onChange={(e) => setFormData(prev => ({ ...prev, additionalPrice: e.target.value }))}
                    placeholder="0.00"
                    className={errors.additionalPrice ? 'border-destructive' : ''}
                  />
                  {errors.additionalPrice && (
                    <p className="text-xs text-destructive mt-1">{errors.additionalPrice}</p>
                  )}
                </div>
                <div>
                  <Label className="text-xs">Estoque *</Label>
                  <Input
                    type="number"
                    min="0"
                    value={formData.stockQuantity}
                    onChange={(e) => setFormData(prev => ({ ...prev, stockQuantity: e.target.value }))}
                    placeholder="0"
                    className={errors.stockQuantity ? 'border-destructive' : ''}
                  />
                  {errors.stockQuantity && (
                    <p className="text-xs text-destructive mt-1">{errors.stockQuantity}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={handleSave}>
                  <Check className="h-4 w-4 mr-1" />
                  Criar
                </Button>
                <Button size="sm" variant="outline" onClick={cancelEdit}>
                  <X className="h-4 w-4 mr-1" />
                  Cancelar
                </Button>
              </div>
            </div>
          )}

          {/* Botão Adicionar */}
          {!isCreating && !editingId && (
            <Button variant="outline" onClick={startCreate} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Variação
            </Button>
          )}
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button onClick={onClose}>Fechar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

## 📄 src/features/admin/store/components/ProductVariationsModal.jsx
```jsx
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PriceInput } from '@/components/ui/price-input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export function ProductVariationsModal({ 
  open, 
  onClose, 
  product, 
  variations,
  onCreateVariation,
  onUpdateVariation,
  onDeleteVariation,
  loading 
}) {
  const [editingVariation, setEditingVariation] = useState(null);
  const [deleteVariation, setDeleteVariation] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    additionalPrice: '',
    stockQuantity: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!open) {
      resetForm();
    }
  }, [open]);

  const resetForm = () => {
    setFormData({
      name: '',
      additionalPrice: '',
      stockQuantity: ''
    });
    setEditingVariation(null);
    setErrors({});
  };

  const handleEdit = (variation) => {
    setEditingVariation(variation);
    setFormData({
      name: variation.name || '',
      additionalPrice: variation.additionalPrice || '',
      stockQuantity: variation.stockQuantity?.toString() || '0'
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    // Valida additionalPrice
    if (formData.additionalPrice !== '' && formData.additionalPrice !== null && formData.additionalPrice !== undefined) {
      const price = typeof formData.additionalPrice === 'number' ? formData.additionalPrice : parseFloat(formData.additionalPrice);
      if (isNaN(price)) {
        newErrors.additionalPrice = 'Preço adicional inválido';
      } else if (price < 0) {
        newErrors.additionalPrice = 'Preço adicional deve ser zero ou positivo';
      }
    }
    
    // Valida stockQuantity apenas se não estiver vazio
    if (formData.stockQuantity !== '' && formData.stockQuantity !== null) {
      if (isNaN(parseInt(formData.stockQuantity)) || parseInt(formData.stockQuantity) < 0) {
        newErrors.stockQuantity = 'Quantidade em estoque não pode ser negativa';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = {
      name: formData.name.trim(),
      additionalPrice: typeof formData.additionalPrice === 'number' 
        ? formData.additionalPrice 
        : (formData.additionalPrice === '' || formData.additionalPrice === null ? 0 : parseFloat(formData.additionalPrice))
    };
    
    // Só adiciona stockQuantity se foi especificado
    if (formData.stockQuantity !== '' && formData.stockQuantity !== null) {
      data.stockQuantity = parseInt(formData.stockQuantity);
    }

    let result;
    if (editingVariation) {
      result = await onUpdateVariation(product.id, editingVariation.id, data);
    } else {
      result = await onCreateVariation(product.id, data);
    }

    if (result.success) {
      resetForm();
    }
  };

  const handleDeleteConfirm = async () => {
    if (deleteVariation) {
      const result = await onDeleteVariation(product.id, deleteVariation.id);
      if (result.success) {
        setDeleteVariation(null);
      }
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const calculateFinalPrice = (basePrice, adjustment) => {
    return basePrice + adjustment;
  };

  if (!product) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={(open) => !open && !loading && onClose()}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Variações - {product.name}</DialogTitle>
            <p className="text-sm text-muted-foreground">
              Preço Base: {formatPrice(product.price)}
            </p>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Formulário de Criação/Edição */}
            <form onSubmit={handleSubmit} className="border rounded-lg p-4 space-y-4 bg-muted/50">
              <h3 className="font-semibold">
                {editingVariation ? 'Editar Variação' : 'Nova Variação'}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Ex: Tamanho M, Cor Azul"
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="additionalPrice">Preço Adicional (R$)</Label>
                    <PriceInput
                      id="additionalPrice"
                      value={formData.additionalPrice}
                      onChange={(value) => handleChange('additionalPrice', value)}
                      placeholder="0,00"
                      className={errors.additionalPrice ? 'border-destructive' : ''}
                    />
                    {errors.additionalPrice && (
                      <p className="text-sm text-destructive">{errors.additionalPrice}</p>
                    )}
                    {formData.additionalPrice !== '' && formData.additionalPrice !== null && formData.additionalPrice !== undefined && !errors.additionalPrice && Number(formData.additionalPrice) !== 0 && (
                      <p className="text-xs text-muted-foreground">
                        Preço Final: {formatPrice(calculateFinalPrice(product.price, typeof formData.additionalPrice === 'number' ? formData.additionalPrice : parseFloat(formData.additionalPrice) || 0))}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stockQuantity">Quantidade em Estoque</Label>
                    <Input
                      id="stockQuantity"
                      type="number"
                      min="0"
                      value={formData.stockQuantity}
                      onChange={(e) => handleChange('stockQuantity', e.target.value)}
                      placeholder="0"
                      className={errors.stockQuantity ? 'border-destructive' : ''}
                      disabled={!product.manageStock}
                    />
                    {!product.manageStock && (
                      <p className="text-xs text-muted-foreground">
                        Este produto não gerencia estoque
                      </p>
                    )}
                    {errors.stockQuantity && (
                      <p className="text-sm text-destructive">{errors.stockQuantity}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                {editingVariation && (
                  <Button type="button" variant="outline" onClick={resetForm}>
                    <X className="h-4 w-4 mr-2" />
                    Cancelar
                  </Button>
                )}
                <Button type="submit" disabled={loading}>
                  {editingVariation ? (
                    <>
                      <Pencil className="h-4 w-4 mr-2" />
                      Atualizar
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Lista de Variações */}
            <div className="space-y-2">
              <h3 className="font-semibold">Variações Existentes ({variations.length})</h3>
              
              {variations.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Nenhuma variação cadastrada</p>
                  <p className="text-sm">Adicione variações para este produto acima</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {variations.map((variation) => (
                    <div
                      key={variation.id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{variation.name}</span>
                          {variation.stockQuantity !== null && variation.stockQuantity !== undefined && variation.stockQuantity === 0 && (
                            <Badge variant="destructive">Sem estoque</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>
                            Preço: {formatPrice(calculateFinalPrice(product.price, variation.additionalPrice))}
                          </span>
                          {variation.additionalPrice !== 0 && (
                            <span className={variation.additionalPrice > 0 ? 'text-green-600' : 'text-red-600'}>
                              ({variation.additionalPrice > 0 ? '+' : ''}{formatPrice(variation.additionalPrice)})
                            </span>
                          )}
                          {variation.stockQuantity !== null && variation.stockQuantity !== undefined && (
                            <span>Estoque: {variation.stockQuantity}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(variation)}
                          disabled={loading}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setDeleteVariation(variation)}
                          disabled={loading}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <Button variant="outline" onClick={onClose} disabled={loading}>
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteVariation} onOpenChange={() => setDeleteVariation(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir a variação "{deleteVariation?.name}"?
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} disabled={loading}>
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
```

## 📄 src/features/admin/store/components/StoreCategoriesSection.jsx
```jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Loader2 } from 'lucide-react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { StoreCategoryItem } from './StoreCategoryItem';
import { StoreCategoryDialog } from './StoreCategoryDialog';

export function StoreCategoriesSection({
  categories,
  loading,
  onReorder,
  onCreate,
  onUpdate,
  onDelete,
}) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [editingCategory, setEditingCategory] = React.useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = categories.findIndex((c) => c.id === active.id);
    const newIndex = categories.findIndex((c) => c.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;

    const newOrder = arrayMove(categories, oldIndex, newIndex);
    const categoryIds = newOrder.map(c => c.id);
    await onReorder(categoryIds);
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setDialogOpen(true);
  };

  const handleSave = async (data) => {
    if (editingCategory) {
      await onUpdate(editingCategory.id, data);
    } else {
      await onCreate(data);
    }
    setDialogOpen(false);
    setEditingCategory(null);
  };

  const handleCancel = () => {
    setDialogOpen(false);
    setEditingCategory(null);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Categorias</CardTitle>
        <Button onClick={() => setDialogOpen(true)} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Nova Categoria
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : categories.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            Nenhuma categoria cadastrada. Clique em "Nova Categoria" para começar.
          </div>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={categories.map(c => c.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-2">
                {categories.map((category) => (
                  <StoreCategoryItem
                    key={category.id}
                    category={category}
                    onEdit={handleEdit}
                    onDelete={onDelete}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}
      </CardContent>

      <StoreCategoryDialog
        open={dialogOpen}
        category={editingCategory}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </Card>
  );
}
```

## 📄 src/features/admin/store/components/StoreCategoryDialog.jsx
```jsx
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function StoreCategoryDialog({ open, category, onSave, onCancel }) {
  const [name, setName] = React.useState('');
  const [slug, setSlug] = React.useState('');
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    if (open) {
      if (category) {
        setName(category.name);
        setSlug(category.slug);
      } else {
        setName('');
        setSlug('');
      }
      setErrors({});
    }
  }, [open, category]);

  // Auto-gera slug a partir do nome
  const handleNameChange = (value) => {
    setName(value);
    // Sempre gera slug automaticamente
    const generatedSlug = value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9]+/g, '-') // Substitui caracteres especiais por hífens
      .replace(/^-+|-+$/g, ''); // Remove hífens no início e fim
      
    setSlug(generatedSlug);
  };

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    if (!slug.trim()) {
      newErrors.slug = 'Slug é obrigatório';
    } else if (!/^[a-z0-9-]+$/.test(slug)) {
      newErrors.slug = 'Slug deve conter apenas letras minúsculas, números e hífens';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      onSave({ name: name.trim(), slug: slug.trim() });
    }
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onCancel()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {category ? 'Editar Categoria' : 'Nova Categoria'}
          </DialogTitle>
          <DialogDescription>
            {category
              ? 'Atualize as informações da categoria.'
              : 'Preencha as informações para criar uma nova categoria.'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => {handleNameChange(e.target.value)}}
              placeholder="Ex: Vestuário"
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">Slug (URL)</Label>
            <Input
              id="slug"
              value={slug}
              placeholder="Ex: colecao-de-verao-2026"
              className={`bg-muted ${errors.slug ? 'border-destructive' : ''}`}
            />
            {errors.slug && (
              <p className="text-sm text-destructive">{errors.slug}</p>
            )}
            <p className="text-xs text-muted-foreground">
              Gerado automaticamente a partir do nome
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>
            {category ? 'Salvar' : 'Criar'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

## 📄 src/features/admin/store/components/StoreCategoryTabs.jsx
```jsx
import React, { useState } from 'react';
import { Plus, X, Pencil, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableCategoryTab({ category, isSelected, onSelect, onEdit, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: category.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition: isDragging ? 'none' : transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full 
        transition-all cursor-grab active:cursor-grabbing
        ${isSelected
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }
      `}
    >
      <div className="touch-none">
        <GripVertical size={14} />
      </div>
      
      <button
        onClick={() => onSelect(category)}
        onPointerDown={(e) => e.stopPropagation()}
        className="text-sm font-semibold flex-1"
      >
        {category.name}
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onEdit(category);
        }}
        onPointerDown={(e) => e.stopPropagation()}
        className={`
          transition-colors
          ${isSelected
            ? 'text-white hover:text-blue-200'
            : 'text-gray-400 hover:text-blue-500'
          }
        `}
        title="Editar categoria"
      >
        <Pencil size={14} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(category);
        }}
        onPointerDown={(e) => e.stopPropagation()}
        className={`
          transition-colors
          ${isSelected
            ? 'text-white hover:text-red-200'
            : 'text-gray-400 hover:text-red-500'
          }
        `}
        title="Excluir categoria"
      >
        <X size={14} />
      </button>
    </div>
  );
}

export function StoreCategoryTabs({
  categories,
  selectedCategory,
  onSelectCategory,
  onAddCategory,
  onEditCategory,
  onDeleteCategory,
  onReorderCategories,
}) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDeleteClick = (category) => {
    setCategoryToDelete(category);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (categoryToDelete) {
      onDeleteCategory(categoryToDelete.id);
      setDeleteDialogOpen(false);
      setCategoryToDelete(null);
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = categories.findIndex((c) => c.id === active.id);
    const newIndex = categories.findIndex((c) => c.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;

    const newOrder = arrayMove(categories, oldIndex, newIndex);
    const categoryIds = newOrder.map((c) => c.id);
    onReorderCategories(categoryIds);
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={categories.map((c) => c.id)}
          strategy={horizontalListSortingStrategy}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <SortableCategoryTab
                key={category.id}
                category={category}
                isSelected={selectedCategory?.id === category.id}
                onSelect={onSelectCategory}
                onEdit={onEditCategory}
                onDelete={handleDeleteClick}
              />
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={onAddCategory}
              className="rounded-full px-4 py-2 border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950"
            >
              <Plus size={16} className="mr-1" />
              Adicionar Categoria
            </Button>
          </div>
        </SortableContext>
      </DndContext>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir categoria?</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir a categoria{' '}
              <strong>{categoryToDelete?.name}</strong>?
              <br />
              <br />
              <span className="text-red-600 font-semibold">
                Todos os produtos desta categoria também serão excluídos!
              </span>
              <br />
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
```

## 📄 src/features/admin/store/components/StoreProductDialog.jsx
```jsx
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, X, Loader2, Image as ImageIcon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { ScrollArea } from '@/components/ui/scroll-area';

export function StoreProductDialog({
  open,
  product,
  categories,
  onSave,
  onCancel,
  onManageVariations,
}) {
  const [formData, setFormData] = React.useState({
    name: '',
    slug: '',
    description: '',
    price: '',
    originalPrice: '',
    categoryId: '',
    manageStock: false,
    stockQuantity: 0,
    active: true,
    images: [],
  });
  const [imageUrl, setImageUrl] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      if (product) {
        setFormData({
          name: product.name,
          slug: product.slug,
          description: product.description,
          price: product.price.toString(),
          originalPrice: product.originalPrice ? product.originalPrice.toString() : '',
          categoryId: product.categoryId,
          manageStock: product.manageStock,
          stockQuantity: product.stockQuantity || 0,
          active: product.active,
          images: product.images || [],
        });
      } else {
        setFormData({
          name: '',
          slug: '',
          description: '',
          price: '',
          originalPrice: '',
          categoryId: categories.length > 0 ? categories[0].id : '',
          manageStock: false,
          stockQuantity: 0,
          active: true,
          images: [],
        });
      }
      setImageUrl('');
      setErrors({});
    }
  }, [open, product, categories]);

  const handleNameChange = (value) => {
    setFormData(prev => ({ ...prev, name: value }));
    // Auto-gera slug se for novo produto
    if (!product) {
      const generatedSlug = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setFormData(prev => ({ ...prev, slug: generatedSlug }));
    }
  };

  const handleAddImage = () => {
    if (imageUrl.trim()) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, imageUrl.trim()],
      }));
      setImageUrl('');
    }
  };

  const handleRemoveImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    if (!formData.slug.trim()) {
      newErrors.slug = 'Slug é obrigatório';
    } else if (!/^[a-z0-9-]+$/.test(formData.slug)) {
      newErrors.slug = 'Slug deve conter apenas letras minúsculas, números e hífens';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Descrição é obrigatória';
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Preço deve ser maior que zero';
    }
    if (formData.originalPrice && parseFloat(formData.originalPrice) <= parseFloat(formData.price)) {
      newErrors.originalPrice = 'Preço original deve ser maior que o preço atual';
    }
    if (!formData.categoryId) {
      newErrors.categoryId = 'Categoria é obrigatória';
    }
    if (formData.manageStock && formData.stockQuantity < 0) {
      newErrors.stockQuantity = 'Quantidade não pode ser negativa';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (validate()) {
      setSaving(true);
      try {
        const data = {
          name: formData.name.trim(),
          slug: formData.slug.trim(),
          description: formData.description.trim(),
          price: parseFloat(formData.price),
          originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
          categoryId: formData.categoryId,
          manageStock: formData.manageStock,
          stockQuantity: formData.manageStock ? parseInt(formData.stockQuantity) : 0,
          active: formData.active,
          images: formData.images,
        };
        await onSave(data);
      } finally {
        setSaving(false);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && !saving && onCancel()}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>
            {product ? 'Editar Produto' : 'Novo Produto'}
          </DialogTitle>
          <DialogDescription>
            {product
              ? 'Atualize as informações do produto.'
              : 'Preencha as informações para criar um novo produto.'}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-200px)] pr-4">
          <div className="space-y-4 py-4">
            {/* Nome e Slug */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="Ex: Camiseta CACO"
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL) *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value.toLowerCase() }))}
                  placeholder="Ex: camiseta-caco"
                  className={errors.slug ? 'border-destructive' : ''}
                />
                {errors.slug && (
                  <p className="text-sm text-destructive">{errors.slug}</p>
                )}
              </div>
            </div>

            {/* Descrição */}
            <div className="space-y-2">
              <Label htmlFor="description">Descrição *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Descreva o produto..."
                rows={4}
                className={errors.description ? 'border-destructive' : ''}
              />
              {errors.description && (
                <p className="text-sm text-destructive">{errors.description}</p>
              )}
            </div>

            {/* Preços e Categoria */}
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Preço (R$) *</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  placeholder="0.00"
                  className={errors.price ? 'border-destructive' : ''}
                />
                {errors.price && (
                  <p className="text-sm text-destructive">{errors.price}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="originalPrice">Preço Original (R$)</Label>
                <Input
                  id="originalPrice"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData(prev => ({ ...prev, originalPrice: e.target.value }))}
                  placeholder="0.00"
                  className={errors.originalPrice ? 'border-destructive' : ''}
                />
                {errors.originalPrice && (
                  <p className="text-sm text-destructive">{errors.originalPrice}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="categoryId">Categoria *</Label>
                <select
                  id="categoryId"
                  value={formData.categoryId}
                  onChange={(e) => setFormData(prev => ({ ...prev, categoryId: e.target.value }))}
                  className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.categoryId ? 'border-destructive' : ''}`}
                >
                  <option value="">Selecione...</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                {errors.categoryId && (
                  <p className="text-sm text-destructive">{errors.categoryId}</p>
                )}
              </div>
            </div>

            {/* Estoque */}
            <div className="space-y-3 border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="manageStock">Gerenciar Estoque</Label>
                  <p className="text-sm text-muted-foreground">
                    Controlar quantidade disponível
                  </p>
                </div>
                <Switch
                  id="manageStock"
                  checked={formData.manageStock}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, manageStock: checked }))}
                />
              </div>

              {formData.manageStock && (
                <div className="space-y-2">
                  <Label htmlFor="stockQuantity">Quantidade em Estoque</Label>
                  <Input
                    id="stockQuantity"
                    type="number"
                    min="0"
                    value={formData.stockQuantity}
                    onChange={(e) => setFormData(prev => ({ ...prev, stockQuantity: e.target.value }))}
                    className={errors.stockQuantity ? 'border-destructive' : ''}
                  />
                  {errors.stockQuantity && (
                    <p className="text-sm text-destructive">{errors.stockQuantity}</p>
                  )}
                </div>
              )}
            </div>

            {/* Status Ativo */}
            <div className="flex items-center justify-between border rounded-lg p-4">
              <div>
                <Label htmlFor="active">Produto Ativo</Label>
                <p className="text-sm text-muted-foreground">
                  Produto visível na loja
                </p>
              </div>
              <Switch
                id="active"
                checked={formData.active}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, active: checked }))}
              />
            </div>

            {/* Imagens */}
            <div className="space-y-3 border rounded-lg p-4">
              <Label>Imagens do Produto</Label>
              
              <div className="flex gap-2">
                <Input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Cole a URL da imagem"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddImage()}
                />
                <Button type="button" onClick={handleAddImage} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {formData.images.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {formData.images.map((img, index) => (
                    <div key={index} className="relative aspect-square border rounded-lg overflow-hidden group">
                      <img
                        src={img}
                        alt={`Produto ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                      {index === 0 && (
                        <div className="absolute bottom-1 left-1 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded">
                          Capa
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Variações (apenas para produtos existentes) */}
            {product && (
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <Label>Variações do Produto</Label>
                    <p className="text-sm text-muted-foreground">
                      {product.variations?.length || 0} variação(ões) cadastrada(s)
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => onManageVariations(product)}
                  >
                    Gerenciar Variações
                  </Button>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={onCancel} disabled={saving}>
            Cancelar
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Salvando...
              </>
            ) : (
              product ? 'Salvar' : 'Criar'
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

## 📄 src/features/admin/store/components/StoreProductItem.jsx
```jsx
import React from 'react';
import { Pencil, Trash2, Tag, DollarSign, Package, ImageIcon, Images } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { ConfirmDeleteDialog } from '../../components/ConfirmDeleteDialog';

export function StoreProductItem({ product, onEdit, onDelete, onManageVariations, onManageImages }) {
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);

  const handleDelete = async () => {
    const result = await onDelete(product.id);
    if (result.success) {
      setDeleteDialogOpen(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const coverImage = product.images && product.images.length > 0 
    ? product.images[0] 
    : null;

  return (
    <>
      <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-card">
        {/* Imagem do Produto */}
        <div className="aspect-square bg-muted relative">
          {coverImage ? (
            <img
              src={coverImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <ImageIcon className="h-10 w-10 text-muted-foreground/30" />
            </div>
          )}
          
          {/* Badges de Status */}
          <div className="absolute top-2 right-2 flex gap-1">
            {!product.active && (
              <Badge variant="secondary" className="bg-muted text-xs px-2 py-0.5">
                Inativo
              </Badge>
            )}
            {product.manageStock && product.stockQuantity === 0 && (
              <Badge variant="destructive" className="text-xs px-2 py-0.5">
                Sem estoque
              </Badge>
            )}
          </div>

          {/* Indicator de múltiplas imagens */}
          {product.images && product.images.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
              <Images className="h-3 w-3" />
              {product.images.length}
            </div>
          )}
        </div>

        {/* Informações do Produto */}
        <div className="p-3 space-y-2">
          <div>
            <h3 className="font-semibold text-sm line-clamp-1">
              {product.name}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {product.categoryName}
            </p>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-base">{formatPrice(product.price)}</span>
            <div className="flex items-center gap-2 text-muted-foreground">
              {product.manageStock && (
                <div className="flex items-center gap-1">
                  <Package className="h-3 w-3" />
                  <span>{product.stockQuantity}</span>
                </div>
              )}
              {product.variations && product.variations.length > 0 && (
                <div className="flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  <span>{product.variations.length}</span>
                </div>
              )}
            </div>
          </div>

          {/* Ações */}
          <div className="flex gap-1 pt-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit(product)}
              className="flex-1 h-7 text-xs"
              title="Editar produto"
            >
              <Pencil className="h-3 w-3" />
            </Button>
            {onManageImages && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onManageImages(product)}
                className="flex-1 h-7 text-xs"
                title="Gerenciar imagens"
              >
                <Images className="h-3 w-3" />
              </Button>
            )}
            {onManageVariations && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onManageVariations(product)}
                className="flex-1 h-7 text-xs"
                title="Gerenciar variações"
              >
                <Tag className="h-3 w-3" />
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDeleteDialogOpen(true)}
              className="text-destructive hover:text-destructive h-7 text-xs"
              title="Excluir produto"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

      <ConfirmDeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        title="Confirmar exclusão"
        description={`Tem certeza que deseja excluir o produto "${product.name}"? Esta ação não pode ser desfeita e todas as variações também serão removidas.`}
        onConfirm={handleDelete}
      />
    </>
  );
}
```

## 📄 src/features/admin/store/components/StoreProductsSection.jsx
```jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Loader2, Package } from 'lucide-react';
import { StoreProductItem } from './StoreProductItem';

export function StoreProductsSection({
  products,
  loading,
  onEdit,
  onDelete,
  onCreateNew,
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          Produtos
        </CardTitle>
        <Button onClick={onCreateNew} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Novo Produto
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="font-medium mb-2">Nenhum produto cadastrado</p>
            <p className="text-sm">Clique em "Novo Produto" para começar.</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <StoreProductItem
                key={product.id}
                product={product}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
```

## 📄 src/features/admin/store/components/StoreSection.jsx
```jsx
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StoreCategoryTabs } from './StoreCategoryTabs';
import { ProductList } from './ProductList';
import { CreateProductModal } from './CreateProductModal';
import { ProductVariationsModal } from './ProductVariationsModal';
import { ManageProductImagesModal } from './ManageProductImagesModal';
import { CreateCategoryModal } from '../../manual/components/CreateCategoryModal';

export function StoreSection({
  categories,
  selectedCategory,
  onSelectCategory,
  products,
  loading,
  loadingProducts,
  creating,
  onCreateCategory,
  onUpdateCategory,
  onDeleteCategory,
  onReorderCategories,
  onCreateProduct,
  onUpdateProduct,
  onDeleteProduct,
  onGetProductImages,
  onAddProductImage,
  onDeleteProductImage,
  onReorderProductImages,
  onCreateVariation,
  onUpdateVariation,
  onDeleteVariation,
}) {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [variationsDialogOpen, setVariationsDialogOpen] = useState(false);
  const [variationsProduct, setVariationsProduct] = useState(null);
  const [imagesModalOpen, setImagesModalOpen] = useState(false);
  const [imagesProduct, setImagesProduct] = useState(null);

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setCategoryModalOpen(true);
  };

  const handleCloseCategoryModal = () => {
    setCategoryModalOpen(false);
    setEditingCategory(null);
  };

  const handleSaveCategory = async (data) => {
    let result;
    if (editingCategory) {
      result = await onUpdateCategory(editingCategory.id, data);
    } else {
      result = await onCreateCategory(data);
    }
    if (result.success) {
      handleCloseCategoryModal();
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setProductModalOpen(false);
    setEditingProduct(null);
  };

  const handleSaveProduct = async (data, imageFiles, onProgress) => {
    let result;
    if (editingProduct) {
      result = await onUpdateProduct(editingProduct.id, data);
    } else {
      result = await onCreateProduct(data, imageFiles, onProgress);
    }
    if (result.success) {
      handleCloseProductModal();
    }
  };

  const handleManageVariations = (product) => {
    setVariationsProduct(product);
    setVariationsDialogOpen(true);
  };

  const handleCloseVariationsDialog = () => {
    setVariationsDialogOpen(false);
    setVariationsProduct(null);
  };

  const handleManageImages = (product) => {
    setImagesProduct(product);
    setImagesModalOpen(true);
  };

  const handleCloseImagesModal = () => {
    setImagesModalOpen(false);
    setImagesProduct(null);
  };

  // Filtra produtos da categoria selecionada
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.categoryId === selectedCategory.id)
    : [];

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Loja</CardTitle>
          <p className="text-xs md:text-sm text-muted-foreground">
            Gerencie as categorias e adicione produtos por categoria.
          </p>
        </CardHeader>
        <CardContent>
          <StoreCategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
            onAddCategory={() => setCategoryModalOpen(true)}
            onEditCategory={handleEditCategory}
            onDeleteCategory={onDeleteCategory}
            onReorderCategories={onReorderCategories}
          />

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
            </div>
          ) : (
            <ProductList
              products={filteredProducts}
              loading={loadingProducts}
              onAddProduct={() => setProductModalOpen(true)}
              onDeleteProduct={onDeleteProduct}
              onEditProduct={handleEditProduct}
              onManageVariations={handleManageVariations}
              onManageImages={handleManageImages}
              selectedCategory={selectedCategory}
            />
          )}
        </CardContent>
      </Card>

      <CreateCategoryModal
        open={categoryModalOpen}
        onClose={handleCloseCategoryModal}
        onSave={handleSaveCategory}
        loading={creating}
        category={editingCategory}
      />

      <CreateProductModal
        open={productModalOpen}
        onClose={handleCloseProductModal}
        onSave={handleSaveProduct}
        loading={creating}
        product={editingProduct}
        categoryId={selectedCategory?.id}
      />

      <ProductVariationsModal
        open={variationsDialogOpen}
        product={variationsProduct}
        variations={variationsProduct ? products.find(p => p.id === variationsProduct.id)?.variations || [] : []}
        onClose={handleCloseVariationsDialog}
        onCreateVariation={onCreateVariation}
        onUpdateVariation={onUpdateVariation}
        onDeleteVariation={onDeleteVariation}
        loading={creating}
      />

      <ManageProductImagesModal
        open={imagesModalOpen}
        onClose={handleCloseImagesModal}
        product={imagesProduct}
        onGetImages={onGetProductImages}
        onAddImage={onAddProductImage}
        onDeleteImage={onDeleteProductImage}
        onReorderImages={onReorderProductImages}
        loading={creating}
      />
    </>
  );
}
```

## 📄 src/features/admin/store/useAdminStoreCategoriesVM.js
```javascript
/**
 * ViewModel para gerenciamento de categorias da loja (Admin)
 */

import { useState, useEffect, useCallback } from 'react';
import { storeService } from '@/shared/services/storeService';

/**
 * @typedef {import('@/shared/types/dtos').StoreCategoryDTO} StoreCategoryDTO
 */

export function useAdminStoreCategoriesVM() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Carrega todas as categorias
   */
  const loadCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await storeService.getAllCategories();
      setCategories(data);
      // Seleciona a primeira categoria por padrão
      if (data.length > 0 && !selectedCategory) {
        setSelectedCategory(data[0]);
      }
      return { success: true };
    } catch (err) {
      console.error('Erro ao carregar categorias:', err);
      setError(err.message || 'Erro ao carregar categorias');
      return { success: false, error: err.message };
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory]);

  /**
   * Seleciona uma categoria
   * @param {StoreCategoryDTO} category
   */
  const selectCategory = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  /**
   * Cria uma nova categoria
   * @param {Object} data
   * @param {string} data.name
   * @param {string} data.slug
   */
  const createCategory = useCallback(async (data) => {
    try {
      setIsCreating(true);
      const newCategory = await storeService.createCategory(data);
      setCategories(prev => [...prev, newCategory]);
      // Seleciona a nova categoria
      setSelectedCategory(newCategory);
      return { success: true, data: newCategory };
    } catch (err) {
      console.error('Erro ao criar categoria:', err);
      return { success: false, error: err.message };
    } finally {
      setIsCreating(false);
    }
  }, []);

  /**
   * Atualiza uma categoria existente
   * @param {string} id
   * @param {Object} data
   * @param {string} data.name
   * @param {string} data.slug
   */
  const updateCategory = useCallback(async (id, data) => {
    try {
      const updatedCategory = await storeService.updateCategory(id, data);
      setCategories(prev =>
        prev.map(cat => (cat.id === id ? updatedCategory : cat))
      );
      return { success: true, data: updatedCategory };
    } catch (err) {
      console.error('Erro ao atualizar categoria:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Remove uma categoria
   * @param {string} id
   */
  const deleteCategory = useCallback(async (id) => {
    try {
      await storeService.deleteCategory(id);
      setCategories(prev => prev.filter(cat => cat.id !== id));
      // Se a categoria removida era a selecionada, seleciona a primeira
      if (selectedCategory?.id === id) {
        const remaining = categories.filter(cat => cat.id !== id);
        setSelectedCategory(remaining.length > 0 ? remaining[0] : null);
      }
      return { success: true };
    } catch (err) {
      console.error('Erro ao remover categoria:', err);
      return { success: false, error: err.message };
    }
  }, [selectedCategory, categories]);

  /**
   * Reordena as categorias
   * @param {string[]} categoryIds - Array de IDs na nova ordem
   */
  const reorderCategories = useCallback(async (categoryIds) => {
    // Reordena localmente primeiro (otimista)
    const reordered = categoryIds.map((id, index) => {
      const cat = categories.find(c => c.id === id);
      return { ...cat, order: index };
    });
    const previousCategories = categories;
    setCategories(reordered);
    
    try {
      await storeService.reorderCategories(categoryIds);
      return { success: true };
    } catch (err) {
      console.error('Erro ao reordenar categorias:', err);
      // Reverte em caso de erro
      setCategories(previousCategories);
      return { success: false, error: err.message };
    }
  }, [categories]);

  // Carrega categorias ao montar
  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return {
    categories,
    selectedCategory,
    isLoading,
    isCreating,
    error,
    loadCategories,
    selectCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    reorderCategories,
  };
}
```

## 📄 src/features/admin/store/useAdminStoreProductsVM.js
```javascript
/**
 * ViewModel para gerenciamento de produtos da loja (Admin)
 */

import { useState, useEffect, useCallback } from 'react';
import { storeService } from '@/shared/services/storeService';

/**
 * @typedef {import('@/shared/types/dtos').ProductDetailAdminDTO} ProductDetailAdminDTO
 * @typedef {import('@/shared/types/dtos').ProductVariationDTO} ProductVariationDTO
 */

export function useAdminStoreProductsVM() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Carrega todos os produtos
   */
  const loadProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await storeService.getAllProducts();
      setProducts(data);
      return { success: true };
    } catch (err) {
      console.error('Erro ao carregar produtos:', err);
      setError(err.message || 'Erro ao carregar produtos');
      return { success: false, error: err.message };
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Busca um produto específico por ID
   * @param {string} id
   */
  const getProductById = useCallback(async (id) => {
    try {
      const product = await storeService.getProductById(id);
      return { success: true, data: product };
    } catch (err) {
      console.error('Erro ao buscar produto:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Cria um novo produto (sem imagens - adicione as imagens posteriormente)
   * @param {Object} data - Dados do produto
   */
  const createProduct = useCallback(async (data) => {
    try {
      setIsCreating(true);
      
      // Cria o produto sem imagens
      const newProduct = await storeService.createProduct(data);
      
      setProducts(prev => [...prev, newProduct]);
      return { success: true, data: newProduct };
    } catch (err) {
      console.error('Erro ao criar produto:', err);
      return { success: false, error: err.message };
    } finally {
      setIsCreating(false);
    }
  }, []);

  /**
   * Atualiza um produto existente
   * @param {string} id
   * @param {Object} data - Dados atualizados do produto
   */
  const updateProduct = useCallback(async (id, data) => {
    try {
      setIsCreating(true);
      const updatedProduct = await storeService.updateProduct(id, data);
      setProducts(prev =>
        prev.map(product => (product.id === id ? updatedProduct : product))
      );
      return { success: true, data: updatedProduct };
    } catch (err) {
      console.error('Erro ao atualizar produto:', err);
      return { success: false, error: err.message };
    } finally {
      setIsCreating(false);
    }
  }, []);

  /**
   * Remove um produto
   * @param {string} id
   */
  const deleteProduct = useCallback(async (id) => {
    try {
      await storeService.deleteProduct(id);
      setProducts(prev => prev.filter(product => product.id !== id));
      return { success: true };
    } catch (err) {
      console.error('Erro ao remover produto:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Adiciona uma variação a um produto
   * @param {string} productId
   * @param {Object} data - Dados da variação
   */
  const createVariation = useCallback(async (productId, data) => {
    try {
      const newVariation = await storeService.createVariation(productId, data);
      // Atualiza o produto localmente adicionando a variação
      setProducts(prev =>
        prev.map(product =>
          product.id === productId
            ? { ...product, variations: [...product.variations, newVariation] }
            : product
        )
      );
      return { success: true, data: newVariation };
    } catch (err) {
      console.error('Erro ao criar variação:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Atualiza uma variação
   * @param {string} productId - ID do produto para atualizar localmente
   * @param {string} variationId - ID da variação
   * @param {Object} data - Dados atualizados da variação
   */
  const updateVariation = useCallback(async (productId, variationId, data) => {
    try {
      const updatedVariation = await storeService.updateVariation(variationId, data);
      // Atualiza o produto localmente
      setProducts(prev =>
        prev.map(product =>
          product.id === productId
            ? {
                ...product,
                variations: product.variations.map(v =>
                  v.id === variationId ? updatedVariation : v
                ),
              }
            : product
        )
      );
      return { success: true, data: updatedVariation };
    } catch (err) {
      console.error('Erro ao atualizar variação:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Remove uma variação
   * @param {string} productId - ID do produto para atualizar localmente
   * @param {string} variationId - ID da variação
   */
  const deleteVariation = useCallback(async (productId, variationId) => {
    try {
      await storeService.deleteVariation(variationId);
      // Atualiza o produto localmente removendo a variação
      setProducts(prev =>
        prev.map(product =>
          product.id === productId
            ? {
                ...product,
                variations: product.variations.filter(v => v.id !== variationId),
              }
            : product
        )
      );
      return { success: true };
    } catch (err) {
      console.error('Erro ao remover variação:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Adiciona uma imagem a um produto existente
   * @param {string} productId
   * @param {File} imageFile
   */
  const addProductImage = useCallback(async (productId, imageFile) => {
    try {
      const image = await storeService.addProductImage(productId, imageFile);
      // Recarrega o produto para atualizar as imagens
      const updatedProduct = await storeService.getProductById(productId);
      setProducts(prev => prev.map(p => p.id === productId ? updatedProduct : p));
      return { success: true, data: image };
    } catch (err) {
      console.error('Erro ao adicionar imagem:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Busca todas as imagens de um produto
   * @param {string} productId
   */
  const getProductImages = useCallback(async (productId) => {
    try {
      const images = await storeService.getProductImages(productId);
      return { success: true, data: images };
    } catch (err) {
      console.error('Erro ao buscar imagens:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Remove uma imagem de um produto
   * @param {string} productId
   * @param {string} imageId
   * @param {string} imageUrl - URL da imagem a ser removida
   */
  const deleteProductImage = useCallback(async (productId, imageId, imageUrl) => {
    try {
      await storeService.deleteProductImage(imageId);
      
      // Atualiza o produto localmente removendo a imagem
      if (imageUrl) {
        setProducts(prev =>
          prev.map(product =>
            product.id === productId
              ? { ...product, images: product.images.filter(img => img !== imageUrl) }
              : product
          )
        );
      }
      
      return { success: true };
    } catch (err) {
      console.error('Erro ao remover imagem:', err);
      return { success: false, error: err.message };
    }
  }, []);

  /**
   * Reordena as imagens de um produto
   * @param {string} productId
   * @param {string[]} imageIds
   * @param {Array<{id: string, url: string, order: number}>} newImagesOrder - Array das imagens na nova ordem
   */
  const reorderProductImages = useCallback(async (productId, imageIds, newImagesOrder) => {
    try {
      await storeService.reorderProductImages(productId, imageIds);
      
      // Atualiza o produto localmente com a nova ordem das imagens
      if (newImagesOrder) {
        const imageUrls = newImagesOrder.map(img => img.url);
        setProducts(prev =>
          prev.map(product =>
            product.id === productId
              ? { ...product, images: imageUrls }
              : product
          )
        );
      }
      
      return { success: true };
    } catch (err) {
      console.error('Erro ao reordenar imagens:', err);
      return { success: false, error: err.message };
    }
  }, []);

  // Carrega produtos ao montar
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return {
    products,
    isLoading,
    isCreating,
    error,
    loadProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductImages,
    addProductImage,
    deleteProductImage,
    reorderProductImages,
    createVariation,
    updateVariation,
    deleteVariation,
  };
}
```

## 📄 src/features/auth/CallbackPage.jsx
```jsx
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { authService } from '@/shared/services/authService';
import { useToast } from '@/components/ui/use-toast.jsx';

export function CallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    const processCallback = async () => {
      try {
        const token = searchParams.get('token');
        const expiresIn = searchParams.get('expiresIn');

        console.log('[CallbackPage] Token recebido:', token ? 'SIM' : 'NÃO');
        console.log('[CallbackPage] expiresIn raw:', expiresIn);

        if (!token) {
          throw new Error('Token não recebido');
        }

        // Converte expiresIn para número (milissegundos)
        const expiresInMs = expiresIn ? parseInt(expiresIn, 10) : undefined;
        console.log('[CallbackPage] expiresInMs convertido:', expiresInMs);
        if (expiresInMs) {
          const hours = expiresInMs / (1000 * 60 * 60);
          console.log('[CallbackPage] Tempo de expiração em horas:', hours.toFixed(2));
        }

        // Processa o login com o token recebido
        await authService.loginWithToken(token, expiresInMs);

        toast({
          title: 'Login realizado com sucesso!',
          description: 'Bem-vindo de volta ao CACo!',
        });

        // Redireciona para a página de origem (se houver no sessionStorage) ou para a home
        const redirectTo = sessionStorage.getItem('caco_login_redirect') || location.state?.from || '/';
        sessionStorage.removeItem('caco_login_redirect'); // Limpar após uso
        navigate(redirectTo, { replace: true });
      } catch (error) {
        console.error('Erro no callback OAuth:', error);
        toast({
          variant: 'destructive',
          title: 'Erro na autenticação',
          description: error.message || 'Não foi possível completar o login.',
        });

        // Redireciona para login com erro
        navigate('/login?error=server_error', { replace: true });
      } finally {
        setProcessing(false);
      }
    };

    processCallback();
  }, [searchParams, navigate, toast]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        {processing ? (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
            <p className="text-lg font-medium">Processando autenticação...</p>
            <p className="text-sm text-muted-foreground mt-2">Aguarde um momento</p>
          </>
        ) : (
          <p className="text-lg font-medium">Redirecionando...</p>
        )}
      </div>
    </div>
  );
}
```

## 📄 src/features/auth/LoginPage.jsx
```jsx
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { authService } from '@/shared/services/authService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, X } from 'lucide-react';

export function LoginPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Verifica se há erro na URL
    const error = searchParams.get('error');
    if (error) {
      const errorMessages = {
        'access_denied': {
          title: 'Acesso negado',
          description: 'Você cancelou o login com o Google. Tente novamente quando estiver pronto.',
        },
        'invalid_account': {
          title: 'Conta inválida',
          description: 'A conta selecionada não é válida. Use uma conta institucional que termine com @dac.unicamp.br',
        },
        'invalid_domain': {
          title: 'E-mail não autorizado',
          description: 'Apenas contas @dac.unicamp.br são permitidas para fazer login.',
        },
        'server_error': {
          title: 'Erro no servidor',
          description: 'Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.',
        },
        'authentication_failed': {
          title: 'Autenticação falhou',
          description: 'Não foi possível completar a autenticação. Verifique sua conexão e tente novamente.',
        },
        'token_expired': {
          title: 'Sessão expirada',
          description: 'Sua sessão expirou durante o processo de login. Por favor, tente novamente.',
        },
      };
      
      setErrorMessage(errorMessages[error] || {
        title: 'Erro desconhecido',
        description: 'Ocorreu um erro durante o login. Código: ' + error,
      });
    }
  }, [searchParams]);

  const handleGoogleLogin = () => {
    // Limpa o erro ao tentar novamente
    setErrorMessage(null);
    
    // Salvar a página de origem no sessionStorage (se houver)
    if (location.state?.from) {
      sessionStorage.setItem('caco_login_redirect', location.state.from);
    }
    
    // Redireciona para o endpoint OAuth do backend
    authService.redirectToGoogleLogin();
  };

  const handleCloseError = () => {
    setErrorMessage(null);
    // Remove o parâmetro error da URL
    searchParams.delete('error');
    setSearchParams(searchParams);
  };

  return (
    <div className="container mx-auto px-4 py-6 md:py-16">
      {/* Alerta de Erro Persistente */}
      {errorMessage && (
        <div className="max-w-6xl mx-auto mb-4 md:mb-6">
          <Alert variant="destructive" className="relative pr-12">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{errorMessage.title}</AlertTitle>
            <AlertDescription>{errorMessage.description}</AlertDescription>
            <button
              onClick={handleCloseError}
              className="absolute right-3 top-3 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none"
              aria-label="Fechar alerta"
            >
              <X className="h-4 w-4" />
            </button>
          </Alert>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
        {/* Área de Arte */}
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-dashed border-primary/30">
            <div className="text-center text-muted-foreground">
              <p className="text-lg font-medium">Arte decorativa</p>
              <p className="text-sm mt-2">Espaço reservado para ilustração</p>
            </div>
          </div>
        </div>

        {/* Card de Login */}
        <div className="flex items-center justify-center order-1 md:order-2">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Login</CardTitle>
              <p className="text-center text-muted-foreground text-sm mt-2">
                Entre com sua conta Google
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Aviso sobre conta DAC */}
              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">
                  ⚠️ Atenção: Use sua conta institucional
                </p>
                <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                  A conta Google deve terminar com <span className="font-mono font-bold">@dac.unicamp.br</span>
                </p>
              </div>

              {/* Botão Google OAuth */}
              <Button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
                variant="outline"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continuar com Google
              </Button>

              <div className="text-center text-xs text-muted-foreground mt-4">
                Ao fazer login, você concorda com nossos termos de uso e política de privacidade.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
```

## 📄 src/features/calendar/CalendarPage.jsx
```jsx
import { useCalendarVM } from './useCalendarVM';
import { CalendarHeader } from './components/CalendarHeader';
import { MonthGrid } from './components/MonthGrid';
import { MobileCalendarView } from './components/MobileCalendarView';
import { EventPreviewModal } from './components/EventPreviewModal';

export function CalendarPage() {
  const {
    currentDate,
    events,
    loading,
    error,
    selectedEvent,
    changeMonth,
    openEventModal,
    closeEventModal,
  } = useCalendarVM();

  if (loading && events.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
          <p className="text-sm text-muted-foreground">Carregando eventos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Calendário</h1>
        <p className="text-muted-foreground">
          Confira as datas importantes e atividades do CACO
        </p>
      </div>
        
      <CalendarHeader currentDate={currentDate} onChangeMonth={changeMonth} />

      <div className="space-y-8">
        {/* Desktop View: Traditional Calendar Grid */}
        <div className="hidden lg:block">
          <MonthGrid
            currentDate={currentDate}
            events={events}
            onEventClick={openEventModal}
          />
        </div>

        {/* Mobile/Tablet View: Agenda List */}
        <div className="lg:hidden">
          <MobileCalendarView
            currentDate={currentDate}
            events={events}
          />
        </div>
      </div>

      <EventPreviewModal
        event={selectedEvent}
        open={!!selectedEvent}
        onClose={closeEventModal}
      />
    </div>
  );
}
```

## 📄 src/features/calendar/components/CalendarDay.jsx
```jsx
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Clock, ChevronDown } from 'lucide-react';

export function CalendarDay({ date, events, isToday, onEventClick, topSpacerHeight = 0 }) {
  const scrollRef = useRef(null);
  const [showIndicator, setShowIndicator] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const hasContentBelow = scrollHeight > clientHeight + scrollTop + 5;
      setShowIndicator(hasContentBelow);
    }
  };

  useEffect(() => {
    checkScroll();
  }, [events]);

  if (!date) {
    return <div className="min-h-[160px] bg-muted/10 border-r border-b last:border-r-0" />;
  }

  // Prioritize events: Happening -> With Image -> Others
  const sortedEvents = [...events].sort((a, b) => {
    if (a.status === 'HAPPENING' && b.status !== 'HAPPENING') return -1;
    if (b.status === 'HAPPENING' && a.status !== 'HAPPENING') return 1;
    if (a.coverImage && !b.coverImage) return -1;
    if (!a.coverImage && b.coverImage) return 1;
    return new Date(a.startDate) - new Date(b.startDate);
  });

  const getEventStyle = (event) => {
    if (event.status === 'HAPPENING') {
        return 'bg-green-600 hover:bg-green-700 text-white shadow-md animate-pulse border-green-700';
    }
    if (event.status === 'ENDED') {
        return 'bg-muted text-muted-foreground hover:bg-muted/80 line-through opacity-70';
    }
    if (event.coverImage) {
        return 'bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm border-primary/20';
    }
    
    switch (event.type) {
      case 'ONLINE':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800';
      case 'HYBRID':
        return 'bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800';
      default: 
        return 'bg-primary/10 text-primary hover:bg-primary/20 border-primary/20';
    }
  };

  const formatTimeRange = (startDate, endDate) => {
    const start = new Date(startDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    if (!endDate) return start;
    const end = new Date(endDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    return `${start} - ${end}`;
  };

  return (
    <div
      className={cn(
        'h-[180px] border-r border-b last:border-r-0 p-1.5 hover:bg-muted/5 transition-colors relative group flex flex-col gap-1',
        isToday && 'bg-accent/5 ring-2 ring-primary ring-inset z-10'
      )}
    >
      {/* Header do Dia */}
      <div className="flex justify-between items-start mb-1 h-8 shrink-0">
        <span
          className={cn(
            'text-[15px] font-medium w-8 h-8 flex items-center justify-center rounded-full transition-all',
            isToday 
              ? 'bg-primary text-primary-foreground font-bold shadow-sm scale-110' 
              : 'text-muted-foreground group-hover:bg-muted group-hover:text-foreground'
          )}
        >
          {date}
        </span>
        
        {events.length > 0 && <span className="text-xs text-muted-foreground font-medium pt-1 pr-1">{events.length}</span>}
      </div>

      {/* Lista de eventos scrollable */}
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex flex-col gap-1.5 flex-1 overflow-y-auto pr-1 customize-scrollbar pb-1"
      >
        {topSpacerHeight > 0 && (
          <div style={{ height: topSpacerHeight }} className="w-full shrink-0 transition-all duration-300 pointer-events-none" />
        )}

        {sortedEvents.map((event) => {
          const hasImage = !!event.coverImage;
          
          return (
            <button
              key={event.id}
              onClick={(e) => { e.stopPropagation(); onEventClick(event); }}
              className={cn(
                'w-full text-left rounded-md transition-all group/event relative overflow-hidden shrink-0',
                hasImage ? 'h-[72px] p-0 border-0' : 'px-2.5 py-2 text-xs border border-transparent',
                getEventStyle(event)
              )}
              title={event.title}
            >
              {hasImage ? (
                <>
                  <div className="absolute inset-0">
                    <img 
                      src={event.coverImage} 
                      alt="" 
                      className="w-full h-full object-cover opacity-90 group-hover/event:opacity-100 group-hover/event:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white flex flex-col justify-end h-full">
                     <div className="text-sm font-bold leading-tight line-clamp-2 shadow-sm mb-0.5">{event.title}</div>
                     <div className="text-xs opacity-90 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatTimeRange(event.startDate, event.endDate)}
                     </div>
                  </div>
                  
                  {event.status === 'HAPPENING' && (
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-green-500 rounded-full border border-white animate-pulse" />
                  )}
                </>
              ) : (
                <div className="flex flex-col gap-0.5">
                   <div className="flex items-center gap-1.5">
                        {event.status === 'HAPPENING' && (
                                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 animate-ping" />
                        )}
                        <span className="truncate font-medium leading-tight text-[13px]">{event.title}</span>
                   </div>
                   <div className="text-[11px] opacity-80 flex items-center gap-1">
                        {formatTimeRange(event.startDate, event.endDate)}
                   </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {showIndicator && (
         <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card via-card/95 to-transparent pointer-events-none flex items-end justify-center rounded-b-sm z-20 pb-1 duration-300 animate-in fade-in">
            <ChevronDown className="w-5 h-5 text-primary drop-shadow-sm animate-bounce" />
         </div>
      )}
    </div>
  );
}
```

## 📄 src/features/calendar/components/CalendarHeader.jsx
```jsx
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

export function CalendarHeader({ currentDate, onChangeMonth }) {
  const handleTodayClick = () => {
    onChangeMonth(0, new Date());
  };

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-3 items-center gap-4 mb-6 w-full">
      <div className="hidden sm:block"></div>
      
      <h2 className="text-2xl sm:text-3xl font-bold capitalize text-nowrap text-center order-1 sm:order-none">
        {MONTHS[currentDate.getMonth()]} <span className="text-muted-foreground ml-1">{currentDate.getFullYear()}</span>
      </h2>
      
      <div className="flex items-center justify-center sm:justify-end gap-2 w-full order-2 sm:order-none">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onChangeMonth(-1)}
          title="Mês anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="px-6"
          onClick={handleTodayClick}
          title="Ir para o mês atual"
        >
          Hoje
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onChangeMonth(1)}
          title="Próximo mês"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
```

## 📄 src/features/calendar/components/CalendarPageWithFilters.jsx
```jsx
import { useState } from 'react';
import { useCalendarVM } from '../useCalendarVM';
import { useEventFilters } from '../hooks/useEventFilters';
import { CalendarHeader } from './CalendarHeader';
import { MonthGrid } from './MonthGrid';
import { MinorEventModal } from './MinorEventModal';
import { EventCard } from './EventCard';
import { EventFilters } from './EventFilters';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Calendar, List, Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function CalendarPageWithFilters() {
  const {
    currentDate,
    events,
    loading,
    error,
    selectedEvent,
    changeMonth,
    openEventModal,
    closeEventModal,
  } = useCalendarVM();

  const {
    filters,
    setFilters,
    filteredEvents,
    clearFilters,
    setSearchTerm,
    hasActiveFilters,
  } = useEventFilters(events);

  const [viewMode, setViewMode] = useState('calendar');
  const [showFilters, setShowFilters] = useState(false);

  if (loading && events.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  // Filtra eventos futuros para a view de lista
  const upcomingEvents = filteredEvents
    .filter(event => new Date(event.startDate) >= new Date())
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Calendário de Eventos</h1>
        <p className="text-muted-foreground">
          Acompanhe todos os eventos do CACO
        </p>
      </div>

      {/* Barra de Busca e Filtros */}
      <div className="mb-6 flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar eventos..."
            value={filters.searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <Sheet open={showFilters} onOpenChange={setShowFilters}>
          <SheetTrigger asChild>
            <Button variant="outline" className="shrink-0">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filtros
              {hasActiveFilters && (
                <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  !
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filtros de Eventos</SheetTitle>
              <SheetDescription>
                Filtre os eventos por tipo, importância ou status
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">
              <EventFilters
                filters={filters}
                onFilterChange={setFilters}
                onClearFilters={clearFilters}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Contador de Resultados */}
      {hasActiveFilters && (
        <Card className="mb-6 p-4">
          <p className="text-sm text-muted-foreground">
            {filteredEvents.length} evento{filteredEvents.length !== 1 ? 's' : ''} encontrado
            {filteredEvents.length !== 1 ? 's' : ''}
            {filters.searchTerm && ` para "${filters.searchTerm}"`}
          </p>
        </Card>
      )}

      <Tabs value={viewMode} onValueChange={setViewMode} className="space-y-6">
        <TabsList>
          <TabsTrigger value="calendar" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Calendário
          </TabsTrigger>
          <TabsTrigger value="list" className="flex items-center gap-2">
            <List className="h-4 w-4" />
            Lista
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calendar" className="space-y-6">
          <CalendarHeader currentDate={currentDate} onChangeMonth={changeMonth} />
          <MonthGrid
            currentDate={currentDate}
            events={filteredEvents}
            onEventClick={openEventModal}
          />
        </TabsContent>

        <TabsContent value="list" className="space-y-6">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Próximos Eventos</h2>
            <p className="text-sm text-muted-foreground">
              {upcomingEvents.length} evento{upcomingEvents.length !== 1 ? 's' : ''} programado{upcomingEvents.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          {upcomingEvents.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                {hasActiveFilters 
                  ? 'Nenhum evento encontrado com os filtros aplicados'
                  : 'Nenhum evento programado no momento'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      <MinorEventModal
        event={selectedEvent}
        open={!!selectedEvent}
        onClose={closeEventModal}
      />
    </div>
  );
}
```

## 📄 src/features/calendar/components/EventCard.jsx
```jsx
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Video, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export function EventCard({ event, className }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case 'HAPPENING':
        return { label: 'Acontecendo Agora', color: 'bg-green-500 animate-pulse text-white' };
      case 'ENDED':
        return { label: 'Encerrado', color: 'bg-muted text-muted-foreground' };
      default:
        return null; 
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'ONLINE':
        return <Globe className="h-3 w-3" />;
      case 'HYBRID':
        return <Video className="h-3 w-3" />;
      default:
        return <MapPin className="h-3 w-3" />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'ONLINE': return 'Online';
      case 'IN_PERSON': return 'Presencial';
      case 'HYBRID': return 'Híbrido';
      default: return type;
    }
  };

  const statusConfig = getStatusConfig(event.status);

  return (
    <Link to={`/eventos/${event.slug}`}>
      <Card className={cn("overflow-hidden hover:shadow-lg transition-all duration-300 h-full group", className)}>
        {event.coverImage && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={event.coverImage}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-2 right-2 flex gap-2">
               {statusConfig && (
                <Badge className={cn("text-xs font-medium border-0 shadow-sm", statusConfig.color)}>
                  {statusConfig.label}
                </Badge>
              )}
            </div>
          </div>
        )}
        
        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-2 mb-2">
                 <Badge variant="secondary" className="text-[10px] px-2 py-0 h-5 flex items-center gap-1 font-medium bg-secondary/50 text-secondary-foreground">
                    {getTypeIcon(event.type)}
                    {getTypeLabel(event.type)}
                 </Badge>
                 {!event.coverImage && statusConfig && (
                    <Badge className={cn("text-[10px] h-5 border-0", statusConfig.color)}>
                      {statusConfig.label}
                    </Badge>
                 )}
            </div>
            <h3 className="font-bold text-lg leading-tight line-clamp-2 text-foreground group-hover:text-primary transition-colors">
              {event.title}
            </h3>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0 text-primary/70" />
              <span>{formatDate(event.startDate)}</span>
            </div>
            
            {event.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary/70" />
                <span className="line-clamp-1">{event.location}</span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
```

## 📄 src/features/calendar/components/EventFilters.jsx
```jsx
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function EventFilters({ filters, onFilterChange, onClearFilters }) {
  const hasActiveFilters = filters.type || filters.importance || filters.status;

  const toggleFilter = (category, value) => {
    onFilterChange({
      ...filters,
      [category]: filters[category] === value ? null : value,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filtros</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="h-8 px-2 text-xs"
          >
            <X className="h-3 w-3 mr-1" />
            Limpar
          </Button>
        )}
      </div>

      {/* Tipo de Evento */}
      <div>
        <label className="text-sm font-medium mb-2 block">Tipo</label>
        <div className="flex flex-wrap gap-2">
          {['ONLINE', 'PRESENCIAL', 'HIBRIDO'].map((type) => (
            <Badge
              key={type}
              variant={filters.type === type ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => toggleFilter('type', type)}
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>

      {/* Importância */}
      <div>
        <label className="text-sm font-medium mb-2 block">Importância</label>
        <div className="flex flex-wrap gap-2">
          {['ALTA', 'MEDIA', 'BAIXA'].map((importance) => (
            <Badge
              key={importance}
              variant={filters.importance === importance ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => toggleFilter('importance', importance)}
            >
              {importance}
            </Badge>
          ))}
        </div>
      </div>

      {/* Status */}
      <div>
        <label className="text-sm font-medium mb-2 block">Status</label>
        <div className="flex flex-wrap gap-2">
          {['PUBLISHED', 'DRAFT'].map((status) => (
            <Badge
              key={status}
              variant={filters.status === status ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => toggleFilter('status', status)}
            >
              {status === 'PUBLISHED' ? 'Publicado' : 'Rascunho'}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
```

## 📄 src/features/calendar/components/EventPreviewModal.jsx
```jsx
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Clock, ExternalLink, Globe, Video } from 'lucide-react';
import { cn } from '@/lib/utils';

export function EventPreviewModal({ event, open, onClose }) {
  const navigate = useNavigate();

  if (!event) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleViewDetails = () => {
    navigate(`/eventos/${event.slug}`);
    onClose();
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'HAPPENING':
        return <Badge className="bg-green-600 animate-pulse border-0">Acontecendo Agora</Badge>;
      case 'ENDED':
        return <Badge variant="secondary">Encerrado</Badge>;
      default:
        return null;
    }
  };
  
  const getTypeLabel = (type) => {
    switch (type) {
      case 'ONLINE': return <span className="flex items-center gap-1"><Globe className="w-3 h-3"/> Online</span>;
      case 'IN_PERSON': return <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> Presencial</span>;
      case 'HYBRID': return <span className="flex items-center gap-1"><Video className="w-3 h-3"/> Híbrido</span>;
      default: return type.replace('_', ' ');
    }
  };

  const isMultiDay = () => {
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    return end > start;
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-0 overflow-hidden gap-0">
        {/* Imagem de capa */}
        {event.coverImage && (
          <div className="relative w-full h-56 overflow-hidden bg-muted">
            <img
              src={event.coverImage}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-4 right-4 flex gap-2">
                 {getStatusBadge(event.status)}
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
                 <div className="flex gap-2 mb-2">
                    <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-0">
                        {getTypeLabel(event.type)}
                    </Badge>
                 </div>
                 <h2 className="text-2xl font-bold leading-tight shadow-sm">
                    {event.title}
                 </h2>
            </div>
          </div>
        )}

        <div className="p-6 space-y-6">
            {!event.coverImage && (
                <div className="space-y-4">
                    <div className="flex gap-2 items-center">
                        <Badge variant="outline" className="gap-1">
                            {getTypeLabel(event.type)}
                        </Badge>
                        {getStatusBadge(event.status)}
                    </div>
                </div>
            )}
            
            {!event.coverImage && (
                 <DialogTitle className="text-2xl font-bold">{event.title}</DialogTitle>
            )}

            <div className="grid gap-4">
                 {/* Date & Time */}
                 <div className="flex items-start gap-3 text-sm">
                    <Calendar className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div className="space-y-1">
                        <div className="font-medium">
                            {formatDate(event.startDate)}
                            {isMultiDay() && ` - ${formatDate(event.endDate)}`}
                        </div>
                        <div className="text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {formatTime(event.startDate)}
                            {!isMultiDay() && ` - ${formatTime(event.endDate)}`}
                        </div>
                    </div>
                 </div>
                 
                 {/* Location */}
                 {event.location && (
                    <div className="flex items-start gap-3 text-sm">
                        <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                            <div className="font-medium">Localização</div>
                            <div className="text-muted-foreground">{event.location}</div>
                            {event.locationUrl && (
                                <a 
                                    href={event.locationUrl} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="text-primary hover:underline text-xs inline-flex items-center gap-1 mt-1"
                                >
                                    Ver no mapa <ExternalLink className="w-3 h-3" />
                                </a>
                            )}
                        </div>
                    </div>
                 )}
            </div>
            
            <DialogFooter className="gap-2 sm:gap-0 pt-2">
                <Button variant="outline" onClick={onClose}>Cancelar</Button>
                <Button onClick={handleViewDetails}>Ver Detalhes Completos</Button>
            </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

## 📄 src/features/calendar/components/MobileCalendarView.jsx
```jsx
import { EventCard } from './EventCard';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

/**
 * Mobile-friendly calendar view
 * Groups events by date in a list format
 */
export function MobileCalendarView({ currentDate, events }) {
  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  
  // Group events by date (group by start date for simplicity in this improved view, 
  // or keeping the logic of showing on every day specific, but usually users want to see when it starts)
  // The user complained about "gambiarra", duplicating events for every day they occur might be cluttered.
  // Standard agenda view: List events by start date. If it spans, the card shows the date range.
  
  // Let's change the grouping strategy to unique events sorted by start date, grouped by Day.
  // If an event is long running, it appears on the start day.
  
  const eventsByDate = {};
  
  sortedEvents.forEach(event => {
    const startDate = new Date(event.startDate);
    // Adjust logic if you want to show it on the current month view properly
    // even if it started last month.
    // The VM returns events for the specific month window.
    
    // Let's stick to "Start Date" grouping.
    const dateKey = startDate.toDateString();
    if (!eventsByDate[dateKey]) {
      eventsByDate[dateKey] = [];
    }
    eventsByDate[dateKey].push(event);
  });

  const sortedDates = Object.keys(eventsByDate).sort((a, b) => new Date(a) - new Date(b));
  
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Hoje';
    }
    if (date.toDateString() === tomorrow.toDateString()) {
      return 'Amanhã';
    }
    
    return date.toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  };
  
  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="bg-muted rounded-full p-6 mb-4">
            <Calendar className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-1">Sem eventos</h3>
        <p className="text-muted-foreground max-w-xs">
          Nenhum evento encontrado para este mês.
        </p>
      </div>
    );
  }
  
  return (
    <div className="space-y-8 pb-10">
      {sortedDates.map(dateStr => {
        const dateEvents = eventsByDate[dateStr];
        const date = new Date(dateStr);
        const isToday = date.toDateString() === new Date().toDateString();
        
        return (
          <div key={dateStr} className="space-y-4">
            {/* Date Header */}
            <div className="flex items-center gap-3">
               <div className={cn(
                  "flex flex-col items-center justify-center w-12 h-14 rounded-lg bg-card border shadow-sm shrink-0",
                  isToday && "bg-primary text-primary-foreground border-primary"
               )}>
                  <span className="text-xs font-medium uppercase opacity-80">
                      {date.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')}
                  </span>
                  <span className="text-xl font-bold">
                      {date.getDate()}
                  </span>
               </div>
               
               <div className="flex flex-col">
                  {isToday && (
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">Hoje</span>
                  )}
                  <h3 className="text-lg font-semibold capitalize leading-none">
                      {date.toLocaleDateString('pt-BR', { weekday: 'long' })}
                  </h3>
               </div>
            </div>
            
            {/* Events Grid for this date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 md:pl-16">
              {dateEvents.map(event => (
                <div key={event.id} className="w-full">
                    <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
```

## 📄 src/features/calendar/components/MonthGrid.jsx
```jsx
import { useNavigate } from 'react-router-dom';
import { CalendarDay } from './CalendarDay';
import { useMemo } from 'react';
import { cn } from '@/lib/utils';

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

/**
 * Normaliza data para comparar apenas dia/mês/ano
 */
function normalizeDate(dateStr) {
  const d = new Date(dateStr);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Verifica se dois dias são iguais (apenas data)
 */
function isSameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
}

/**
 * Gera as semanas para a visualização do mês
 */
function getWeeksForMonth(year, month) {
  const firstDayOfMonth = new Date(year, month, 1);
  const startingDayOfWeek = firstDayOfMonth.getDay();
  
  // Começar do Domingo anterior à data inicial se não for Domingo
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(1 - startingDayOfWeek);

  const weeks = [];
  const current = new Date(startDate);
  
  const lastDayOfMonth = new Date(year, month + 1, 0);
  
  // Condição: até passar do fim do mês E ser sábado (para fechar a semana)
  // Ou garantir minimo de semanas
  while (true) {
     const weekDays = [];
     for (let i = 0; i < 7; i++) {
        weekDays.push(new Date(current));
        current.setDate(current.getDate() + 1);
     }
     weeks.push({ id: weekDays[0].toISOString(), days: weekDays });

     // Se o primeiro dia da proxima semana já é outro mês (e maior que o ultimo dia do mes atual), paramos
     if (current > lastDayOfMonth) break;
  }
  
  return weeks;
}

export function MonthGrid({ currentDate, events, onEventClick }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const weeks = useMemo(() => getWeeksForMonth(year, month), [year, month]);
  const today = new Date();

  // Função para pegar eventos de um dia especifico
  const getEventsForDay = (date) => {
      // Normalizar target date
      const target = normalizeDate(date);
      const targetTime = target.getTime();

      return events.filter(e => {
          const start = normalizeDate(e.startDate);
          const end = normalizeDate(e.endDate);
          
          // Se é evento de um dia: start == target
          // Se é multi-day: target >= start AND target <= end
          return targetTime >= start.getTime() && targetTime <= end.getTime();
      });
  };

  return (
    <div className="border rounded-lg overflow-hidden bg-card shadow-sm">
      {/* Header com dias da semana */}
      <div className="grid grid-cols-7 bg-muted/30 border-b">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="p-3 text-center font-medium text-sm text-muted-foreground border-r last:border-r-0 uppercase tracking-wide"
          >
            <span className="hidden sm:inline">{day}</span>
            <span className="sm:hidden">{day.substring(0, 1)}</span>
          </div>
        ))}
      </div>
      
      {/* Grid de Semanas */}
      <div className="flex flex-col bg-card">
         {weeks.map((week) => (
             <div key={week.id} className="grid grid-cols-7 min-h-[160px]">
                 {week.days.map((date, dIndex) => {
                     const isCurrentMonth = date.getMonth() === month && date.getFullYear() === year;
                     const isTodayDate = isSameDay(date, today);
                     const daysEvents = getEventsForDay(date);

                     return (
                         <div key={dIndex} className={cn(!isCurrentMonth && "bg-muted/10 opacity-60")}>
                             <CalendarDay
                                 date={date.getDate()}
                                 events={daysEvents}
                                 isToday={isTodayDate}
                                 onEventClick={onEventClick}
                                 // Sem espaçadores complexos, apenas grid normal
                             />
                         </div>
                     );
                 })}
             </div>
         ))}
      </div>
    </div>
  );
}
```

## 📄 src/features/calendar/hooks/useEventFilters.js
```javascript
import { useState, useMemo } from 'react';

/**
 * Hook para gerenciar filtros de eventos
 */
export function useEventFilters(events) {
  const [filters, setFilters] = useState({
    type: null,
    importance: null,
    status: null,
    searchTerm: '',
  });

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      // Filtro por tipo
      if (filters.type && event.type !== filters.type) {
        return false;
      }

      // Filtro por importância
      if (filters.importance && event.importance !== filters.importance) {
        return false;
      }

      // Filtro por status
      if (filters.status && event.status !== filters.status) {
        return false;
      }

      // Filtro por termo de busca
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        const matchesTitle = event.title?.toLowerCase().includes(searchLower);
        const matchesDescription = event.description?.toLowerCase().includes(searchLower);
        const matchesLocation = event.location?.toLowerCase().includes(searchLower);
        
        if (!matchesTitle && !matchesDescription && !matchesLocation) {
          return false;
        }
      }

      return true;
    });
  }, [events, filters]);

  const clearFilters = () => {
    setFilters({
      type: null,
      importance: null,
      status: null,
      searchTerm: '',
    });
  };

  const setSearchTerm = (term) => {
    setFilters((prev) => ({ ...prev, searchTerm: term }));
  };

  return {
    filters,
    setFilters,
    filteredEvents,
    clearFilters,
    setSearchTerm,
    hasActiveFilters: filters.type || filters.importance || filters.status || filters.searchTerm,
  };
}
```

## 📄 src/features/calendar/useCalendarVM.js
```javascript
import { useState, useEffect } from 'react';
import { eventService } from '@/shared/services/eventService';
import { authService } from '@/shared/services/authService';

export function useCalendarVM() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [myParticipations, setMyParticipations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const isAuthenticated = authService.isAuthenticated();

  useEffect(() => {
    loadEvents();
    if (isAuthenticated) {
      loadMyParticipations();
    }
  }, [currentDate]); // Recarrega quando o mês muda

  const loadEvents = async () => {
    try {
      setLoading(true);
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // JavaScript months são 0-based
      
      const response = await eventService.getEventsByMonth({ year, month });
      const data = response.content || response || [];
      
      setEvents(data);
      setError(null);
    } catch (err) {
      setError(err.message || 'Erro ao carregar eventos');
    } finally {
      setLoading(false);
    }
  };

  const loadMyParticipations = async () => {
    try {
      const response = await eventService.getSavedEvents(0, 100);
      const data = response.content || response || [];
      setMyParticipations(data);
    } catch (err) {
      console.error('Erro ao carregar participações:', err);
    }
  };

  const changeMonth = (delta, specificDate = null) => {
    setCurrentDate((prev) => {
      if (specificDate) return specificDate;
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + delta);
      return newDate;
    });
  };

  const openEventModal = (event) => {
    setSelectedEvent(event);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
  };

  const isParticipating = (eventId) => {
    return myParticipations.some(event => event.id === eventId);
  };

  return {
    currentDate,
    events,
    loading,
    error,
    selectedEvent,
    isAuthenticated,
    myParticipations,
    changeMonth,
    openEventModal,
    closeEventModal,
    isParticipating,
    refreshEvents: loadEvents,
    refreshParticipations: loadMyParticipations,
  };
}
```

## 📄 src/features/events/EventPage.jsx
```jsx
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Share2, Globe, Video, Bookmark, Users, Check, X, Heart, ExternalLink } from 'lucide-react';
import { useEventVM } from './useEventVM';
import { EventGallery } from './components/EventGallery';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MarkdownContent } from '@/shared/components/MarkdownContent';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

export function EventPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { 
    event, 
    loading, 
    error, 
    isAuthenticated,
    isParticipating,
    participationLoading,
    handleParticipation 
  } = useEventVM();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
          <p className="text-sm text-muted-foreground">Carregando evento...</p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-2xl font-bold text-destructive mb-2">Evento não encontrado</h2>
          <p className="text-muted-foreground">
            {error || 'O evento que você procura não está disponível ou foi removido.'}
          </p>
        </div>
      </div>
    );
  }

  const handleParticipationSelect = async (status) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    try {
      await handleParticipation(status);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao salvar",
        description: "Não foi possível atualizar sua participação. Tente novamente."
      });
    }
  };

  const formatDate = (dateString, full = false) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('pt-BR', {
      weekday: full ? 'long' : undefined,
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'HAPPENING':
        return <Badge variant="default" className="bg-green-600 hover:bg-green-700 animate-pulse">Acontecendo Agora</Badge>;
      case 'UPCOMING':
        return <Badge variant="outline" className="border-blue-500 text-blue-500">Em Breve</Badge>;
      case 'ENDED':
        return <Badge variant="secondary">Encerrado</Badge>;
      default:
        return null;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'ONLINE': return <Globe className="w-4 h-4 mr-1" />;
      case 'HIBRIDO': return <Video className="w-4 h-4 mr-1" />;
      default: return <Users className="w-4 h-4 mr-1" />;
    }
  };

  const hasMultipleDays = event.endDate && new Date(event.startDate).toDateString() !== new Date(event.endDate).toDateString();
  const hasGallery = event.gallery && event.gallery.length > 0;

  return (
    <div className="min-h-screen pb-16 animate-in fade-in duration-500 container mx-auto px-4 py-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Coluna Principal: Conteúdo */}
        <div className="lg:col-span-8 space-y-8">

          {/* Capa */}
          {event.coverImage && (
            <div className="w-full aspect-video relative rounded-xl overflow-hidden bg-muted shadow-sm border">
              <img
                src={event.coverImage}
                alt={`Capa do evento ${event.title}`}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Cabeçalho do Evento */}
          <div className="bg-card rounded-xl p-6 shadow-sm border">
              <div className="flex flex-wrap gap-2 mb-3">
                {getStatusBadge(event.status)}
                <Badge variant="outline" className="capitalize flex items-center">
                  {getTypeIcon(event.type)}
                  {event.type?.toLowerCase() === 'presencial' ? 'Presencial' : event.type?.toLowerCase() || 'Evento'}
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 leading-tight">
                {event.title}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="capitalize">{formatDate(event.startDate, true)}</span>
                </div>
                {event.endDate && (
                  <>
                    <span className="hidden sm:inline text-muted-foreground/50">•</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>
                          {formatTime(event.startDate)}
                          {!hasMultipleDays && ` - ${formatTime(event.endDate)}`}
                      </span>
                    </div>
                  </>
                )}
              </div>
          </div>

          {/* Conteúdo em Abas */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-6">
              <TabsTrigger 
                value="about" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-2 font-semibold text-muted-foreground data-[state=active]:text-foreground transition-all"
              >
                Sobre o Evento
              </TabsTrigger>
              {hasGallery && (
                <TabsTrigger 
                  value="gallery" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-2 font-semibold text-muted-foreground data-[state=active]:text-foreground transition-all"
                >
                  Galeria de Fotos e Vídeos
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="about" className="pt-6 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="prose prose-lg dark:prose-invert max-w-none bg-transparent">
                <MarkdownContent content={event.description} />
              </div>
            </TabsContent>

            {hasGallery && (
              <TabsContent value="gallery" className="pt-6 animate-in fade-in slide-in-from-top-2 duration-300">
                <EventGallery images={event.gallery} />
              </TabsContent>
            )}
          </Tabs>

        </div>

        {/* Coluna Lateral: Informações Extras (Cards) */}
        <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              
              {/* Card de Ações Rápidas */}
              <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            size="lg"
                            className={cn(
                              "flex-1 gap-2 shadow-sm font-semibold transition-all",
                              isParticipating ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground"
                            )}
                            disabled={participationLoading}
                          >
                             <Bookmark className={cn("w-5 h-5", isParticipating ? "fill-current" : "")} />
                             {event.userParticipationStatus === 'GOING' ? 'Vou participar' : 
                              event.userParticipationStatus === 'INTERESTED' ? 'Tenho interesse' : 
                              event.userParticipationStatus === 'NOT_GOING' ? 'Não vou participar' : 'Quer participar?'}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                          <DropdownMenuItem 
                            onClick={() => handleParticipationSelect('GOING')}
                            className={cn(event.userParticipationStatus === 'GOING' && "bg-accent")}
                          >
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            <span>Vou participar</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleParticipationSelect('INTERESTED')}
                            className={cn(event.userParticipationStatus === 'INTERESTED' && "bg-accent")}
                          >
                            <Heart className={cn("mr-2 h-4 w-4 text-primary", event.userParticipationStatus === 'INTERESTED' ? "fill-current" : "")} />
                            <span>Tenho interesse</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleParticipationSelect('NOT_GOING')}
                            className={cn(event.userParticipationStatus === 'NOT_GOING' && "bg-accent")}
                          >
                            <X className="mr-2 h-4 w-4 text-destructive" />
                            <span>Não vou participar</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-11 w-11 shrink-0" 
                        onClick={() => {
                            if (navigator.share) {
                              navigator.share({
                                title: event.title,
                                text: event.description?.slice(0, 100),
                                url: window.location.href,
                              }).catch(() => {});
                            } else {
                              navigator.clipboard.writeText(window.location.href);
                              toast({
                                title: "Link copiado",
                                description: "O link do evento foi copiado para a área de transferência."
                              });
                            }
                        }}
                        title="Compartilhar"
                      >
                        <Share2 className="w-5 h-5" />
                      </Button>
                  </div>

                  <div className="px-1">
                     <p className="text-xs text-muted-foreground leading-relaxed">
                        Sua confirmação nos ajuda a estimar o público e preparar melhor o evento. 😁 <br />
                        Ao selecionar <strong>"Vou participar"</strong>, enviaremos lembretes por e-mail para você não perder nada!
                     </p>
                  </div>
              </div>

              <Card className="overflow-hidden border-muted shadow-sm">
                <CardHeader className="bg-muted/30 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      Detalhes
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                    
                    {/* Localização */}
                    {event.location ? (
                      <div className="space-y-3">
                          <div className="flex items-start gap-3">
                              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                                <MapPin className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm mb-1">Localização</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {event.location}
                                </p>
                              </div>
                          </div>

                          {(event.locationUrl) && (
                              <div className="rounded-lg overflow-hidden border bg-muted h-[200px] shadow-sm relative group w-full">
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    loading="lazy" 
                                    title="Mapa do evento"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src={event.locationUrl}
                                    className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                                />
                              </div>
                          )}
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Local</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                              Informação de local indisponível
                          </p>
                        </div>
                    </div>
                    )}

                    {/* Informações detalhadas de data se forem múltiplos dias */}
                    {hasMultipleDays && (
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                            <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm mb-1">Duração</h4>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p>Início: {formatDate(event.startDate)} às {formatTime(event.startDate)}</p>
                              <p>Fim: {formatDate(event.endDate)} às {formatTime(event.endDate)}</p>
                            </div>
                        </div>
                      </div>
                    )}

                </CardContent>
              </Card>
            </div>
        </div>

      </div>
    </div>
  );
}
```

## 📄 src/features/events/components/Countdown.jsx
```jsx
import { useState, useEffect } from 'react';
import { getTimeUntil } from '@/shared/utils/helpers';

export function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeUntil(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntil(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold mb-6">Faltam</h3>
      <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
        <TimeUnit value={timeLeft.days} label="Dias" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <TimeUnit value={timeLeft.seconds} label="Seg" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }) {
  return (
    <div className="bg-white/20 rounded-lg p-4">
      <div className="text-4xl font-bold mb-1">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
}
```

## 📄 src/features/events/components/EventGallery.jsx
```jsx
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function EventGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!images || images.length === 0) return null;

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((item, index) => (
          <button
            key={item.id}
            onClick={() => openLightbox(index)}
            className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity group"
          >
            <img
              src={item.mediaUrl}
              alt={`Galeria ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
          {selectedIndex !== null && (
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </Button>

              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrevious();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </>
              )}

              <img
                src={images[selectedIndex].mediaUrl}
                alt={`Galeria ${selectedIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
```

## 📄 src/features/events/components/EventInfo.jsx
```jsx
import { MapPin, Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate, formatTime } from '@/shared/utils/helpers';

export function EventInfo({ event }) {
  const getGoogleMapsUrl = (address) => {
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`;
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Informações do Evento</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-semibold">Data</div>
                <div className="text-muted-foreground">
                  {formatDate(event.start)}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-semibold">Horário</div>
                <div className="text-muted-foreground">
                  {formatTime(event.start)}
                  {event.end && ` - ${formatTime(event.end)}`}
                </div>
              </div>
            </div>

            {event.location && (
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <div className="font-semibold">Local</div>
                  <div className="text-muted-foreground mb-3">
                    {event.location}
                  </div>
                  {/* Google Maps iframe - Nota: você precisa de uma API key real */}
                  <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0 }}
                      src={getGoogleMapsUrl(event.location)}
                      allowFullScreen
                      title="Localização do evento"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {event.description && (
          <div>
            <h3 className="font-semibold mb-2">Descrição</h3>
            <p className="text-muted-foreground whitespace-pre-wrap">
              {event.description}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
```

## 📄 src/features/events/components/EventParticipationStats.jsx
```jsx
import { Users, Heart, CheckCircle2, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

/**
 * Componente para exibir estatísticas de participação
 * Usado quando o evento inclui participationStats (geralmente em contextos admin)
 */
export function EventParticipationStats({ stats }) {
  if (!stats) return null;

  const total = stats.totalParticipants || 0;
  const going = stats.goingCount || 0;
  const interested = stats.interestedCount || 0;
  const notGoing = stats.notGoingCount || 0;

  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Users className="h-4 w-4" />
        Estatísticas de Participação
      </h3>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            Total
          </span>
          <span className="font-semibold">{total}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="h-4 w-4" />
            Confirmados
          </span>
          <span className="font-semibold text-green-600">{going}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-blue-600">
            <Heart className="h-4 w-4" />
            Interessados
          </span>
          <span className="font-semibold text-blue-600">{interested}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-red-600">
            <X className="h-4 w-4" />
            Não Vão
          </span>
          <span className="font-semibold text-red-600">{notGoing}</span>
        </div>

        {/* Barra de progresso visual */}
        {total > 0 && (
          <div className="mt-3 pt-3 border-t">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden flex">
              {going > 0 && (
                <div 
                  className="bg-green-500 h-full"
                  style={{ width: `${(going / total) * 100}%` }}
                  title={`${going} confirmados`}
                />
              )}
              {interested > 0 && (
                <div 
                  className="bg-blue-500 h-full"
                  style={{ width: `${(interested / total) * 100}%` }}
                  title={`${interested} interessados`}
                />
              )}
              {notGoing > 0 && (
                <div 
                  className="bg-red-500 h-full"
                  style={{ width: `${(notGoing / total) * 100}%` }}
                  title={`${notGoing} não vão`}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
```

## 📄 src/features/events/components/GalleryGrid.jsx
```jsx
import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export function GalleryGrid({ media = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (media.length === 0) return null;

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Galeria</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(item)}
              className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={item.url}
                alt={item.caption || `Imagem ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.url}
                alt={selectedImage.caption || 'Imagem'}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              {selectedImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                  <p className="text-center">{selectedImage.caption}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
```

## 📄 src/features/events/useEventVM.js
```javascript
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { eventService } from '@/shared/services/eventService';
import { authService } from '@/shared/services/authService';
import { analyticsService } from '@/shared/services/analyticsService';

export function useEventVM() {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isParticipating, setIsParticipating] = useState(false);
  const [participationLoading, setParticipationLoading] = useState(false);

  const isAuthenticated = authService.isAuthenticated();

  useEffect(() => {
    loadEvent();
  }, [slug]);

  const loadEvent = async () => {
    try {
      setLoading(true);
      const data = await eventService.getEventBySlug(slug);
      setEvent(data);
      
      // Verifica se o usuário está participando através do userParticipationStatus
      if (isAuthenticated && data.userParticipationStatus) {
        setIsParticipating(true);
      } else {
        setIsParticipating(false);
      }
      
      analyticsService.track('VIEW_EVENT', { 
        eventId: data.id, 
        eventTitle: data.title,
        slug: slug
      });
      
      setError(null);
    } catch (err) {
      setError(err.message || 'Erro ao carregar evento');
    } finally {
      setLoading(false);
    }
  };

  const handleParticipation = async (status) => {
    if (!isAuthenticated) return;

    const previousStatus = event.userParticipationStatus;
    setParticipationLoading(true);

    try {
      if (previousStatus === status) {
        // Se clicar no mesmo status, remove a participação
        await eventService.removeParticipation(event.id);
        
        // Atualiza estado local
        setEvent(prev => ({
          ...prev,
          userParticipationStatus: null
        }));
        setIsParticipating(false);
        
        analyticsService.track('CANCEL_EVENT_PARTICIPATION', { 
          eventId: event.id, 
          eventTitle: event.title 
        });
      } else {
        // Se for novo ou diferente, salva/atualiza
        await eventService.saveParticipation(event.id, status);
        
        // Atualiza estado local
        setEvent(prev => ({
          ...prev,
          userParticipationStatus: status
        }));
        setIsParticipating(true);
        
        analyticsService.track('PARTICIPATE_EVENT', { 
          eventId: event.id, 
          eventTitle: event.title,
          status: status
        });
      }
    } catch (err) {
      console.error('Erro ao gerenciar participação:', err);
      // O estado visual não mudou antes do fetch, então não precisa reverter nada complexo,
      // mas poderíamos disparar um toast de erro aqui se tivéssemos acesso ao toast no VM.
      // Vamos retornar o erro para a View tratar
      throw err;
    } finally {
      setParticipationLoading(false);
    }
  };

  return {
    event,
    loading,
    error,
    isAuthenticated,
    isParticipating,
    participationLoading,
    handleParticipation,
    refreshEvent: loadEvent,
  };
}
```

## 📄 src/features/exams/ExamBankPage.jsx
```jsx
import { useExamBankVM } from './useExamBankVM';
import { ExamFilters } from './components/ExamFilters';
import { ExamCard } from './components/ExamCard';
import { FileQuestion, Plus } from 'lucide-react';

export function ExamBankPage() {
  const {
    subjects,
    exams,
    loading,
    error,
    selectedSubject,
    setSelectedSubject,
    selectedYear,
    setSelectedYear,
    selectedType,
    setSelectedType,
    availableYears,
    clearFilters,
    hasActiveFilters,
  } = useExamBankVM();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Banco de Provas</h1>
          <p className="text-muted-foreground">
            Acesse provas anteriores organizadas por disciplina, ano e tipo
          </p>
        </div>

      <ExamFilters
        subjects={subjects}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        availableYears={availableYears}
        clearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
      />

      {exams.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <FileQuestion size={64} className="text-gray-300 dark:text-gray-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Nenhuma prova encontrada
          </h3>
          <p className="text-gray-500 dark:text-gray-500 mb-4">
            {hasActiveFilters
              ? 'Tente ajustar os filtros para ver mais resultados'
              : 'Ainda não há provas cadastradas'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {exams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      )}

      {/* Link para adicionar prova */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
        <a
          href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
        >
          Quer adicionar uma prova? Clique aqui
        </a>
      </div>
      </div>
    </div>
  );
}
```

## 📄 src/features/exams/components/ExamCard.jsx
```jsx
import { FileText, ExternalLink, Calendar } from 'lucide-react';

export function ExamCard({ exam }) {
  const handleOpenLink = () => {
    if (exam.pdfUrl) {
      let url = exam.pdfUrl;
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Determina a cor do badge baseado no tipo
  const getBadgeColor = (type) => {
    const colors = {
      'P1': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      'P2': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      'P3': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
      'EXAME': 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
      'SUB': 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
      'OUTROS': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    };
    return colors[type] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <div
      className="group relative border rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer bg-white dark:bg-gray-800 dark:border-gray-700"
      onClick={handleOpenLink}
    >
      {/* Header colorido baseado no tipo */}
      <div className={`h-2 ${getBadgeColor(exam.type).split(' ')[0]}`} />
      
      <div className="p-5">
        {/* Cabeçalho com ícone e badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl group-hover:scale-110 transition-transform">
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${getBadgeColor(exam.type)}`}>
              {exam.typeLabel}
            </span>
          </div>
        </div>
        
        {/* Código da disciplina */}
        <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {exam.subjectCode}
        </h3>
        
        {/* Nome da disciplina (se disponível) */}
        {exam.subjectName && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {exam.subjectName}
          </p>
        )}
        
        {/* Ano */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <Calendar size={16} />
          <span className="font-medium">{exam.year}</span>
        </div>
        
        {/* Botão de ação */}
        <div className="flex items-center justify-between pt-3 border-t dark:border-gray-700">
          <span className="text-xs text-muted-foreground">Clique para visualizar</span>
          <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 font-semibold">
            <span>Abrir</span>
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-lg border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}
```

## 📄 src/features/exams/components/ExamFilters.jsx
```jsx
import { Button } from '@/components/ui/button';
import { X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const EXAM_TYPES = [
  { value: 'P1', label: 'P1', color: 'bg-blue-600' },
  { value: 'P2', label: 'P2', color: 'bg-green-600' },
  { value: 'P3', label: 'P3', color: 'bg-purple-600' },
  { value: 'EXAME', label: 'EXAME', color: 'bg-red-600' },
  { value: 'SUB', label: 'SUB', color: 'bg-orange-600' },
  { value: 'OUTROS', label: 'OUTROS', color: 'bg-gray-600' },
];

// Gera cores diferentes para as matérias
const SUBJECT_COLORS = [
  'bg-blue-600',
  'bg-green-600',
  'bg-purple-600',
  'bg-pink-600',
  'bg-indigo-600',
  'bg-teal-600',
  'bg-cyan-600',
  'bg-rose-600',
  'bg-amber-600',
  'bg-lime-600',
];

export function ExamFilters({
  subjects,
  selectedSubject,
  setSelectedSubject,
  selectedYear,
  setSelectedYear,
  selectedType,
  setSelectedType,
  availableYears,
  clearFilters,
  hasActiveFilters,
}) {
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const yearDropdownRef = useRef(null);

  const getSubjectColor = (index) => {
    return SUBJECT_COLORS[index % SUBJECT_COLORS.length];
  };

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target)) {
        setIsYearDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getYearLabel = () => {
    if (selectedYear === 'all') return 'Todos os anos';
    return selectedYear;
  };

  return (
    <div className="mb-6 space-y-4">
      {/* Filtro de Disciplinas - Tags Coloridas */}
      <div>
        <label className="block text-xs font-medium mb-2 text-gray-600 dark:text-gray-400">Disciplina</label>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedSubject('all')}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
              selectedSubject === 'all'
                ? 'bg-blue-600 text-white shadow-md scale-105'
                : 'bg-blue-600/20 text-blue-700 dark:bg-blue-600/30 dark:text-blue-400 hover:bg-blue-600/30 dark:hover:bg-blue-600/40'
            }`}
          >
            Todas
          </button>
          {subjects.map((subject, index) => {
            const color = getSubjectColor(index);
            const isSelected = selectedSubject === subject.subjectCode;
            return (
              <button
                key={subject.subjectCode}
                onClick={() => setSelectedSubject(subject.subjectCode)}
                className={`px-2.5 py-1 rounded-full text-xs transition-all ${
                  isSelected
                    ? `${color} text-white shadow-md scale-105`
                    : `${color}/20 hover:${color}/30`
                }`}
                style={
                  !isSelected
                    ? {
                        color: `rgb(${
                          color.includes('blue')
                            ? '37, 99, 235'
                            : color.includes('green')
                            ? '22, 163, 74'
                            : color.includes('purple')
                            ? '147, 51, 234'
                            : color.includes('pink')
                            ? '219, 39, 119'
                            : color.includes('indigo')
                            ? '99, 102, 241'
                            : color.includes('teal')
                            ? '20, 184, 166'
                            : color.includes('cyan')
                            ? '8, 145, 178'
                            : color.includes('rose')
                            ? '244, 63, 94'
                            : color.includes('amber')
                            ? '217, 119, 6'
                            : '132, 204, 22'
                        })`,
                      }
                    : undefined
                }
                title={`${subject.subjectCode} - ${subject.name}`}
              >
                <span className="font-mono font-semibold">{subject.subjectCode}</span>
                <span className="mx-1">·</span>
                <span className="max-w-[100px] inline-block truncate align-bottom">
                  {subject.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtro de Tipo e Ano - Lado a lado */}
      <div className="flex flex-col lg:flex-row gap-4 items-start">
        {/* Filtro de Tipo - Tags Coloridas */}
        <div className="flex-1">
          <label className="block text-xs font-medium mb-2 text-gray-600 dark:text-gray-400">Tipo de Prova</label>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                selectedType === 'all'
                  ? 'bg-gray-600 text-white shadow-md scale-105'
                  : 'bg-gray-600/20 text-gray-700 dark:bg-gray-600/30 dark:text-gray-400 hover:bg-gray-600/30 dark:hover:bg-gray-600/40'
              }`}
            >
              Todos
            </button>
            {EXAM_TYPES.map((type) => {
              const isSelected = selectedType === type.value;
              return (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                    isSelected
                      ? `${type.color} text-white shadow-md scale-105`
                      : `${type.color}/20 hover:${type.color}/30`
                  }`}
                  style={
                    !isSelected
                      ? {
                          color: type.color.includes('blue')
                            ? 'rgb(37, 99, 235)'
                            : type.color.includes('green')
                            ? 'rgb(22, 163, 74)'
                            : type.color.includes('purple')
                            ? 'rgb(147, 51, 234)'
                            : type.color.includes('red')
                            ? 'rgb(220, 38, 38)'
                            : type.color.includes('orange')
                            ? 'rgb(234, 88, 12)'
                            : 'rgb(75, 85, 99)',
                        }
                      : undefined
                  }
                >
                  {type.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtro de Ano - Dropdown bonito */}
        <div className="flex items-center gap-3">
          <div className="relative" ref={yearDropdownRef}>
            <label className="block text-xs font-medium mb-2 text-gray-600 dark:text-gray-400">Ano</label>
            <button
              onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
              className="min-w-[160px] px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors flex items-center justify-between shadow-sm"
            >
              <span className="text-gray-700 dark:text-gray-300">{getYearLabel()}</span>
              <ChevronDown
                size={16}
                className={`text-gray-500 dark:text-gray-400 transition-transform ${
                  isYearDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isYearDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                <button
                  onClick={() => {
                    setSelectedYear('all');
                    setIsYearDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors ${
                    selectedYear === 'all'
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Todos os anos
                </button>
                {availableYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(String(year));
                      setIsYearDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors ${
                      selectedYear === String(year)
                        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Botão de limpar filtros */}
          {hasActiveFilters && (
            <div className="mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs"
              >
                <X size={14} />
                Limpar
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
```

## 📄 src/features/exams/components/ExamList.jsx
```jsx
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ExamList({ exams }) {
  return (
    <div className="space-y-2">
      {exams.map((exam) => (
        <div
          key={exam.id}
          className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
        >
          <div className="flex-1">
            <div className="font-medium">
              {exam.year}/{exam.semester}º Semestre
            </div>
            {exam.professor && (
              <div className="text-sm text-muted-foreground">
                Prof. {exam.professor}
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            asChild
          >
            <a
              href={exam.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Baixar
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </div>
      ))}
    </div>
  );
}
```

## 📄 src/features/exams/components/SubjectFolder.jsx
```jsx
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ExamList } from './ExamList';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function SubjectFolder({ subject, exams }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Agrupar por tipo
  const examsByType = exams.reduce((acc, exam) => {
    if (!acc[exam.type]) {
      acc[exam.type] = [];
    }
    acc[exam.type].push(exam);
    return acc;
  }, {});

  const typeLabels = {
    P1: 'P1',
    P2: 'P2',
    P3: 'P3',
    FINAL: 'Final',
  };

  return (
    <Card className="overflow-hidden">
      <Button
        variant="ghost"
        className="w-full justify-between p-6 h-auto hover:bg-muted"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          {isExpanded ? (
            <ChevronDown className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
          <span className="text-lg font-semibold">{subject}</span>
          <span className="text-sm text-muted-foreground">
            ({exams.length} {exams.length === 1 ? 'prova' : 'provas'})
          </span>
        </div>
      </Button>

      {isExpanded && (
        <div className="border-t p-6 space-y-6">
          {Object.entries(examsByType).map(([type, typeExams]) => (
            <div key={type}>
              <h4 className="font-semibold mb-3">{typeLabels[type]}</h4>
              <ExamList exams={typeExams} />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
```

## 📄 src/features/exams/useExamBankVM.js
```javascript
import { useState, useEffect } from 'react';
import { apiClient } from '@/shared/services/apiClient';
import { Exam } from '../admin/exams/models/Exam';

export function useExamBankVM() {
  const [subjects, setSubjects] = useState([]);
  const [exams, setExams] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filtros
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Lista de anos disponíveis (de 2000 até o ano atual)
  const currentYear = new Date().getFullYear();
  const yearCount = currentYear - 2000 + 1;
  const availableYears = Array.from({ length: yearCount }, (_, i) => currentYear - i);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [exams, selectedSubject, selectedYear, selectedType]);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [subjectsData, examsData] = await Promise.all([
        apiClient.get('public/exams/subjects'),
        apiClient.get('public/exams'),
      ]);

      setSubjects(subjectsData);
      setExams(Exam.fromDTOArray(examsData));
    } catch (err) {
      setError(err.message || 'Erro ao carregar dados');
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...exams];

    if (selectedSubject !== 'all') {
      filtered = filtered.filter(exam => exam.subjectCode === selectedSubject);
    }

    if (selectedYear !== 'all') {
      filtered = filtered.filter(exam => exam.year === parseInt(selectedYear));
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(exam => exam.type === selectedType);
    }

    // Ordena por ano (mais recente primeiro) e depois por tipo
    filtered.sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return a.type.localeCompare(b.type);
    });

    setFilteredExams(filtered);
  };

  const clearFilters = () => {
    setSelectedSubject('all');
    setSelectedYear('all');
    setSelectedType('all');
  };

  return {
    subjects,
    exams: filteredExams,
    loading,
    error,
    selectedSubject,
    setSelectedSubject,
    selectedYear,
    setSelectedYear,
    selectedType,
    setSelectedType,
    availableYears,
    clearFilters,
    hasActiveFilters: selectedSubject !== 'all' || selectedYear !== 'all' || selectedType !== 'all',
  };
}
```

## 📄 src/features/home/HomePage.jsx
```jsx
import { useHomeVM } from './useHomeVM';
import { BannerCarousel } from './components/BannerCarousel';
import { WarningAlert } from './components/WarningAlert';
import { LatestNews } from './components/LatestNews';
import { NavButtons } from './components/NavButtons';

export function HomePage() {
  const { data, loading, error, dismissWarning } = useHomeVM();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Banner Carousel - Sem padding lateral no mobile */}
      <div className="md:container md:mx-auto md:px-4 md:pt-8">
        <BannerCarousel banners={data?.banners || []} />
      </div>

      {/* Resto do conteúdo com container normal */}
      <div className="container mx-auto px-4 pb-8 space-y-8">
        {/* Warning Alerts */}
        {data?.warnings && data.warnings.length > 0 && (
          <div className="space-y-3">
            {data.warnings.map((warning) => (
              <WarningAlert
                key={warning.id}
                warning={warning}
                onDismiss={dismissWarning}
              />
            ))}
          </div>
        )}

        {/* Navigation Buttons */}
        <NavButtons />

        {/* Latest News */}
        {data?.latestNews && data.latestNews.length > 0 && (
          <LatestNews news={data.latestNews} />
        )}

        {/* Arte Decorativa */}
        <div className="flex items-center justify-center py-12">
          <div className="w-full max-w-3xl aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-dashed border-primary/30">
            <div className="text-center text-muted-foreground">
              <p className="text-lg font-medium">Arte decorativa</p>
              <p className="text-sm mt-2">Espaço reservado para ilustração</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 📄 src/features/home/components/BannerCarousel.jsx
```jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BannerCarousel({ banners = [] }) {
  const [current, setCurrent] = useState(0);
  const [isManualInteraction, setIsManualInteraction] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showTitle, setShowTitle] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const navigate = useNavigate();

  // Mínima distância de swipe (em px)
  const minSwipeDistance = 50;

  useEffect(() => {
    if (banners.length === 0) return;

    // Se foi interação manual, espera 8 segundos; senão 5 segundos
    const interval = isManualInteraction ? 8000 : 5000;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
      setIsManualInteraction(false); // Após mudar, volta ao tempo normal
    }, interval);

    return () => clearInterval(timer);
  }, [banners.length, current, isManualInteraction]); // Reseta quando current ou isManualInteraction muda

  const handleBannerClick = (targetLink) => {
    if (!targetLink) return;

    // Verifica se é link externo (começa com http:// ou https://)
    const isExternal = /^https?:\/\//i.test(targetLink);

    if (isExternal) {
      // Link externo - abre em nova aba
      window.open(targetLink, '_blank', 'noopener,noreferrer');
    } else {
      // Link interno - normaliza para começar com /
      const internalPath = targetLink.startsWith('/') ? targetLink : `/${targetLink}`;
      navigate(internalPath);
    }
  };

  if (banners.length === 0) {
    return (
      <div className="relative w-full min-h-[200px] md:min-h-[300px] aspect-[21/9] rounded-none md:rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <h3 className="text-2xl font-bold mb-2">Bem-vindo ao CACo</h3>
          <p className="text-sm">Os banners aparecerão aqui em breve</p>
        </div>
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
    setIsManualInteraction(true); // Marca como interação manual
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
    setIsManualInteraction(true); // Marca como interação manual
  };

  const goToIndex = (index) => {
    setCurrent(index);
    setIsManualInteraction(true); // Marca como interação manual
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setShowTitle(true);
    }, 800); // Mostra título após 800ms
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setShowTitle(false);
  };

  return (
    <div 
      className="relative w-full min-h-[200px] md:min-h-[300px] aspect-[21/9] rounded-none md:rounded-3xl overflow-hidden bg-muted touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } ${banner.targetLink ? 'cursor-pointer' : ''}`}
          onClick={() => banner.targetLink && handleBannerClick(banner.targetLink)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          {/* Gradiente e título aparecem apenas com hover prolongado */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
              showTitle ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div 
            className={`absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white transition-opacity duration-300 ${
              showTitle ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">{banner.title}</h2>
            {banner.description && (
              <p className="text-sm sm:text-lg opacity-90">{banner.description}</p>
            )}
          </div>
        </div>
      ))}

      {banners.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 rounded-full transition-all ${
                  index === current ? 'bg-white w-6' : 'bg-white/50 w-1.5'
                }`}
                onClick={() => goToIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
```

## 📄 src/features/home/components/LatestNews.jsx
```jsx
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/shared/utils/helpers';

export function LatestNews({ news = [] }) {
  if (news.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Últimas Notícias</h2>
        <Button variant="ghost" asChild>
          <Link to="/noticias">
            Ver todas <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-4">
        {news.map((article) => (
          <Link key={article.id} to={`/noticias/${article.slug}`}>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-4">
                  {article.imageUrl && (
                    <div className="md:w-64 h-48 md:h-auto flex-shrink-0">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                      />
                    </div>
                  )}
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{formatDate(article.publishedAt)}</span>
                      {article.author && (
                        <>
                          <span>•</span>
                          <span>{article.author}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

## 📄 src/features/home/components/NavButtons.jsx
```jsx
import { Link } from 'react-router-dom';
import { Newspaper, BookOpen, Calendar, GraduationCap, ShoppingBag, MessageSquare, Archive } from 'lucide-react';

export function NavButtons() {
  const navItems = [
    {
      to: '/noticias',
      label: 'Notícias',
      icon: Newspaper,
      color: 'bg-red-300 hover:bg-red-400 text-red-900',
    },
    {
      to: '/manual',
      label: 'Manual',
      icon: BookOpen,
      color: 'bg-yellow-300 hover:bg-yellow-400 text-yellow-900',
    },
    {
      to: '/calendario',
      label: 'Calendário',
      icon: Calendar,
      color: 'bg-green-300 hover:bg-green-400 text-green-900',
    },
    {
      to: '/provas',
      label: 'Provas',
      icon: GraduationCap,
      color: 'bg-blue-300 hover:bg-blue-400 text-blue-900',
    },
    {
      to: '/loja',
      label: 'Loja',
      icon: ShoppingBag,
      color: 'bg-purple-300 hover:bg-purple-400 text-purple-900',
    },
    {
      to: '/espaco-de-fala',
      label: 'Espaço de Fala',
      icon: MessageSquare,
      color: 'bg-pink-300 hover:bg-pink-400 text-pink-900',
    },
    {
      to: '/gaveta',
      label: 'Gaveta do CACo',
      icon: Archive,
      color: 'bg-orange-300 hover:bg-orange-400 text-orange-900',
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`${item.color} rounded-full px-4 py-2 flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-lg`}
          >
            <Icon className="h-4 w-4" />
            <span className="font-semibold text-sm">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
```

## 📄 src/features/home/components/QuickLinks.jsx
```jsx
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Calendar, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const links = [
  {
    title: 'Manual do Calouro',
    description: 'Guia completo para novos alunos',
    icon: BookOpen,
    href: '/manual',
    color: 'text-blue-600',
  },
  {
    title: 'Banco de Provas',
    description: 'Provas anteriores organizadas',
    icon: FileText,
    href: '/provas',
    color: 'text-green-600',
  },
  {
    title: 'Calendário',
    description: 'Eventos e datas importantes',
    icon: Calendar,
    href: '/calendario',
    color: 'text-purple-600',
  },
  {
    title: 'Ouvidoria',
    description: 'Entre em contato conosco',
    icon: MessageSquare,
    href: '/ouvidoria',
    color: 'text-orange-600',
  },
];

export function QuickLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link key={link.href} to={link.href}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <Icon className={`h-10 w-10 mb-3 ${link.color}`} />
                <h3 className="font-semibold text-lg mb-1">{link.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
```

## 📄 src/features/home/components/SearchBar.jsx
```jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/busca?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Buscar no manual, notícias, eventos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-14 text-lg"
        />
        <Button type="submit" size="lg" className="h-14 px-8">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
}
```

## 📄 src/features/home/components/WarningAlert.jsx
```jsx
import { AlertCircle, AlertTriangle, Ban, Info, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function WarningAlert({ warning, onDismiss }) {
  if (!warning) return null;

  const getSeverityColor = () => {
    switch (warning.severityLevel) {
      case 'CRITICAL':
        return 'bg-gray-200 border-gray-900 text-gray-950';
      case 'HIGH':
        return 'bg-red-100 border-red-400 text-red-950';
      case 'MEDIUM':
        return 'bg-yellow-100 border-yellow-400 text-yellow-950';
      case 'LOW':
        return 'bg-blue-100 border-blue-400 text-blue-950';
      default:
        return 'bg-gray-100 border-gray-400 text-gray-950';
    }
  };

  const getSeverityIcon = () => {
    switch (warning.severityLevel) {
      case 'CRITICAL':
        return { Icon: Ban, color: 'text-gray-900' };
      case 'HIGH':
        return { Icon: AlertTriangle, color: 'text-red-700' };
      case 'MEDIUM':
        return { Icon: AlertCircle, color: 'text-yellow-700' };
      case 'LOW':
        return { Icon: Info, color: 'text-blue-700' };
      default:
        return { Icon: AlertCircle, color: 'text-gray-700' };
    }
  };

  const { Icon, color } = getSeverityIcon();

  return (
    <div className={`rounded-lg border-2 p-3 shadow-sm ${getSeverityColor()}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-2 flex-1">
          <Icon className={`h-4 w-4 flex-shrink-0 mt-0.5 ${color}`} />
          <div className="flex-1 min-w-0">
            <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&>p]:leading-relaxed [&_a]:text-primary [&_a]:font-semibold [&_a]:hover:underline text-sm">
              <ReactMarkdown>{warning.markdownText}</ReactMarkdown>
            </div>
          </div>
        </div>
        <button
          onClick={() => onDismiss(warning.id)}
          className="p-0.5 hover:bg-black/10 rounded transition-colors flex-shrink-0"
          aria-label="Fechar aviso"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
```

## 📄 src/features/home/useHomeVM.js
```javascript
import { useState, useEffect } from 'react';
import { contentService } from '@/shared/services/contentService';

export function useHomeVM() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      setLoading(true);
      const dashboardData = await contentService.getDashboard();
      
      // Não filtrar warnings dismissed - quando atualizar a página, voltam a aparecer
      setData(dashboardData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const dismissWarning = (id) => {
    // Apenas remove do estado local, sem salvar no localStorage
    setData(prev => ({
      ...prev,
      warnings: prev.warnings.filter(w => w.id !== id),
    }));
  };

  return {
    data,
    loading,
    error,
    dismissWarning,
  };
}
```

## 📄 src/features/manual/ManualPage.jsx
```jsx
import { BookOpen, ChevronRight, Menu } from 'lucide-react';
import { useManualVM } from './useManualVM';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MarkdownContent } from '@/shared/components/MarkdownContent';
import { ManualSidebar } from './components/ManualSidebar';
import { FeedbackSection } from './components/FeedbackSection';
import { useState } from 'react';

export function ManualPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const {
    categories,
    selectedCategory,
    chapters,
    selectedChapter,
    articles,
    selectedArticle,
    loading,
    loadingArticle,
    error,
    feedbackSubmitted,
    pendingFeedback,
    selectCategory,
    selectChapter,
    selectArticle,
    submitFeedback,
  } = useManualVM();

  // Fechar menu mobile ao selecionar artigo
  const handleSelectArticle = (article) => {
    selectArticle(article);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-transparent">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
            <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Manual do Calouro</h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">
                Tudo que você precisa saber sobre a vida universitária
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 sm:py-6 lg:py-8">
        {/* Botão do menu mobile */}
        <div className="lg:hidden mb-4">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <Menu className="h-4 w-4 mr-2" />
                Navegar pelo Manual
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0 flex flex-col">
              <SheetHeader className="px-6 pt-6 pb-4 border-b">
                <SheetTitle>Manual do Calouro</SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <ManualSidebar
                  categories={categories}
                  selectedCategory={selectedCategory}
                  chapters={chapters}
                  selectedChapter={selectedChapter}
                  articles={articles}
                  selectedArticle={selectedArticle}
                  loading={loading}
                  onSelectCategory={selectCategory}
                  onSelectChapter={selectChapter}
                  onSelectArticle={handleSelectArticle}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar - Desktop only */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="lg:sticky lg:top-4">
              <Card className="p-4">
                <ManualSidebar
                  categories={categories}
                  selectedCategory={selectedCategory}
                  chapters={chapters}
                  selectedChapter={selectedChapter}
                  articles={articles}
                  selectedArticle={selectedArticle}
                  loading={loading}
                  onSelectCategory={selectCategory}
                  onSelectChapter={selectChapter}
                  onSelectArticle={selectArticle}
                />
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            {!selectedArticle && !loadingArticle && !error && (
              <Card className="p-6 sm:p-12">
                <div className="text-center max-w-2xl mx-auto">
                  {/* Espaço para imagem decorativa */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-lg bg-muted/30 flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                      <span className="text-muted-foreground/40 text-sm">Imagem decorativa</span>
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">
                    Bem-vindo ao Manual do Calouro
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Selecione uma categoria e artigo no menu lateral para começar a leitura.
                    Aqui você encontrará informações essenciais sobre a vida universitária.
                  </p>
                </div>
              </Card>
            )}

            {loadingArticle && (
              <Card className="p-12">
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
                </div>
              </Card>
            )}

            {error && (
              <Card className="p-12">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-destructive mb-2">
                    Erro
                  </h2>
                  <p className="text-muted-foreground">{error}</p>
                </div>
              </Card>
            )}

            {selectedArticle && !loadingArticle && (
              <div className="space-y-6">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{selectedArticle.categoryTitle}</span>
                  <ChevronRight className="h-4 w-4" />
                  <span>{selectedArticle.chapterTitle}</span>
                  <ChevronRight className="h-4 w-4" />
                  <span className="text-foreground font-medium">
                    {selectedArticle.title}
                  </span>
                </div>

                {/* Article Content */}
                <Card className="p-4 sm:p-8">
                  <article>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                      {selectedArticle.title}
                    </h1>

                    <div className="prose prose-lg max-w-none">
                      <MarkdownContent content={selectedArticle.content} />
                    </div>
                  </article>
                </Card>

                {/* Feedback Section */}
                <Card className="p-6">
                  <FeedbackSection
                    onSubmit={submitFeedback}
                    submitted={feedbackSubmitted}
                    pendingFeedback={pendingFeedback}
                  />
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
```

## 📄 src/features/manual/components/Breadcrumb.jsx
```jsx
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Breadcrumb({ path = [] }) {
  if (path.length === 0) return null;

  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      <Link to="/manual" className="hover:text-foreground transition-colors">
        Manual
      </Link>
      {path.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          {index === path.length - 1 ? (
            <span className="text-foreground font-medium">{item}</span>
          ) : (
            <span>{item}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
```

## 📄 src/features/manual/components/FeedbackSection.jsx
```jsx
import { useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function FeedbackSection({ onSubmit, submitted, pendingFeedback }) {
  const [helpful, setHelpful] = useState(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  // Restaurar feedback pendente quando componente montar ou pendingFeedback mudar
  useEffect(() => {
    if (pendingFeedback) {
      setHelpful(pendingFeedback.helpful);
      setComment(pendingFeedback.comment || '');
    } else {
      setHelpful(null);
      setComment('');
    }
  }, [pendingFeedback]);

  const handleSubmit = async () => {
    if (helpful === null) {
      toast({
        variant: 'destructive',
        title: 'Selecione uma opção',
        description: 'Por favor, indique se o artigo foi útil ou não.',
      });
      return;
    }

    setSubmitting(true);
    try {
      await onSubmit(helpful, comment);
      toast({
        title: 'Feedback enviado!',
        description: 'Obrigado por ajudar a melhorar o manual.',
      });
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro ao enviar feedback',
        description: 'Tente novamente mais tarde.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="h-5 w-5 text-green-600" />
        </div>
        <div>
          <p className="font-medium text-green-900">Feedback enviado!</p>
          <p className="text-sm text-green-700">
            Obrigado por ajudar a melhorar o manual.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Este artigo foi útil?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Seu feedback nos ajuda a melhorar o conteúdo do manual.
        </p>
      </div>

      <div className="flex gap-3">
        <Button
          variant={helpful === true ? 'default' : 'outline'}
          className={helpful === true ? 'bg-green-600 hover:bg-green-700' : ''}
          onClick={() => setHelpful(true)}
          disabled={submitting}
        >
          <ThumbsUp className="h-4 w-4 mr-2" />
          Sim, foi útil
        </Button>
        <Button
          variant={helpful === false ? 'default' : 'outline'}
          className={helpful === false ? 'bg-red-600 hover:bg-red-700' : ''}
          onClick={() => setHelpful(false)}
          disabled={submitting}
        >
          <ThumbsDown className="h-4 w-4 mr-2" />
          Não foi útil
        </Button>
      </div>

      {helpful !== null && (
        <div className="space-y-2">
          <Label htmlFor="feedback-comment">
            Comentário (opcional)
          </Label>
          <Textarea
            id="feedback-comment"
            placeholder="Conte-nos mais sobre sua experiência..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            disabled={submitting}
          />
        </div>
      )}

      {helpful !== null && (
        <Button
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full sm:w-auto"
        >
          {submitting ? 'Enviando...' : 'Enviar Feedback'}
        </Button>
      )}
    </div>
  );
}
```

## 📄 src/features/manual/components/FeedbackWidget.jsx
```jsx
import { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast.jsx';

export function FeedbackWidget({ onSubmit, submitted }) {
  const [selected, setSelected] = useState(null);
  const [comment, setComment] = useState('');
  const [showComment, setShowComment] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSelection = (helpful) => {
    setSelected(helpful);
    setShowComment(true);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await onSubmit(selected, comment);
      toast({
        title: 'Obrigado pelo feedback!',
        description: 'Sua opinião nos ajuda a melhorar o manual.',
      });
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Não foi possível enviar o feedback. Tente novamente.',
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card className="p-6 bg-green-50 border-green-200">
        <p className="text-green-900 font-medium text-center">
          ✓ Obrigado pelo seu feedback!
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Este artigo foi útil?</h3>

      <div className="flex gap-3 mb-4">
        <Button
          variant={selected === true ? 'default' : 'outline'}
          className="flex-1"
          onClick={() => handleSelection(true)}
        >
          <ThumbsUp className="mr-2 h-4 w-4" />
          Sim
        </Button>
        <Button
          variant={selected === false ? 'default' : 'outline'}
          className="flex-1"
          onClick={() => handleSelection(false)}
        >
          <ThumbsDown className="mr-2 h-4 w-4" />
          Não
        </Button>
      </div>

      {showComment && (
        <div
          className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300"
        >
          <textarea
            placeholder="Conte-nos mais sobre sua experiência (opcional)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full min-h-[100px] p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Enviando...' : 'Enviar Feedback'}
          </Button>
        </div>
      )}
    </Card>
  );
}
```

## 📄 src/features/manual/components/ManualSidebar.jsx
```jsx
import { useState } from 'react';
import { ChevronDown, ChevronRight, Book, FileText, Circle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ManualSidebar({
  categories,
  selectedCategory,
  chapters,
  selectedChapter,
  articles,
  selectedArticle,
  loading,
  onSelectCategory,
  onSelectChapter,
  onSelectArticle,
}) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar artigos pela busca
  const filteredArticles = searchTerm
    ? articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : articles;

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-8 bg-muted rounded mb-2" />
            <div className="h-6 bg-muted rounded ml-4" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <nav className="space-y-2">
      {/* Search bar */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar artigos..."
            className="pl-8 h-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus={false}
          />
        </div>
        {searchTerm && (
          <p className="text-xs text-muted-foreground mt-2">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'resultado' : 'resultados'}
          </p>
        )}
      </div>

      {/* Lista com scroll quando tiver busca ativa */}
      <div className={searchTerm ? 'max-h-[400px] overflow-y-auto' : ''}>
        {searchTerm && filteredArticles.length > 0 ? (
          // Mostrar apenas artigos filtrados quando houver busca
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-muted-foreground mb-2 px-2">
              RESULTADOS
            </h3>
            {filteredArticles.map((article) => (
              <Button
                key={article.id}
                variant="ghost"
                size="sm"
                className={`w-full justify-start text-left h-auto py-2 ${
                  selectedArticle?.id === article.id
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
                    : ''
                }`}
                onClick={() => onSelectArticle(article)}
              >
                <Circle
                  className={`h-2 w-2 mr-2 flex-shrink-0 ${
                    selectedArticle?.id === article.id ? 'fill-current' : ''
                  }`}
                />
                <span className="flex-1 text-sm whitespace-normal break-words">{article.title}</span>
              </Button>
            ))}
          </div>
        ) : searchTerm ? (
          <div className="text-center py-4 text-sm text-muted-foreground">
            Nenhum artigo encontrado
          </div>
        ) : (
          // Navegação hierárquica normal
          <div className="space-y-1">
      <h2 className="text-sm font-semibold text-muted-foreground mb-3 px-2">
        CATEGORIAS
      </h2>
      {categories.map((category) => {
        const isExpanded = selectedCategory === category.id;
        const categoryChapters = isExpanded ? chapters : [];

        return (
          <div key={category.id} className="space-y-1">
            {/* Category */}
            <Button
              variant="ghost"
              className={`w-full justify-start text-left font-medium h-auto py-2 ${
                isExpanded ? 'bg-accent' : ''
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4 mr-2 flex-shrink-0" />
              ) : (
                <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
              )}
              <Book className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="flex-1 whitespace-normal break-words min-w-0">{category.title}</span>
              <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">
                {category.chapterCount}
              </span>
            </Button>

            {/* Chapters */}
            {isExpanded && categoryChapters.length > 0 && (
              <div className="ml-4 space-y-1">
                {categoryChapters.map((chapter) => {
                  const isChapterExpanded = selectedChapter === chapter.id;
                  const chapterArticles = isChapterExpanded ? articles : [];

                  return (
                    <div key={chapter.id} className="space-y-1">
                      {/* Chapter */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`w-full justify-start text-left h-auto py-2 ${
                          isChapterExpanded ? 'bg-accent' : ''
                        }`}
                        onClick={() => onSelectChapter(chapter)}
                      >
                        {isChapterExpanded ? (
                          <ChevronDown className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
                        )}
                        <FileText className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
                        <span className="flex-1 text-sm whitespace-normal break-words min-w-0">
                          {chapter.title}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">
                          {chapter.articleCount}
                        </span>
                      </Button>

                      {/* Articles */}
                      {isChapterExpanded && chapterArticles.length > 0 && (
                        <div className="ml-6 space-y-0.5">
                          {chapterArticles.map((article) => (
                            <Button
                              key={article.id}
                              variant="ghost"
                              size="sm"
                              className={`w-full justify-start text-left h-auto py-1.5 ${
                                selectedArticle?.id === article.id
                                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
                                  : ''
                              }`}
                              onClick={() => onSelectArticle(article)}
                            >
                              <Circle
                                className={`h-2 w-2 mr-2 flex-shrink-0 ${
                                  selectedArticle?.id === article.id
                                    ? 'fill-current'
                                    : ''
                                }`}
                              />
                              <span className="flex-1 text-xs whitespace-normal break-words">
                                {article.title}
                              </span>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {categories.length === 0 && (
        <div className="text-center py-8 text-sm text-muted-foreground">
          Nenhuma categoria disponível
        </div>
      )}
          </div>
        )}
      </div>
    </nav>
  );
}
```

## 📄 src/features/manual/useManualVM.js
```javascript
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiClient } from '@/shared/services/apiClient';
import { authService } from '@/shared/services/authService';

const PENDING_FEEDBACK_KEY = 'caco_pending_feedback';

// Funções para gerenciar feedback pendente no localStorage
const savePendingFeedback = (articleSlug, helpful, comment) => {
  localStorage.setItem(PENDING_FEEDBACK_KEY, JSON.stringify({
    articleSlug,
    helpful,
    comment,
    timestamp: Date.now()
  }));
};

const getPendingFeedback = (articleSlug) => {
  try {
    const data = localStorage.getItem(PENDING_FEEDBACK_KEY);
    if (!data) return null;
    
    const feedback = JSON.parse(data);
    // Só retorna se for para o mesmo artigo
    if (feedback.articleSlug === articleSlug) {
      return { helpful: feedback.helpful, comment: feedback.comment };
    }
    return null;
  } catch (err) {
    console.error('Erro ao recuperar feedback pendente:', err);
    return null;
  }
};

const clearPendingFeedback = () => {
  localStorage.removeItem(PENDING_FEEDBACK_KEY);
};

export function useManualVM() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingArticle, setLoadingArticle] = useState(false);
  const [error, setError] = useState(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [pendingFeedback, setPendingFeedback] = useState(null);

  // Cache para armazenar chapters e articles já carregados
  const [chaptersCache, setChaptersCache] = useState({});
  const [articlesCache, setArticlesCache] = useState({});

  // Carregar categorias ao montar
  useEffect(() => {
    loadCategories();
  }, []);

  // Carregar artigo quando slug mudar
  useEffect(() => {
    if (slug) {
      loadArticleBySlug(slug);
    } else {
      setSelectedArticle(null);
      setFeedbackSubmitted(false);
    }
  }, [slug]);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const data = await apiClient.get('public/manual/categories');
      setCategories(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadChapters = async (categoryId) => {
    try {
      // Verificar se já está no cache
      if (chaptersCache[categoryId]) {
        setChapters(chaptersCache[categoryId]);
        return;
      }
      
      const data = await apiClient.get(`public/manual/chapters/category/${categoryId}`);
      setChapters(data);
      
      // Armazenar no cache
      setChaptersCache(prev => ({
        ...prev,
        [categoryId]: data
      }));
    } catch (err) {
      console.error('Erro ao carregar capítulos:', err);
    }
  };

  const loadArticles = async (chapterId) => {
    try {
      // Verificar se já está no cache
      if (articlesCache[chapterId]) {
        setArticles(articlesCache[chapterId]);
        return;
      }
      
      const data = await apiClient.get(`public/manual/articles/chapter/${chapterId}`);
      setArticles(data);
      
      // Armazenar no cache
      setArticlesCache(prev => ({
        ...prev,
        [chapterId]: data
      }));
    } catch (err) {
      console.error('Erro ao carregar artigos:', err);
    }
  };

  const loadArticleBySlug = async (articleSlug) => {
    try {
      setLoadingArticle(true);
      setFeedbackSubmitted(false);
      const data = await apiClient.get(`public/manual/articles/slug/${articleSlug}`);
      setSelectedArticle(data);
      
      // Verificar se há feedback pendente para este artigo
      const pending = getPendingFeedback(articleSlug);
      setPendingFeedback(pending);
      
      // Expandir categoria e capítulo correspondentes
      if (data.categoryId) {
        setSelectedCategory(data.categoryId);
        await loadChapters(data.categoryId);
      }
      if (data.chapterId) {
        setSelectedChapter(data.chapterId);
        await loadArticles(data.chapterId);
      }
    } catch (err) {
      setError('Artigo não encontrado');
      setSelectedArticle(null);
    } finally {
      setLoadingArticle(false);
    }
  };

  const selectCategory = async (category) => {
    if (selectedCategory === category.id) {
      // Toggle collapse
      setSelectedCategory(null);
      setChapters([]);
      setSelectedChapter(null);
      setArticles([]);
    } else {
      setSelectedCategory(category.id);
      setSelectedChapter(null);
      setArticles([]);
      await loadChapters(category.id);
    }
  };

  const selectChapter = async (chapter) => {
    if (selectedChapter === chapter.id) {
      // Toggle collapse
      setSelectedChapter(null);
      setArticles([]);
    } else {
      setSelectedChapter(chapter.id);
      await loadArticles(chapter.id);
    }
  };

  const selectArticle = (article) => {
    navigate(`/manual/${article.slug}`);
  };

  const submitFeedback = async (helpful, comment = '') => {
    if (!selectedArticle) return;
    
    // Verificar se o usuário está autenticado
    const isAuthenticated = authService.getToken() !== null;
    
    if (!isAuthenticated) {
      // Salvar feedback no localStorage
      savePendingFeedback(selectedArticle.slug, helpful, comment);
      
      // Redirecionar para login
      navigate('/login', { state: { from: `/manual/${selectedArticle.slug}` } });
      return;
    }
    
    try {
      await apiClient.post(`article-feedback/articles/${selectedArticle.id}/feedback`, {
        isHelpful: helpful,
        comment,
      });
      setFeedbackSubmitted(true);
      
      // Limpar feedback pendente após envio bem-sucedido
      clearPendingFeedback();
      setPendingFeedback(null);
      
      // Atualizar contadores de feedback no artigo
      setSelectedArticle(prev => ({
        ...prev,
        helpfulCount: helpful ? prev.helpfulCount + 1 : prev.helpfulCount,
        unhelpfulCount: !helpful ? prev.unhelpfulCount + 1 : prev.unhelpfulCount,
      }));
    } catch (err) {
      console.error('Erro ao enviar feedback:', err);
      throw err;
    }
  };

  return {
    categories,
    selectedCategory,
    chapters,
    selectedChapter,
    articles,
    selectedArticle,
    loading,
    loadingArticle,
    error,
    feedbackSubmitted,
    pendingFeedback,
    selectCategory,
    selectChapter,
    selectArticle,
    submitFeedback,
  };
}
```

## 📄 src/features/news/NewsDetailPage.jsx
```jsx
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNewsDetailVM } from './useNewsDetailVM';
import { MarkdownContent } from '@/shared/components/MarkdownContent';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/shared/utils/helpers';

export function NewsDetailPage() {
  const { article, loading, error } = useNewsDetailVM();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">
            {error || 'Notícia não encontrada'}
          </p>
          <Button asChild className="mt-4">
            <Link to="/noticias">Voltar para notícias</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/noticias">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para notícias
        </Link>
      </Button>

      {article.imageUrl && (
        <div className="aspect-video w-full rounded-lg overflow-hidden mb-8">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {article.title}
        </h1>
        <div className="flex items-center gap-3 text-muted-foreground">
          <span>{formatDate(article.publishedAt)}</span>
          {article.author && (
            <>
              <span>•</span>
              <span>Por {article.author}</span>
            </>
          )}
        </div>
      </header>

      <div className="mb-8">
        <MarkdownContent content={article.content} />
      </div>
    </article>
  );
}
```

## 📄 src/features/news/NewsListPage.jsx
```jsx
import { useNewsListVM } from './useNewsListVM';
import { NewsCard } from './components/NewsCard';
import { Button } from '@/components/ui/button';

export function NewsListPage() {
  const { news, loading, error, hasMore, loadMore } = useNewsListVM();

  if (loading && news.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error && news.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Notícias</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {news.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <Button
            onClick={loadMore}
            disabled={loading}
            size="lg"
          >
            {loading ? 'Carregando...' : 'Carregar mais'}
          </Button>
        </div>
      )}
    </div>
  );
}
```

## 📄 src/features/news/components/NewsCard.jsx
```jsx
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/shared/utils/helpers';

export function NewsCard({ article }) {
  return (
    <Link to={`/noticias/${article.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
        {article.imageUrl && (
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <span>{formatDate(article.publishedAt)}</span>
            {article.author && (
              <>
                <span>•</span>
                <span>{article.author}</span>
              </>
            )}
          </div>
          <h3 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-muted-foreground line-clamp-3">
            {article.summary}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
```

## 📄 src/features/news/useNewsDetailVM.js
```javascript
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { contentService } from '@/shared/services/contentService';

export function useNewsDetailVM() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadArticle();
  }, [slug]);

  const loadArticle = async () => {
    try {
      setLoading(true);
      const data = await contentService.getNewsBySlug(slug);
      setArticle(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    article,
    loading,
    error,
  };
}
```

## 📄 src/features/news/useNewsListVM.js
```javascript
import { useState, useEffect } from 'react';
import { contentService } from '@/shared/services/contentService';

export function useNewsListVM() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadNews();
  }, [page]);

  const loadNews = async () => {
    try {
      setLoading(true);
      const data = await contentService.getNewsList(page, 10);
      
      if (page === 1) {
        setNews(data.items);
      } else {
        setNews(prev => [...prev, ...data.items]);
      }
      
      setHasMore(data.hasMore);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
    }
  };

  return {
    news,
    loading,
    error,
    hasMore,
    loadMore,
  };
}
```

## 📄 src/features/profile/ProfilePage.jsx
```jsx
import { useState } from 'react';
import { useProfileVM } from './useProfileVM';
import { useStickerAlbumVM } from '@/features/stickers/useStickerAlbumVM';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast.jsx';
import { User, Camera, Save } from 'lucide-react';
import { AlbumGrid } from '@/features/stickers/components/AlbumGrid';
import { RedeemInput } from '@/features/stickers/components/RedeemInput';
import { EditAvatarModal } from './components/EditAvatarModal';

export function ProfilePage() {
  const { user, loading, updating, uploadProgress, updateProfile } = useProfileVM();
  const stickerVM = useStickerAlbumVM();
  const { toast } = useToast();
  
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [selectedAvatarFile, setSelectedAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
  });

  const handleEdit = () => {
    setFormData({
      name: user.name || '',
    });
    setSelectedAvatarFile(null);
    setAvatarPreview(null);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({ name: '' });
    setSelectedAvatarFile(null);
    setAvatarPreview(null);
  };

  const handleAvatarSelected = (avatarFile) => {
    setSelectedAvatarFile(avatarFile);
    
    // Cria preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result);
    };
    reader.readAsDataURL(avatarFile);
    
    setIsEditingAvatar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Se tem arquivo de avatar selecionado, envia com FormData
    const dataToSend = selectedAvatarFile 
      ? { name: formData.name, avatarFile: selectedAvatarFile }
      : formData;
    
    const result = await updateProfile(dataToSend);
    
    if (result.success) {
      toast({
        title: 'Perfil atualizado!',
        description: 'Suas informações foram atualizadas com sucesso.',
      });
      setIsEditing(false);
      setSelectedAvatarFile(null);
      setAvatarPreview(null);
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao atualizar',
        description: result.error || 'Não foi possível atualizar seu perfil.',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Seção de Perfil */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Meu Perfil
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                {/* Avatar Preview com botão de edição */}
                <div className="relative">
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Avatar preview"
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                    />
                  ) : user?.avatarUrl ? (
                    <img
                      src={user.avatarUrl}
                      alt="Avatar"
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary">
                      <User className="h-16 w-16 text-primary" />
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsEditingAvatar(true)}
                    className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 hover:bg-primary/90 transition-colors"
                  >
                    <Camera className="h-5 w-5" />
                  </button>
                </div>

                {/* Form Fields */}
                <div className="w-full max-w-md space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nome</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  {/* Indicador de progresso */}
                  {updating && uploadProgress > 0 && (
                    <div className="space-y-2">
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-primary h-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Enviando: {uploadProgress}%
                      </p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button type="submit" disabled={updating} className="flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      {updating ? 'Salvando...' : 'Salvar'}
                    </Button>
                    <Button type="button" variant="outline" onClick={handleCancel} disabled={updating}>
                      Cancelar
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4">
              {/* Avatar Display */}
              {user?.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary">
                  <User className="h-16 w-16 text-primary" />
                </div>
              )}

              {/* User Info */}
              <div className="text-center">
                <h2 className="text-2xl font-bold">{user?.name}</h2>
                <p className="text-muted-foreground">{user?.email}</p>
                {user?.role === 'ADMIN' && (
                  <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    Admin
                  </span>
                )}
              </div>

              <Button onClick={handleEdit}>
                Editar Perfil
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Seção de Figurinhas */}
      <Card>
        <CardHeader>
          <CardTitle>Meu Álbum de Figurinhas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input de Resgate */}
          <RedeemInput
            onRedeem={stickerVM.redeemCode}
            loading={stickerVM.redeeming}
          />

          {/* Progresso */}
          {stickerVM.album && (
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-4">
                <div>
                  <p className="text-3xl font-bold text-primary">
                    {stickerVM.album.collectedCount}
                  </p>
                  <p className="text-sm text-muted-foreground">Coletadas</p>
                </div>
                <div className="text-2xl text-muted-foreground">/</div>
                <div>
                  <p className="text-3xl font-bold">
                    {stickerVM.album.totalCount}
                  </p>
                  <p className="text-sm text-muted-foreground">Total</p>
                </div>
              </div>
              
              <div className="w-full max-w-md mx-auto bg-muted rounded-full h-3 overflow-hidden">
                <div
                  className="bg-primary h-full transition-all duration-500"
                  style={{ width: `${(stickerVM.album.collectedCount / stickerVM.album.totalCount) * 100}%` }}
                />
              </div>
              
              <p className="text-sm text-muted-foreground">
                {Math.round((stickerVM.album.collectedCount / stickerVM.album.totalCount) * 100)}% completo
              </p>
            </div>
          )}

          {/* Grid de Figurinhas */}
          {stickerVM.loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
            </div>
          ) : stickerVM.error ? (
            <div className="text-center py-12 text-red-600">
              {stickerVM.error}
            </div>
          ) : (
            <AlbumGrid
              stickers={stickerVM.album?.stickers || []}
              onStickerClick={stickerVM.selectSticker}
            />
          )}
        </CardContent>
      </Card>

      {/* Modal de Edição de Avatar */}
      <EditAvatarModal
        open={isEditingAvatar}
        onClose={() => setIsEditingAvatar(false)}
        onSave={handleAvatarSelected}
        currentAvatarUrl={avatarPreview || user?.avatarUrl}
      />
    </div>
  );
}
```

## 📄 src/features/profile/components/EditAvatarModal.jsx
```jsx
import { useState, useCallback, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast.jsx';
import { Upload, Crop, Save } from 'lucide-react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '@/shared/utils/imageCrop';

export function EditAvatarModal({ open, onClose, onSave, currentAvatarUrl }) {
  const [step, setStep] = useState(1); // 1: upload, 2: crop, 3: confirm
  const [originalFile, setOriginalFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedFile, setCroppedFile] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      // Reseta para step 1 ao abrir
      setStep(1);
      setOriginalFile(null);
      setImageSrc(null);
      setCroppedImage(null);
      setCroppedFile(null);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
    }
  }, [open]);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        variant: 'destructive',
        title: 'Arquivo inválido',
        description: 'Por favor, selecione uma imagem.',
      });
      return;
    }

    // Limite de 2MB para avatar
    const maxSize = 2 * 1024 * 1024; // 2MB em bytes
    if (file.size > maxSize) {
      toast({
        variant: 'destructive',
        title: 'Arquivo muito grande',
        description: 'A imagem deve ter no máximo 2 MB.',
      });
      return;
    }

    setOriginalFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setStep(2);
    };
    reader.readAsDataURL(file);
  };

  const handleCropConfirm = async () => {
    try {
      const croppedImageBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
      
      // Converte blob para File object
      const fileName = originalFile?.name || 'avatar.jpg';
      const croppedFileObj = new File([croppedImageBlob], fileName, { 
        type: 'image/jpeg' 
      });
      setCroppedFile(croppedFileObj);
      
      // Cria preview em base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setCroppedImage(reader.result);
        setStep(3); // Vai para step de confirmação
      };
      reader.readAsDataURL(croppedImageBlob);
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro ao recortar',
        description: 'Não foi possível processar a imagem.',
      });
    }
  };

  const handleSave = () => {
    if (croppedFile) {
      onSave(croppedFile);
      handleClose();
    }
  };

  const handleClose = () => {
    setStep(1);
    setOriginalFile(null);
    setImageSrc(null);
    setCroppedImage(null);
    setCroppedFile(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Alterar Foto de Perfil</DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            {/* Preview do avatar atual */}
            {currentAvatarUrl && (
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Foto atual:</p>
                <img
                  src={currentAvatarUrl}
                  alt="Avatar atual"
                  className="w-32 h-32 rounded-full object-cover mx-auto border-2 border-border"
                />
              </div>
            )}

            {/* Botão de upload */}
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="avatar-upload"
              />
              <label
                htmlFor="avatar-upload"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <div className="bg-primary/10 p-4 rounded-full">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Escolha uma nova foto</p>
                  <p className="text-sm text-muted-foreground">
                    Clique para selecionar do seu computador (máx. 2 MB)
                  </p>
                </div>
              </label>
            </div>
          </div>
        )}

        {step === 2 && imageSrc && (
          <div className="space-y-4">
            {/* Cropper */}
            <div className="relative w-full h-[400px] bg-black rounded-lg">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                cropShape="round"
                showGrid={false}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Zoom</label>
              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                Voltar
              </Button>
              <Button 
                type="button" 
                onClick={handleCropConfirm}
                className="flex-1"
              >
                <Crop className="h-4 w-4 mr-2" />
                Confirmar Recorte
              </Button>
            </div>
          </div>
        )}

        {step === 3 && croppedImage && (
          <div className="space-y-4">
            {/* Preview da imagem recortada */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <img
                  src={croppedImage}
                  alt="Preview"
                  className="w-48 h-48 rounded-full object-cover border-4 border-primary"
                />
              </div>
              
              <p className="text-sm text-muted-foreground">
                Esta será sua nova foto de perfil
              </p>
            </div>

            <div className="flex gap-3">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setStep(2)}
                className="flex-1"
              >
                Recortar Novamente
              </Button>
              <Button 
                type="button" 
                onClick={handleSave}
                className="flex-1"
              >
                <Save className="h-4 w-4 mr-2" />
                Confirmar Foto
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
```

## 📄 src/features/profile/useProfileVM.js
```javascript
import { useState, useEffect } from 'react';
import { apiClient } from '@/shared/services/apiClient';
import { authService } from '@/shared/services/authService';

export function useProfileVM() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            setLoading(true);
            setError(null);
            const userData = await apiClient.get('user/me');
            setUser(userData);
        } catch (err) {
            setError(err.message || 'Erro ao carregar perfil');
        } finally {
            setLoading(false);
        }
    };

    const updateProfile = async (data) => {
        try {
            setUpdating(true);
            setUploadProgress(0);
            setError(null);

            let updatedUser;

            const formData = new FormData();
            formData.append('name', data.name || user?.name || '');
            
            // Só adiciona avatar se existir um arquivo
            if (data.avatarFile instanceof File) {
                formData.append('avatar', data.avatarFile);
            } else {
                formData.append('avatar', null);
            }

            // Callback para atualizar progresso
            const onProgress = (percentual) => {
                setUploadProgress(percentual);
            };

            updatedUser = await apiClient.putFormDataWithProgress('user/me', formData, onProgress);


            // Atualiza o usuário no localStorage
            authService.setUser(updatedUser);
            setUser(updatedUser);

            return { success: true };
        } catch (err) {
            setError(err.message || 'Erro ao atualizar perfil');
            return { success: false, error: err.message };
        } finally {
            setUpdating(false);
            setUploadProgress(0);
        }
    };

    return {
        user,
        loading,
        updating,
        uploadProgress,
        error,
        updateProfile,
        refreshProfile: loadProfile,
    };
}
```

## 📄 src/features/stickers/StickerAlbumPage.jsx
```jsx
import { useStickerAlbumVM } from './useStickerAlbumVM';
import { RedeemInput } from './components/RedeemInput';
import { AlbumGrid } from './components/AlbumGrid';
import { StickerModal } from './components/StickerModal';
import { Card } from '@/components/ui/card';

export function StickerAlbumPage() {
  const {
    myStickers,
    allStickers,
    loading,
    error,
    selectedSticker,
    progress,
    handleRedeem,
    openStickerModal,
    closeStickerModal,
  } = useStickerAlbumVM();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Álbum de Figurinhas</h1>
        <p className="text-muted-foreground">
          Colecione figurinhas participando dos eventos do CACo
        </p>
      </div>

      {/* Progress */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Progresso da Coleção</h3>
          <span className="text-2xl font-bold text-primary">
            {progress.percentage}%
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-500 rounded-full"
            style={{ width: `${progress.percentage}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {progress.collected} de {progress.total} figurinhas
        </p>
      </Card>

      {/* Redeem Input */}
      <RedeemInput onRedeem={handleRedeem} />

      {/* Album Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Minha Coleção</h2>
        <AlbumGrid
          allStickers={allStickers}
          myStickers={myStickers}
          onStickerClick={openStickerModal}
        />
      </div>

      {/* Sticker Modal */}
      <StickerModal
        sticker={selectedSticker}
        open={!!selectedSticker}
        onClose={closeStickerModal}
      />
    </div>
  );
}
```

## 📄 src/features/stickers/components/AlbumGrid.jsx
```jsx
import { StickerItem } from './StickerItem';
import { StickerSlot } from './StickerSlot';

export function AlbumGrid({ allStickers, myStickers, onStickerClick }) {
  const hasSticker = (stickerId) => {
    return myStickers.find((s) => s.stickerId === stickerId);
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'LEGENDARY':
        return 'border-yellow-400 shadow-yellow-200';
      case 'EPIC':
        return 'border-purple-400 shadow-purple-200';
      case 'RARE':
        return 'border-blue-400 shadow-blue-200';
      default:
        return 'border-gray-300 shadow-gray-200';
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {allStickers.map((sticker) => {
        const userSticker = hasSticker(sticker.id);
        const borderColor = getRarityColor(sticker.rarity);

        return (
          <div
            key={sticker.id}
            className={`relative aspect-[3/4] rounded-lg border-2 ${borderColor} transition-all hover:shadow-lg`}
          >
            {userSticker ? (
              <button
                onClick={() => onStickerClick(sticker, userSticker)}
                className="w-full h-full focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <StickerItem sticker={sticker} />
              </button>
            ) : (
              <StickerSlot />
            )}
          </div>
        );
      })}
    </div>
  );
}
```

## 📄 src/features/stickers/components/RedeemInput.jsx
```jsx
import { useState } from 'react';
import { Gift } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast.jsx';

export function RedeemInput({ onRedeem }) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) return;

    try {
      setLoading(true);
      const result = await onRedeem(code);
      
      toast({
        title: '🎉 Figurinha Desbloqueada!',
        description: `Você ganhou: ${result.sticker.name}`,
      });
      
      setCode('');
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: err.message || 'Código inválido ou já utilizado',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Gift className="h-5 w-5 text-primary" />
            Resgatar Código
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Digite o código que você ganhou em eventos para desbloquear figurinhas
          </p>
        </div>
        
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="XXXX-XXXX-XXXX"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            className="flex-1 font-mono"
            disabled={loading}
          />
          <Button type="submit" disabled={loading || !code.trim()}>
            {loading ? 'Resgatando...' : 'Resgatar'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
```

## 📄 src/features/stickers/components/StickerItem.jsx
```jsx
export function StickerItem({ sticker }) {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden group">
      <img
        src={sticker.imageUrl}
        alt={sticker.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium">
          {sticker.name}
        </div>
      </div>
    </div>
  );
}
```

## 📄 src/features/stickers/components/StickerModal.jsx
```jsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { formatDate } from '@/shared/utils/helpers';
import { Star, Calendar, MapPin } from 'lucide-react';

const rarityLabels = {
  COMMON: 'Comum',
  RARE: 'Rara',
  EPIC: 'Épica',
  LEGENDARY: 'Lendária',
};

export function StickerModal({ sticker, open, onClose }) {
  if (!sticker) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{sticker.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="aspect-[3/4] w-full rounded-lg overflow-hidden">
            <img
              src={sticker.imageUrl}
              alt={sticker.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              <span className="font-medium">Raridade:</span>
              <span className="text-muted-foreground">
                {rarityLabels[sticker.rarity]}
              </span>
            </div>

            {sticker.acquiredAt && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-medium">Conquistada em:</span>
                <span className="text-muted-foreground">
                  {formatDate(sticker.acquiredAt)}
                </span>
              </div>
            )}

            {sticker.eventName && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-medium">Evento:</span>
                <span className="text-muted-foreground">
                  {sticker.eventName}
                </span>
              </div>
            )}

            {sticker.description && (
              <div className="pt-2 border-t">
                <p className="text-sm text-muted-foreground">
                  {sticker.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

## 📄 src/features/stickers/components/StickerSlot.jsx
```jsx
import { Lock } from 'lucide-react';

export function StickerSlot() {
  return (
    <div className="w-full h-full rounded-lg bg-muted flex items-center justify-center">
      <div className="text-center">
        <Lock className="h-8 w-8 mx-auto mb-2 text-muted-foreground/50" />
        <p className="text-xs text-muted-foreground">Bloqueada</p>
      </div>
    </div>
  );
}
```

## 📄 src/features/stickers/useStickerAlbumVM.js
```javascript
import { useState, useEffect } from 'react';
import { contentService } from '@/shared/services/contentService';
import { authService } from '@/shared/services/authService';

export function useStickerAlbumVM() {
  const [myStickers, setMyStickers] = useState([]);
  const [allStickers, setAllStickers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSticker, setSelectedSticker] = useState(null);

  useEffect(() => {
    loadStickers();
  }, []);

  const loadStickers = async () => {
    try {
      setLoading(true);
      const token = authService.getToken();
      const data = await contentService.getStickers(token);
      setMyStickers(data.myStickers || []);
      setAllStickers(data.allStickers || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRedeem = async (code) => {
    const token = authService.getToken();
    const result = await contentService.redeemSticker(code, token);
    
    // Adicionar novo sticker
    setMyStickers(prev => [...prev, result.userSticker]);
    
    // Tocar som (se disponível)
    try {
      const audio = new Audio('/sounds/sticker-unlocked.mp3');
      audio.play().catch(() => {
        // Ignorar erro se som não estiver disponível
      });
    } catch (e) {
      // Ignorar
    }
    
    return result;
  };

  const openStickerModal = (sticker, userSticker) => {
    setSelectedSticker({ ...sticker, ...userSticker });
  };

  const closeStickerModal = () => {
    setSelectedSticker(null);
  };

  const progress = {
    collected: myStickers.length,
    total: allStickers.length,
    percentage: allStickers.length > 0
      ? Math.round((myStickers.length / allStickers.length) * 100)
      : 0,
  };

  return {
    myStickers,
    allStickers,
    loading,
    error,
    selectedSticker,
    progress,
    handleRedeem,
    openStickerModal,
    closeStickerModal,
  };
}
```

## 📄 src/features/store/ProductDetailPage.jsx
```jsx
import { useProductDetailVM } from './useProductDetailVM';
import { ProductImageGallery } from './components/ProductImageGallery';
import { ProductInfo } from './components/ProductInfo';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';

export function ProductDetailPage() {
  const {
    product,
    selectedVariation,
    currentImageIndex,
    loading,
    error,
    selectVariation,
    nextImage,
    previousImage,
    goToImage,
    getTotalPrice,
    goBack,
  } = useProductDetailVM();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={goBack} variant="outline">
            <ArrowLeft size={16} className="mr-2" />
            Voltar para a loja
          </Button>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Botão Voltar */}
        <Button
          variant="ghost"
          onClick={goBack}
          className="mb-6 hover:bg-primary/10 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Voltar para a loja
        </Button>

        {/* Layout Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Galeria de Imagens - mais espaço */}
          <div className="lg:col-span-7">
            <ProductImageGallery
              images={product.images}
              productName={product.name}
              currentIndex={currentImageIndex}
              onNext={nextImage}
              onPrevious={previousImage}
              onSelectImage={goToImage}
            />
          </div>

          {/* Informações do Produto */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-6">
              <ProductInfo
                product={product}
                selectedVariation={selectedVariation}
                onSelectVariation={selectVariation}
                totalPrice={getTotalPrice()}
              />
            </div>
          </div>
        </div>

        {/* Seção decorativa */}
        <div className="mt-16 mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
            {/* Arte decorativa */}
            <div className="w-32 h-32 rounded-lg overflow-hidden">
              <img 
                src="/placeholder-art.png" 
                alt="Arte decorativa" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-primary/20 flex items-center justify-center">
                      <svg class="text-primary" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5"/>
                        <path d="M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                  `;
                }}
              />
            </div>
            
            {/* Frase com coração */}
            <div className="text-center md:text-left">
              <p className="text-lg md:text-xl font-medium text-foreground/80 flex items-center gap-2 flex-wrap justify-center md:justify-start">
                <span>feito com</span>
                <svg className="text-red-500" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <span>pelo CACo para você</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 📄 src/features/store/StorePage.jsx
```jsx
import { useStoreVM } from './useStoreVM';
import { CategoryTabs } from './components/CategoryTabs';
import { ProductGrid } from './components/ProductGrid';
import { Store } from 'lucide-react';

export function StorePage() {
  const {
    categories,
    selectedCategory,
    products,
    loading,
    error,
    selectCategory,
  } = useStoreVM();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Store size={32} className="text-primary" />
          <h1 className="text-4xl font-bold">Loja do CACO</h1>
        </div>
        <p className="text-muted-foreground">
          Confira os produtos disponíveis para compra
        </p>
      </div>

      {categories.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Store size={64} className="text-gray-300 dark:text-gray-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Nenhuma categoria disponível
          </h3>
          <p className="text-gray-500 dark:text-gray-500">
            A loja ainda não possui produtos cadastrados
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={selectCategory}
          />
          
          <ProductGrid
            products={products}
            categoryName={selectedCategory?.name}
          />
        </div>
      )}

      {/* Arte Decorativa - sempre visível */}
      <div className="flex items-center justify-center py-12">
        <div className="w-full max-w-3xl aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-dashed border-primary/30">
          <div className="text-center text-muted-foreground">
            <p className="text-lg font-medium">Arte decorativa</p>
            <p className="text-sm mt-2">Espaço reservado para ilustração</p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 📄 src/features/store/components/CategoryTabs.jsx
```jsx
import { cn } from '@/lib/utils';

export function CategoryTabs({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
      <div className="flex gap-3 md:flex-wrap">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors border-2 whitespace-nowrap flex-shrink-0",
              selectedCategory?.id === category.id
                ? "bg-primary text-primary-foreground border-primary shadow-md"
                : "bg-background border-gray-300 dark:border-gray-600 hover:border-primary"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
```

## 📄 src/features/store/components/ProductCard.jsx
```jsx
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/shared/utils/formatters';

export function ProductCard({ product }) {
  const imageUrl = product.coverImage;

  return (
    <Link to={`/loja/produto/${product.slug}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col rounded-xl border-2 hover:border-primary/50">
        {/* Imagem do Produto */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400 text-sm">Sem imagem</span>
            </div>
          )}
          
          {/* Badge de Esgotado */}
          {product.outOfStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Badge variant="destructive" className="text-lg px-4 py-2">
                Esgotado
              </Badge>
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <CardHeader className="flex-1 pb-3 pt-4">
          <h3 className="font-semibold text-lg line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </CardHeader>

        <CardFooter className="pt-0 pb-4 flex items-center justify-between">
          <div className="flex-1">
            <p className="text-2xl font-bold text-primary mb-1">
              {formatCurrency(product.price)}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {product.categoryName && (
                <Badge variant="secondary" className="text-xs">
                  {product.categoryName}
                </Badge>
              )}
              {product.manageStock && !product.outOfStock && product.stockQuantity && (
                <Badge variant="outline" className="text-xs">
                  {product.stockQuantity} em estoque
                </Badge>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
```

## 📄 src/features/store/components/ProductGrid.jsx
```jsx
import { ProductCard } from './ProductCard';
import { Package } from 'lucide-react';

export function ProductGrid({ products, categoryName }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Package size={64} className="text-gray-300 dark:text-gray-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
          Nenhum produto disponível
        </h3>
        <p className="text-gray-500 dark:text-gray-500">
          {categoryName ? `Não há produtos disponíveis em ${categoryName} no momento` : 'Selecione uma categoria para ver os produtos'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

## 📄 src/features/store/components/ProductImageGallery.jsx
```jsx
import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProductImageGallery({ 
  images, 
  productName, 
  currentIndex, 
  onNext, 
  onPrevious, 
  onSelectImage 
}) {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef(null);
  const touchDistance = useRef(0);
  const containerRef = useRef(null);

  const hasImages = images && images.length > 0;
  const currentImage = hasImages 
    ? images[currentIndex]
    : null;

  // Função para limitar o movimento da imagem dentro dos bounds
  const constrainPosition = (position, scale, containerSize, imageSize) => {
    if (scale <= 1) return { x: 0, y: 0 };
    
    const scaledImageSize = imageSize * scale;
    const maxOffset = (scaledImageSize - containerSize) / 2;
    
    return {
      x: Math.max(Math.min(position.x, maxOffset), -maxOffset),
      y: Math.max(Math.min(position.y, maxOffset), -maxOffset)
    };
  };

  // Hover zoom para desktop
  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  // Mobile zoom com pinça
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchDistance.current = distance;
    } else if (e.touches.length === 1 && zoomScale > 1) {
      setIsDragging(true);
      setDragStart({ 
        x: e.touches[0].clientX - zoomPosition.x, 
        y: e.touches[0].clientY - zoomPosition.y 
      });
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scale = distance / touchDistance.current;
      setZoomScale((prev) => Math.min(Math.max(prev * scale, 1), 4));
      touchDistance.current = distance;
    } else if (isDragging && e.touches.length === 1 && zoomScale > 1) {
      e.preventDefault();
      const newPosition = {
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      };
      
      // Limitar o movimento dentro dos bounds
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const constrainedPos = constrainPosition(
          newPosition,
          zoomScale,
          Math.min(rect.width, rect.height),
          Math.min(rect.width, rect.height)
        );
        setZoomPosition(constrainedPos);
      } else {
        setZoomPosition(newPosition);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Aplicar restrições quando o zoom muda
  useEffect(() => {
    if (containerRef.current && zoomScale > 1) {
      const rect = containerRef.current.getBoundingClientRect();
      const constrainedPos = constrainPosition(
        zoomPosition,
        zoomScale,
        Math.min(rect.width, rect.height),
        Math.min(rect.width, rect.height)
      );
      
      // Só atualizar se a posição mudou
      if (constrainedPos.x !== zoomPosition.x || constrainedPos.y !== zoomPosition.y) {
        setZoomPosition(constrainedPos);
      }
    } else if (zoomScale === 1) {
      // Resetar posição quando zoom volta para 1
      setZoomPosition({ x: 0, y: 0 });
    }
  }, [zoomScale]);

  const handleOpenZoom = () => {
    setIsZoomOpen(true);
    setZoomScale(1);
    setZoomPosition({ x: 0, y: 0 });
  };

  const handleCloseZoom = () => {
    setIsZoomOpen(false);
    setZoomScale(1);
    setZoomPosition({ x: 0, y: 0 });
  };

  if (!hasImages) {
    return (
      <Card className="aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <span className="text-gray-400">Sem imagens disponíveis</span>
      </Card>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {/* Imagem Principal */}
        <div className="relative aspect-square overflow-hidden rounded-xl border bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-lg">
          {/* Desktop: Zoom on hover */}
          <div 
            className="hidden md:block w-full h-full overflow-hidden group cursor-crosshair"
            onMouseMove={handleMouseMove}
            ref={imageRef}
          >
            <img
              src={currentImage}
              alt={`${productName} - Imagem ${currentIndex + 1}`}
              className="w-full h-full object-contain transition-transform group-hover:scale-150"
              style={{
                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
              }}
            />
          </div>
          
          {/* Mobile: Click para abrir popup */}
          <button
            onClick={handleOpenZoom}
            className="md:hidden w-full h-full"
          >
            <img
              src={currentImage}
              alt={`${productName} - Imagem ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </button>

          {/* Navegação (apenas se houver mais de uma imagem) */}
          {images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-800 shadow-lg"
                onClick={onPrevious}
              >
                <ChevronLeft size={20} />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-800 shadow-lg"
                onClick={onNext}
              >
                <ChevronRight size={20} />
              </Button>

              {/* Indicador de posição */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Miniaturas */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => onSelectImage(index)}
                className={cn(
                  "aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105",
                  currentIndex === index
                    ? "border-primary ring-2 ring-primary/30 shadow-md"
                    : "border-gray-200 dark:border-gray-700 hover:border-primary/50"
                )}
              >
                <img
                  src={image}
                  alt={`Miniatura ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal de Zoom (apenas mobile) */}
      <DialogPrimitive.Root open={isZoomOpen} onOpenChange={setIsZoomOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay 
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" 
            onClick={() => setIsZoomOpen(false)}
          />
          <DialogPrimitive.Content 
            className="fixed left-0 top-0 z-50 w-full h-[100dvh] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            onEscapeKeyDown={() => setIsZoomOpen(false)}
            onPointerDownOutside={() => setIsZoomOpen(false)}
          >
            <div className="relative w-full h-full">
              {/* Botão Fechar */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseZoom}
                className="absolute top-4 right-4 z-10 text-foreground bg-background/80 hover:bg-background/90 rounded-full shadow-lg"
              >
                <X size={24} />
              </Button>

              {/* Navegação */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-foreground bg-background/80 hover:bg-background/90 rounded-full shadow-lg"
                    onClick={onPrevious}
                  >
                    <ChevronLeft size={28} />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-foreground bg-background/80 hover:bg-background/90 rounded-full shadow-lg"
                    onClick={onNext}
                  >
                    <ChevronRight size={28} />
                  </Button>
                </>
              )}

              {/* Imagem com pinch zoom */}
              <div
                ref={containerRef}
                className="w-full h-full flex items-center justify-center overflow-hidden touch-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={currentImage}
                  alt={`${productName} - Imagem ${currentIndex + 1}`}
                  className="max-w-full max-h-full object-contain select-none"
                  style={{
                    transform: `scale(${zoomScale}) translate(${zoomPosition.x / zoomScale}px, ${zoomPosition.y / zoomScale}px)`,
                    transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                    cursor: zoomScale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                  }}
                  draggable={false}
                />
              </div>

              {/* Indicador */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {currentIndex + 1} / {images.length}
                </div>
              )}
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
```

## 📄 src/features/store/components/ProductInfo.jsx
```jsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { formatCurrency } from '@/shared/utils/formatters';
import { MarkdownContent } from '@/shared/components/MarkdownContent';
import { cn } from '@/lib/utils';
import { ShoppingCart, Package, AlertCircle, Share2, Zap, Plus, Minus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useState, useEffect, useMemo } from 'react';
import { Drawer } from 'vaul';

export function ProductInfo({ 
  product, 
  selectedVariation, 
  onSelectVariation, 
  totalPrice 
}) {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [observation, setObservation] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [actionType, setActionType] = useState(''); // 'buy' ou 'cart'
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const hasVariations = product.variations && product.variations.length > 0;
  const availableVariations = hasVariations 
    ? product.variations.filter(v => v.available)
    : [];
  
  // Determinar o estoque máximo
  const maxStock = product.manageStock ? (product.stockQuantity || 0) : 99;
  const canIncreaseQuantity = quantity < maxStock;
  const canDecreaseQuantity = quantity > 1;

  const handleIncreaseQuantity = () => {
    if (canIncreaseQuantity) {
      setQuantity(prev => prev + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (canDecreaseQuantity) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= maxStock) {
      setQuantity(value);
    }
  };

  const handleOpenCheckout = (type) => {
    setActionType(type);
    if (isMobile) {
      setIsDrawerOpen(true);
    } else {
      setIsPopoverOpen(true);
    }
  };

  const handleConfirmAction = () => {
    // Aqui seria a lógica para adicionar ao carrinho ou comprar
    toast({
      title: actionType === 'buy' ? 'Compra iniciada!' : 'Adicionado ao carrinho!',
      description: `${quantity}x ${product.name}${observation ? ' com observação' : ''}`,
    });
    setIsDrawerOpen(false);
    setIsPopoverOpen(false);
    setObservation('');
  };

  const checkoutContent = useMemo(() => (
    <div className="space-y-4">
      {/* Overview do pedido */}
      <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
        <h4 className="font-semibold text-sm">Resumo do Pedido</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Produto:</span>
            <span className="font-medium">{product.name}</span>
          </div>
          {selectedVariation && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Variação:</span>
              <span className="font-medium">{selectedVariation.name}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-muted-foreground">Quantidade:</span>
            <span className="font-medium">{quantity}x</span>
          </div>
          <div className="flex justify-between pt-2 border-t">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-primary text-lg">{formatCurrency(totalPrice * quantity)}</span>
          </div>
        </div>
      </div>

      {/* Observação */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Observações (opcional)</label>
        <Textarea
          value={observation}
          onChange={(e) => setObservation(e.target.value)}
          placeholder="Adicione alguma observação sobre seu pedido..."
          className="min-h-[100px] resize-none"
        />
      </div>

      {/* Botão de confirmação */}
      <Button 
        onClick={handleConfirmAction}
        className="w-full h-12 text-base font-semibold"
        size="lg"
      >
        {actionType === 'buy' ? (
          <>
            <Zap size={20} className="mr-2" />
            Confirmar Compra
          </>
        ) : (
          <>
            <ShoppingCart size={20} className="mr-2" />
            Adicionar ao Carrinho
          </>
        )}
      </Button>
    </div>
  ), [product.name, selectedVariation, quantity, totalPrice, observation, actionType, handleConfirmAction]);

  const handleShare = async () => {
    const url = window.location.href;
    const text = `Confira ${product.name} na Loja do CACO!`;
    
    try {
      // Verificar se o navegador suporta compartilhamento nativo
      if (navigator.share) {
        await navigator.share({
          title: product.name,
          text: text,
          url: url,
        });
        // Toast de sucesso apenas se não for cancelado
        toast({
          title: "Compartilhado com sucesso!",
          description: "O produto foi compartilhado.",
        });
      } else {
        // Fallback: copiar para clipboard
        copyToClipboard(url);
      }
    } catch (error) {
      // Se o usuário cancelar, não mostrar erro
      if (error.name !== 'AbortError') {
        console.error('Erro ao compartilhar:', error);
        // Fallback em caso de erro
        copyToClipboard(url);
      }
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Link copiado!",
      description: "O link do produto foi copiado para a área de transferência.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho com Badge de Status */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{product.name}</h1>
            {product.categoryName && (
              <Badge variant="secondary" className="text-sm font-medium">
                {product.categoryName}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              className="rounded-full"
              title="Compartilhar produto"
            >
              <Share2 size={18} />
            </Button>
            {product.outOfStock && (
              <Badge variant="destructive" className="text-sm whitespace-nowrap">
                Esgotado
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Preço com destaque */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
        <div className="flex items-center gap-3 mt-1">
          <span className="text-3xl md:text-4xl font-bold text-primary">
            {formatCurrency(totalPrice)}
          </span>
          {hasVariations && selectedVariation?.additionalPrice !== 0 && (
            <span className="text-sm text-muted-foreground">
              (Base: {formatCurrency(product.price)})
            </span>
          )}
        </div>
        
        {product.manageStock && !product.outOfStock && (
          <div className="flex items-center gap-2 mt-2 text-sm text-green-600 dark:text-green-500">
            <Package size={16} />
            <span className="font-medium">{product.stockQuantity} disponíveis em estoque</span>
          </div>
        )}
      </div>

      {/* Variações em formato de tag */}
      {hasVariations && (
        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Escolha uma opção
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.variations.map((variation) => (
              <button
                key={variation.id}
                onClick={() => variation.available && onSelectVariation(variation)}
                disabled={!variation.available}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border-2",
                  selectedVariation?.id === variation.id
                    ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                    : variation.available
                    ? "bg-background border-gray-300 dark:border-gray-600 hover:border-primary hover:scale-105"
                    : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-50 cursor-not-allowed line-through"
                )}
              >
                <span>{variation.name}</span>
                {variation.additionalPrice !== 0 && (
                  <span className={cn(
                    "text-[10px]",
                    selectedVariation?.id === variation.id 
                      ? "text-primary-foreground/90" 
                      : "text-muted-foreground"
                  )}>
                    {variation.additionalPrice > 0 ? '+' : ''}
                    {formatCurrency(variation.additionalPrice)}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Descrição */}
      {product.description && (
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Sobre o produto
          </h3>
          <div className="text-foreground/80">
            <MarkdownContent content={product.description} />
          </div>
        </div>
      )}

      {/* Seletor de Quantidade */}
      {!product.outOfStock && (availableVariations.length > 0 || !hasVariations) && (
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide whitespace-nowrap">
            Quantidade:
          </h3>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handleDecreaseQuantity}
              disabled={!canDecreaseQuantity}
              className="h-9 w-9 rounded-lg"
            >
              <Minus size={14} />
            </Button>
            <input
              type="number"
              min="1"
              max={maxStock}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 h-9 text-center border-2 border-input bg-background text-foreground rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={handleIncreaseQuantity}
              disabled={!canIncreaseQuantity}
              className="h-9 w-9 rounded-lg"
            >
              <Plus size={14} />
            </Button>
            {product.manageStock && (
              <span className="text-xs text-muted-foreground ml-1 whitespace-nowrap">
                (Máx: {maxStock})
              </span>
            )}
          </div>
        </div>
      )}

      {/* Botões de Ação */}
      <div className="space-y-3 pt-4">
        {product.outOfStock ? (
          <div className="flex items-center gap-2 text-muted-foreground justify-center py-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <AlertCircle size={20} />
            <span className="font-medium">Produto esgotado</span>
          </div>
        ) : availableVariations.length === 0 && hasVariations ? (
          <div className="flex items-center gap-2 text-muted-foreground justify-center py-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <AlertCircle size={20} />
            <span className="font-medium">Nenhuma opção disponível no momento</span>
          </div>
        ) : (
          <>
            {!isMobile ? (
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button 
                    className="w-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all rounded-xl"
                    size="lg"
                    disabled={hasVariations && !selectedVariation?.available}
                    onClick={() => handleOpenCheckout('buy')}
                  >
                    <Zap size={22} className="mr-2" />
                    Comprar Agora
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-6" side="bottom" align="center" sideOffset={10}>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      {actionType === 'buy' ? 'Comprar Agora' : 'Adicionar ao Carrinho'}
                    </h3>
                    {checkoutContent}
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <Button 
                className="w-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all rounded-xl"
                size="lg"
                disabled={hasVariations && !selectedVariation?.available}
                onClick={() => handleOpenCheckout('buy')}
              >
                <Zap size={22} className="mr-2" />
                Comprar Agora
              </Button>
            )}
            
            <Button 
              variant="outline"
              className="w-full h-14 text-lg font-semibold border-2 hover:bg-primary/5 rounded-xl"
              size="lg"
              disabled={hasVariations && !selectedVariation?.available}
              onClick={() => handleOpenCheckout('cart')}
            >
              <ShoppingCart size={22} className="mr-2" />
              Adicionar ao Carrinho
            </Button>
          </>
        )}
      </div>

      {/* Drawer para Mobile */}
      <Drawer.Root 
        open={isDrawerOpen} 
        onOpenChange={setIsDrawerOpen}
        dismissible={true}
        shouldScaleBackground={false}
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-40 bg-black/40" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-[10px] bg-background max-h-[96vh] [&_[vaul-drawer-visible]]:!pb-0">
            {/* Handle para arrastar */}
            <div className="mx-auto mt-4 h-1.5 w-12 flex-shrink-0 rounded-full bg-muted-foreground/30" />
            
            <div className="overflow-y-auto p-6 pb-8">
              <div className="mx-auto max-w-md">
                <h2 className="text-lg font-semibold mb-6">
                  {actionType === 'buy' ? 'Comprar Agora' : 'Adicionar ao Carrinho'}
                </h2>
                {checkoutContent}
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
```

## 📄 src/features/store/useProductDetailVM.js
```javascript
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { storeService } from '@/shared/services/storeService';

export function useProductDetailVM() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProduct();
  }, [slug]);

  const loadProduct = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await storeService.getPublicProductBySlug(slug);
      setProduct(data);
      
      // Seleciona a primeira variação disponível, se houver
      if (data.variations && data.variations.length > 0) {
        const firstAvailable = data.variations.find(v => v.available);
        setSelectedVariation(firstAvailable || data.variations[0]);
      }
    } catch (err) {
      if (err.message?.includes('404')) {
        setError('Produto não encontrado');
      } else {
        setError(err.message || 'Erro ao carregar produto');
      }
    } finally {
      setLoading(false);
    }
  };

  const selectVariation = (variation) => {
    setSelectedVariation(variation);
  };

  const nextImage = () => {
    if (product?.images && product.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (product?.images && product.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const getTotalPrice = () => {
    if (!product) return 0;
    const basePrice = product.price || 0;
    const variationPrice = selectedVariation?.additionalPrice || 0;
    return basePrice + variationPrice;
  };

  const goBack = () => {
    navigate('/loja');
  };

  return {
    product,
    selectedVariation,
    currentImageIndex,
    loading,
    error,
    selectVariation,
    nextImage,
    previousImage,
    goToImage,
    getTotalPrice,
    goBack,
  };
}
```

## 📄 src/features/store/useStoreVM.js
```javascript
import { useState, useEffect } from 'react';
import { storeService } from '@/shared/services/storeService';

export function useStoreVM() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carrega categorias inicialmente
  useEffect(() => {
    loadCategories();
  }, []);

  // Carrega produtos quando categoria muda
  useEffect(() => {
    if (selectedCategory) {
      loadProducts(selectedCategory.slug);
    } else {
      setProducts([]);
    }
  }, [selectedCategory]);

  const loadCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await storeService.getPublicCategories();
      setCategories(data);
      
      // Seleciona a primeira categoria por padrão
      if (data.length > 0) {
        setSelectedCategory(data[0]);
      }
    } catch (err) {
      setError(err.message || 'Erro ao carregar categorias');
    } finally {
      setLoading(false);
    }
  };

  const loadProducts = async (categorySlug) => {
    try {
      setError(null);
      const data = await storeService.getPublicProductsByCategory(categorySlug);
      setProducts(data);
    } catch (err) {
      setError(err.message || 'Erro ao carregar produtos');
    }
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  return {
    categories,
    selectedCategory,
    products,
    loading,
    error,
    selectCategory,
  };
}
```

## 📄 src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    
    --primary: 142 76% 36%;
    --primary-foreground: 0 0% 100%;
    
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    
    --radius: 0.5rem;
    
    --chart-1: 12 76% 61%;
    
    --chart-2: 173 58% 39%;
    
    --chart-3: 197 37% 24%;
    
    --chart-4: 43 74% 66%;
    
    --chart-5: 27 87% 67%;
  }
  
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    
    --primary: 142 76% 36%;
    --primary-foreground: 0 0% 100%;
    
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: system-ui, -apple-system, sans-serif;
  }
}
```

## 📄 src/lib/utils.js
```javascript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function extractUrlFromIframe(input) {
  if (input.includes('<iframe') && input.includes('src="')) {
    const match = input.match(/src="([^"]+)"/);
    if (match && match[1]) {
      return match[1];
    }
  }
  return input;
}
```

## 📄 src/main.jsx
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## 📄 src/shared/components/Footer.jsx
```jsx
import { Link } from 'react-router-dom';
import { Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const email = import.meta.env.VITE_EMAIL;
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL;
  const whatsappUrl = import.meta.env.VITE_WHATSAPP_COMMUNITY_URL;

  return (
    <footer className="border-t bg-muted/40 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-3">CACo</h3>
            <p className="text-sm text-muted-foreground">
              Centro Acadêmico da Computação - Unicamp
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/manual" className="text-muted-foreground hover:text-primary">
                  Manual do Calouro
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="text-muted-foreground hover:text-primary">
                  Notícias
                </Link>
              </li>
              <li>
                <Link to="/calendario" className="text-muted-foreground hover:text-primary">
                  Calendário
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Contato</h3>
            <div className="space-y-3">
              {/* Email com texto explícito */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 shrink-0"
                  asChild
                >
                  <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <a 
                  href={`mailto:${email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>

              {/* Botões de redes sociais */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9"
                  asChild
                >
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer" title="Instagram">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" title="Comunidade WhatsApp">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Espaço para arte decorativa */}
          <div className="hidden md:flex items-center justify-end">
            <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-primary/20 flex items-center justify-center">
              <p className="text-xs text-muted-foreground text-center px-4">
                Arte decorativa
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          © {currentYear} CACo - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
```

## 📄 src/shared/components/Header.jsx
```jsx
import { Link, useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { authService } from '@/shared/services/authService';
import { HeaderSearchBar } from './HeaderSearchBar';
import { ProfilePopover } from './ProfilePopover';
import { NavigationMenu } from './NavigationMenu';
import { ThemeToggle } from './ThemeToggle';
import { useScrollDirection } from '@/shared/hooks/useScrollDirection';

export function Header() {
  const navigate = useNavigate();
  const isAuthenticated = authService.isAuthenticated();
  const isVisible = useScrollDirection();

  return (
    <header 
      className={`border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center gap-3">
          {/* Navigation Menu Button */}
          <NavigationMenu />

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl shrink-0">
            <Home className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline">CACo</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <HeaderSearchBar />
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-2 shrink-0 ml-auto">
            {isAuthenticated ? (
              <ProfilePopover />
            ) : (
              <>
                <ThemeToggle />
                <Button size="sm" asChild>
                  <Link to="/login">Entrar</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
```

## 📄 src/shared/components/HeaderSearchBar.jsx
```jsx
import { useNavigate } from 'react-router-dom';
import { Search, X, Loader2, FileText, Calendar, Newspaper } from 'lucide-react';
import { useHeaderSearch } from '@/shared/hooks/useHeaderSearch';
import { Input } from '@/components/ui/input';
import { useRef, useEffect } from 'react';

export function HeaderSearchBar() {
  const navigate = useNavigate();
  const { query, results, loading, isOpen, handleQueryChange, closeDropdown, clearSearch } = useHeaderSearch();
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeDropdown]);

  const handleResultClick = (result) => {
    let path = '/';
    
    switch (result.type) {
      case 'news':
        path = `/noticias/${result.id}`;
        break;
      case 'manual':
        path = `/manual?page=${result.slug || result.id}`;
        break;
      case 'event':
        path = `/eventos/${result.id}`;
        break;
      default:
        path = '/';
    }

    navigate(path);
    clearSearch();
    inputRef.current?.blur();
  };

  const getIcon = (type) => {
    switch (type) {
      case 'news':
        return <Newspaper className="h-4 w-4 text-blue-500" />;
      case 'manual':
        return <FileText className="h-4 w-4 text-green-500" />;
      case 'event':
        return <Calendar className="h-4 w-4 text-purple-500" />;
      default:
        return <Search className="h-4 w-4" />;
    }
  };

  return (
    <div className="relative w-full max-w-xl" ref={dropdownRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Buscar notícias, eventos, manual..."
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          className="pl-9 pr-9"
        />
        {loading && (
          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground animate-spin" />
        )}
        {query && !loading && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Dropdown de Resultados */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-popover border rounded-md shadow-lg max-h-96 overflow-y-auto z-50">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <button
                  key={`${result.type}-${result.id}-${index}`}
                  onClick={() => handleResultClick(result)}
                  className="w-full px-4 py-3 hover:bg-accent text-left transition-colors flex items-start gap-3"
                >
                  <div className="mt-1">{getIcon(result.type)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-muted-foreground font-medium">
                        {result.label}
                      </span>
                    </div>
                    <p className="font-medium text-sm truncate">
                      {result.title}
                    </p>
                    {result.excerpt && (
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                        {result.excerpt}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-muted-foreground text-sm">
              Nenhum resultado encontrado
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

## 📄 src/shared/components/ImageUploadDialog.jsx
```jsx
/**
 * Dialog customizado para upload de imagem com feedback de progresso
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { imageUploadService } from '../services/imageUploadService';
import { useToast } from '@/components/ui/use-toast';

export const ImageUploadDialog = ({ isOpen, onClose, onImageUploaded, imageFile }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);
  const { toast } = useToast();

  // Quando o imageFile é passado (vindo do MDXEditor), usa ele automaticamente
  useEffect(() => {
    if (imageFile && isOpen) {
      handleFileSelect(null, imageFile);
    }
  }, [imageFile, isOpen]);

  const handleFileSelect = (event, directFile = null) => {
    const file = directFile || event?.target?.files?.[0];
    if (!file) return;

    // Validação de tipo de arquivo
    if (!file.type.startsWith('image/')) {
      toast({
        variant: 'destructive',
        title: 'Arquivo inválido',
        description: 'Por favor, selecione uma imagem.',
      });
      return;
    }

    // Validação de tamanho (5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast({
        variant: 'destructive',
        title: 'Arquivo muito grande',
        description: 'A imagem deve ter no máximo 5MB.',
      });
      return;
    }

    setSelectedFile(file);

    // Cria preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const url = await imageUploadService.uploadImageWithProgress(
        selectedFile,
        (progress) => {
          setUploadProgress(progress);
        }
      );

      toast({
        title: 'Imagem enviada',
        description: 'A imagem foi carregada com sucesso.',
      });

      // Retorna a URL para o editor
      onImageUploaded(url);
      handleClose();
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      toast({
        variant: 'destructive',
        title: 'Erro no upload',
        description: error.message || 'Não foi possível enviar a imagem.',
      });
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleClose = () => {
    if (isUploading) return; // Não permite fechar durante upload
    setSelectedFile(null);
    setPreviewUrl(null);
    setUploadProgress(0);
    setIsUploading(false);
    onClose();
  };

  // Auto-upload quando arquivo é selecionado via MDXEditor
  useEffect(() => {
    if (selectedFile && imageFile && isOpen && !isUploading) {
      // Pequeno delay para mostrar o preview antes de iniciar upload
      const timer = setTimeout(() => {
        handleUpload();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [selectedFile, imageFile, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md z-[60]">
        <DialogHeader>
          <DialogTitle>Upload de Imagem</DialogTitle>
          <DialogDescription>
            {imageFile 
              ? 'A imagem está sendo preparada para upload...'
              : 'Selecione uma imagem para adicionar ao conteúdo (máx. 5MB)'
            }
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Input de arquivo - apenas mostra se não veio do editor */}
          {!imageFile && (
            <div>
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                disabled={isUploading}
                className="cursor-pointer"
              />
            </div>
          )}

          {/* Preview da imagem */}
          {previewUrl && (
            <div className="border rounded-lg p-4 bg-gray-50">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-48 mx-auto rounded"
              />
              <p className="text-sm text-center text-muted-foreground mt-2">
                {selectedFile?.name}
              </p>
            </div>
          )}

          {/* Barra de progresso */}
          {isUploading && (
            <div className="space-y-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Enviando... {uploadProgress}%
              </p>
            </div>
          )}
        </div>

        <DialogFooter className="gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={isUploading}
          >
            Cancelar
          </Button>
          {!imageFile && (
            <Button
              type="button"
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
            >
              {isUploading ? 'Enviando...' : 'Upload'}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImageUploadDialog;
```

## 📄 src/shared/components/MDXEditor.css
```css
/* src/shared/components/MDXEditor.css */

/* =========================================
   1. Variáveis e Escopo Principal
   ========================================= */
.mdx-editor-wrapper {
  /* Mapeamento de Cores */
  --baseBase: hsl(var(--background));
  --baseBg: hsl(var(--background));
  --baseBgSubtle: hsl(var(--muted));
  
  --baseBgHover: hsl(var(--accent));
  --baseBgActive: hsl(var(--accent));
  
  --baseLine: hsl(var(--border));
  --baseBorder: hsl(var(--border));
  --baseBorderHover: hsl(var(--ring));
  
  --baseText: hsl(var(--foreground));
  --baseTextContrast: hsl(var(--background));
  
  --accentBase: hsl(var(--primary));
  --accentBg: hsl(var(--primary) / 0.1);
  --accentBgHover: hsl(var(--primary) / 0.2);
  --accentBgActive: hsl(var(--primary) / 0.3);
  
  --accentText: hsl(var(--primary));
  --accentBorder: hsl(var(--primary));

  font-family: inherit;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  background-color: hsl(var(--background));
  transition: all 0.2s ease-in-out;
}

/* =========================================
   2. Toolbar e Botões
   ========================================= */
.mdx-editor-wrapper .mdxeditor-toolbar {
  background-color: hsl(var(--muted)) !important;
  border-bottom: 1px solid hsl(var(--border));
  padding: 0.5rem;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
}

.mdx-editor-wrapper .mdxeditor-toolbar button {
  cursor: pointer !important;
  color: hsl(var(--foreground));
}

.mdx-editor-wrapper .mdxeditor-toolbar button:hover {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

/* Trigger do Dropdown (Paragraph, etc) */
.mdx-editor-wrapper button[role="combobox"] {
  background-color: transparent !important;
  color: hsl(var(--foreground)) !important;
}

.mdx-editor-wrapper button[role="combobox"]:hover {
  background-color: hsl(var(--accent)) !important;
  color: hsl(var(--accent-foreground)) !important;
}

/* =========================================
   3. Elementos Globais / Portals (CORREÇÃO AQUI)
   Estes elementos ficam fora do .mdx-editor-wrapper no DOM
   ========================================= */

/* --- Dropdowns (Selects) --- */
.mdxeditor-select-content {
  background-color: hsl(var(--popover)) !important;
  border: 1px solid hsl(var(--border)) !important;
  border-radius: var(--radius) !important;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  padding: 4px !important;
  z-index: 50 !important;
}

.mdxeditor-select-item {
  color: hsl(var(--popover-foreground)) !important;
  border-radius: 2px !important;
  cursor: pointer !important;
  outline: none !important;
}

.mdxeditor-select-item[data-highlighted] {
  background-color: hsl(var(--accent)) !important;
  color: hsl(var(--accent-foreground)) !important;
}

.mdxeditor-select-item-indicator {
  color: hsl(var(--primary)) !important;
}

/* --- Popups e Dialogs (Link, Imagem) --- */
/* Removemos o aninhamento .mdx-editor-wrapper para funcionar globalmente */

.mdxeditor-popup-container {
  z-index: 50 !important;
}

/* O cartão do formulário (Inserir Link/Imagem) */
.mdxeditor-popup-container [role="dialog"], 
.mdxeditor-popup-container form {
  background-color: hsl(var(--popover)) !important;
  color: hsl(var(--popover-foreground)) !important;
  border: 1px solid hsl(var(--border)) !important;
  border-radius: var(--radius) !important;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1) !important;
}

/* Botões dentro dos popups (Salvar/Cancelar) */
.mdxeditor-popup-container button {
  cursor: pointer !important;
}

/* Inputs dentro dos popups */
.mdxeditor-popup-container input[type="text"] {
  background-color: hsl(var(--input)) !important;
  color: hsl(var(--foreground)) !important;
  border: 1px solid hsl(var(--border)) !important;
}

/* =========================================
   4. Área de Edição (Conteúdo)
   ========================================= */
.mdx-editor-wrapper .mdxeditor-root-contenteditable {
  padding: 1rem;
  min-height: 300px;
  max-height: 600px;
  overflow-y: auto;
  color: hsl(var(--foreground));
  background-color: hsl(var(--background));
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}

.mdx-editor-wrapper .mdxeditor-root-contenteditable:focus {
  outline: none;
}

/* =========================================
   5. Estilização do Markdown Renderizado
   ========================================= */
.mdx-editor-wrapper img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius);
  margin: 1rem 0;
  border: 1px solid hsl(var(--border));
}

.mdx-editor-wrapper table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.mdx-editor-wrapper th,
.mdx-editor-wrapper td {
  border: 1px solid hsl(var(--border));
  padding: 0.5rem;
  text-align: left;
}

.mdx-editor-wrapper th {
  background-color: hsl(var(--muted));
  font-weight: 600;
}

.mdx-editor-wrapper a {
  color: hsl(var(--primary));
  text-decoration: underline;
  text-underline-offset: 4px;
}

.mdx-editor-wrapper h1, 
.mdx-editor-wrapper h2, 
.mdx-editor-wrapper h3 {
  color: hsl(var(--foreground));
  font-weight: 600;
  line-height: 1.25;
}

.mdx-editor-wrapper h1 { font-size: 2em; margin: 0.67em 0; }
.mdx-editor-wrapper h2 { font-size: 1.5em; margin: 0.75em 0; border-bottom: 1px solid hsl(var(--border)); padding-bottom: 0.3em;}

/* Blocos de Código */
.mdx-editor-wrapper pre {
  background-color: hsl(var(--secondary));
  padding: 1rem;
  border-radius: var(--radius);
  overflow-x: auto;
}

.mdx-editor-wrapper code {
  font-family: var(--font-mono);
  font-size: 0.875em;
}

.mdx-editor-wrapper :not(pre) > code {
  background-color: hsl(var(--muted));
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
}
```

## 📄 src/shared/components/MDXEditor.jsx
```jsx
import React, { useState, useRef } from 'react';
import {
  MDXEditor as BaseMDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  tablePlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  CreateLink,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  Separator,
  CodeToggle,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import './MDXEditor.css';
import { useToast } from '@/components/ui/use-toast';
import { ImageUploadDialog } from './ImageUploadDialog';
import { useTheme } from '../contexts/ThemeContext';

export const MDXEditor = ({
  value = '',
  onChange,
  placeholder = 'Digite aqui...',
  className = '',
  readOnly = false,
  editorKey,
}) => {
  const { toast } = useToast();
  // Obtém o tema atual para passar a classe correta ao editor
  const { theme } = useTheme(); 
  
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const uploadResolveRef = useRef(null);

  const handleImageUpload = async (image) => {
    if (isUploading) {
      throw new Error('Já existe um upload em andamento');
    }

    setIsUploading(true);
    setIsUploadDialogOpen(true);

    return new Promise((resolve, reject) => {
      uploadResolveRef.current = { resolve, reject, image };
    });
  };

  const handleImageUploaded = (url) => {
    if (uploadResolveRef.current) {
      uploadResolveRef.current.resolve(url);
      uploadResolveRef.current = null;
    }
    setIsUploading(false);
    setIsUploadDialogOpen(false);
  };

  const handleUploadCancel = () => {
    if (uploadResolveRef.current) {
      uploadResolveRef.current.reject(new Error('Upload cancelado'));
      uploadResolveRef.current = null;
    }
    setIsUploading(false);
    setIsUploadDialogOpen(false);
  };

  return (
    <div className={`mdx-editor-wrapper ${className}`}>
      <BaseMDXEditor
        key={editorKey}
        markdown={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        // Aplica a classe 'dark-theme' se o tema for escuro. 
        // Isso ativa as variáveis internas de cor do MDXEditor.
        className={theme === 'dark' ? 'dark-theme' : ''}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          tablePlugin(),
          codeBlockPlugin({ defaultCodeBlockLanguage: 'javascript' }),
          codeMirrorPlugin({
            codeBlockLanguages: {
              javascript: 'JavaScript',
              typescript: 'TypeScript',
              python: 'Python',
              java: 'Java',
              css: 'CSS',
              html: 'HTML',
              json: 'JSON',
              bash: 'Bash',
              sql: 'SQL'
            },
          }),
          imagePlugin({
            imageUploadHandler: handleImageUpload,
          }),
          markdownShortcutPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <Separator />
                <BoldItalicUnderlineToggles />
                <CodeToggle />
                <Separator />
                <BlockTypeSelect />
                <Separator />
                <ListsToggle />
                <Separator />
                <CreateLink />
                <InsertImage />
                <Separator />
                <InsertTable />
                <InsertThematicBreak />
              </>
            ),
          }),
        ]}
      />

      <ImageUploadDialog
        isOpen={isUploadDialogOpen}
        onClose={handleUploadCancel}
        onImageUploaded={handleImageUploaded}
        imageFile={uploadResolveRef.current?.image}
      />
    </div>
  );
};

export default MDXEditor;
```

## 📄 src/shared/components/MainLayout.jsx
```jsx
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

## 📄 src/shared/components/MarkdownContent.jsx
```jsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export function MarkdownContent({ content }) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl font-semibold mt-4 mb-2" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-4 leading-relaxed" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-primary pl-4 italic my-4"
              {...props}
            />
          ),
          code: ({ node, inline, ...props }) =>
            inline ? (
              <code
                className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              />
            ) : (
              <code
                className="block bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono"
                {...props}
              />
            ),
          img: ({ node, ...props }) => (
            <img
              className="rounded-lg my-6 max-w-full h-auto mx-auto block"
              loading="lazy"
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a
              className="text-primary hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
```

## 📄 src/shared/components/NavigationMenu.jsx
```jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Newspaper, BookOpen, Calendar, GraduationCap, Home, ShoppingBag, MessageSquare, Archive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navigationItems = [
  { to: '/', label: 'Início', icon: Home, color: 'hover:bg-gray-100 dark:hover:bg-gray-800' },
  { to: '/noticias', label: 'Notícias', icon: Newspaper, color: 'hover:bg-red-100 hover:text-red-900 dark:hover:bg-red-900 dark:hover:text-red-100' },
  { to: '/manual', label: 'Manual do Calouro', icon: BookOpen, color: 'hover:bg-yellow-100 hover:text-yellow-900 dark:hover:bg-yellow-900 dark:hover:text-yellow-100' },
  { to: '/calendario', label: 'Calendário', icon: Calendar, color: 'hover:bg-green-100 hover:text-green-900 dark:hover:bg-green-900 dark:hover:text-green-100' },
  { to: '/provas', label: 'Banco de Provas', icon: GraduationCap, color: 'hover:bg-blue-100 hover:text-blue-900 dark:hover:bg-blue-900 dark:hover:text-blue-100' },
  { to: '/loja', label: 'Loja', icon: ShoppingBag, color: 'hover:bg-purple-100 hover:text-purple-900 dark:hover:bg-purple-900 dark:hover:text-purple-100' },
  { to: '/espaco-de-fala', label: 'Espaço de Fala', icon: MessageSquare, color: 'hover:bg-pink-100 hover:text-pink-900 dark:hover:bg-pink-900 dark:hover:text-pink-100' },
  { to: '/gaveta', label: 'Gaveta do CACo', icon: Archive, color: 'hover:bg-orange-100 hover:text-orange-900 dark:hover:bg-orange-900 dark:hover:text-orange-100' },
];

export function NavigationMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="shrink-0">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[320px]">
        <SheetHeader>
          <SheetTitle className="text-left">Navegação</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.to}
                variant="ghost"
                asChild
                className={`justify-start h-auto py-3 px-4 ${item.color}`}
                onClick={() => setOpen(false)}
              >
                <Link to={item.to} className="flex items-center gap-3">
                  <Icon className="h-5 w-5" />
                  <span className="text-base">{item.label}</span>
                </Link>
              </Button>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
```

## 📄 src/shared/components/ProfilePopover.jsx
```jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut, Shield, Sun, Moon, Monitor, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { authService } from '@/shared/services/authService';
import { useTheme } from '@/shared/contexts/ThemeContext';

export function ProfilePopover() {
  const navigate = useNavigate();
  const user = authService.getUser();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    setOpen(false);
    authService.logout();
    navigate('/');
  };

  const handleNavigate = () => {
    setOpen(false);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      case 'system':
        return <Monitor className="h-4 w-4" />;
      default:
        return <Sun className="h-4 w-4" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Claro';
      case 'dark':
        return 'Escuro';
      case 'system':
        return 'Sistema';
      default:
        return 'Claro';
    }
  };

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="rounded-full p-0 h-8 w-8">
          {user?.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="h-8 w-8 rounded-full object-cover border-2 border-primary"
            />
          ) : (
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <div className="space-y-3">
          {/* User Info */}
          <div className="flex items-center gap-3 pb-3 border-b">
            {user?.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="h-10 w-10 rounded-full object-cover border-2 border-primary"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start"
              size="sm"
              asChild
            >
              <Link to="/perfil" onClick={handleNavigate}>
                <User className="h-4 w-4 mr-2" />
                Meu Perfil
              </Link>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start"
              size="sm"
              asChild
            >
              <Link to="/carrinho" onClick={handleNavigate}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Minhas comprinhas
              </Link>
            </Button>

            {user?.role === 'ADMIN' && (
              <Button
                variant="ghost"
                className="w-full justify-start"
                size="sm"
                asChild
              >
                <Link to="/admin" onClick={handleNavigate}>
                  <Shield className="h-4 w-4 mr-2" />
                  Admin
                </Link>
              </Button>
            )}

            {/* Theme Toggle */}
            <div className="pt-2 border-t">
              <Button
                variant="ghost"
                className="w-full justify-start"
                size="sm"
                onClick={cycleTheme}
              >
                {getThemeIcon()}
                <span className="ml-2">Tema: {getThemeLabel()}</span>
              </Button>
            </div>

            <Button
              variant="ghost"
              className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
              size="sm"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

## 📄 src/shared/components/ProtectedRoute.jsx
```jsx
import { Navigate } from 'react-router-dom';
import { authService } from '@/shared/services/authService';

export function ProtectedRoute({ children, requireAdmin = false }) {
  const isAuthenticated = authService.isAuthenticated();
  const isAdmin = authService.isAdmin();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
}
```

## 📄 src/shared/components/SessionExpiryWarning.jsx
```jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/shared/services/authService';
import { useToast } from '@/components/ui/use-toast.jsx';

export function SessionExpiryWarning() {
  const [hasWarned, setHasWarned] = useState(false);
  const [hasShownExpiryAlert, setHasShownExpiryAlert] = useState(false);
  const [wasAuthenticated, setWasAuthenticated] = useState(authService.isAuthenticated());
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Atualiza o estado inicial de autenticação
    setWasAuthenticated(authService.isAuthenticated());
  }, []);

  useEffect(() => {
    // Verifica a cada minuto se a sessão está próxima de expirar
    const interval = setInterval(() => {
      const isCurrentlyAuthenticated = authService.isAuthenticated();
      
      // Se estava autenticado e agora não está mais, a sessão expirou
      if (wasAuthenticated && !isCurrentlyAuthenticated && !hasShownExpiryAlert) {
        if (window.location.pathname !== '/login') {
          toast({
            variant: 'destructive',
            title: 'Sessão expirada',
            description: 'Sua sessão expirou. Por favor, faça login novamente.',
          });
          navigate('/login');
          setHasShownExpiryAlert(true); // Marca que o alerta já foi mostrado
          setWasAuthenticated(false);
        }
        return;
      }

      // Atualiza o estado de autenticação
      if (isCurrentlyAuthenticated && !wasAuthenticated) {
        setWasAuthenticated(true);
        setHasWarned(false); // Reset do aviso quando logar novamente
        setHasShownExpiryAlert(false); // Reset do alerta de expiração quando logar novamente
      }

      // Avisa quando faltam menos de 5 minutos (apenas se estiver autenticado)
      if (isCurrentlyAuthenticated && authService.shouldWarnExpiry() && !hasWarned) {
        const timeLeft = authService.getTimeUntilExpiryFormatted();
        toast({
          title: 'Sessão expirando',
          description: `Sua sessão irá expirar em ${timeLeft}. Salve seu trabalho.`,
        });
        setHasWarned(true);
      }
    }, 60000); // Verifica a cada 1 minuto

    return () => clearInterval(interval);
  }, [hasWarned, wasAuthenticated, hasShownExpiryAlert, navigate, toast]);

  return null; // Componente invisível
}
```

## 📄 src/shared/components/ThemeToggle.jsx
```jsx
import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/shared/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      case 'system':
        return <Monitor className="h-4 w-4" />;
      default:
        return <Sun className="h-4 w-4" />;
    }
  };

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={cycleTheme}
      title={`Tema: ${theme === 'light' ? 'Claro' : theme === 'dark' ? 'Escuro' : 'Sistema'}`}
    >
      {getThemeIcon()}
    </Button>
  );
}
```

## 📄 src/shared/contexts/ThemeContext.jsx
```jsx
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const THEME_KEY = 'caco_theme_preference';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    return savedTheme || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove todas as classes de tema
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Listener para mudanças do tema do sistema
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

## 📄 src/shared/hooks/useHeaderSearch.js
```javascript
import { useState, useEffect } from 'react';
import { contentService } from '@/shared/services/contentService';
import { debounce } from '@/shared/utils/helpers';

export function useHeaderSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchContent = debounce(async () => {
      setLoading(true);
      try {
        // Buscar em diferentes categorias
        const [newsResults, manualResults, eventsResults] = await Promise.all([
          contentService.getNews({ search: query, limit: 3 }),
          contentService.getManualPages({ search: query, limit: 3 }),
          contentService.getEvents({ search: query, limit: 3 }),
        ]);

        const combinedResults = [
          ...newsResults.data.map(item => ({ ...item, type: 'news', label: 'Notícia' })),
          ...manualResults.data.map(item => ({ ...item, type: 'manual', label: 'Manual' })),
          ...eventsResults.data.map(item => ({ ...item, type: 'event', label: 'Evento' })),
        ];

        setResults(combinedResults);
        setIsOpen(combinedResults.length > 0);
      } catch (error) {
        console.error('Erro ao buscar:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    searchContent();
  }, [query]);

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return {
    query,
    results,
    loading,
    isOpen,
    handleQueryChange,
    closeDropdown,
    clearSearch,
  };
}
```

## 📄 src/shared/hooks/useImageCropper.js
```javascript
import { useState, useCallback, useEffect } from 'react';
import { getCroppedImg } from '@/shared/utils/imageCrop';

/**
 * Hook to manage image uploading, cropping and removal.
 * @param {string|null} initialImageUrl - Initial URL of the image (for editing mode)
 */
export function useImageCropper(initialImageUrl = null) {
  const [imageSrc, setImageSrc] = useState(null); // The source image for cropping (Base64)
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  
  const [previewUrl, setPreviewUrl] = useState(initialImageUrl); // The final cropped image URL for display
  const [file, setFile] = useState(null); // The final File object to send to backend
  const [isRemoved, setIsRemoved] = useState(false); // Flag indicating if the initial image was removed
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initialize/Reset when initialImageUrl changes
  useEffect(() => {
    if (initialImageUrl) {
        setPreviewUrl(initialImageUrl);
        setIsRemoved(false);
    }
  }, [initialImageUrl]);

  // Cleanup object URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      if (previewUrl && previewUrl.startsWith('blob:')) {
        URL.revokeObjectURL(previewUrl);
      }
      if (imageSrc && imageSrc.startsWith('blob:')) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [previewUrl, imageSrc]);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileSelect = useCallback((e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // TODO: Add file validation here if needed (size, type)

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setZoom(1);
      setIsModalOpen(true);
      // Reset input
      e.target.value = ''; 
    };
    reader.readAsDataURL(selectedFile);
  }, []);

  const handleCropConfirm = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
      const newFile = new File([croppedBlob], `image-${Date.now()}.jpg`, { type: 'image/jpeg' });
      const newUrl = URL.createObjectURL(croppedBlob);

      setPreviewUrl(newUrl);
      setFile(newFile);
      setIsRemoved(false); // We have a new image, so it's not "removed"
      
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      setError('Erro ao recortar imagem');
    } finally {
      setLoading(false);
    }
  }, [imageSrc, croppedAreaPixels]);

  const handleRemove = useCallback(() => {
    if (previewUrl && previewUrl.startsWith('blob:')) {
        URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setFile(null);
    setIsRemoved(true); // Mark as removed so backend knows to delete the old image
  }, [previewUrl]);

  const handleCancelCrop = useCallback(() => {
     setIsModalOpen(false);
     setImageSrc(null);
  }, []);

  const reset = useCallback(() => {
      setPreviewUrl(initialImageUrl);
      setFile(null);
      setIsRemoved(false);
      setImageSrc(null);
      setIsModalOpen(false);
  }, [initialImageUrl]);

  return {
    // State
    imageSrc,
    crop,
    zoom,
    previewUrl,
    file,
    isRemoved,
    isModalOpen,
    loading,
    error,

    // Setters
    setCrop,
    setZoom,
    setIsModalOpen,

    // Actions
    onCropComplete,
    handleFileSelect,
    handleCropConfirm,
    handleRemove,
    handleCancelCrop,
    reset
  };
}
```

## 📄 src/shared/hooks/useScrollDirection.js
```javascript
import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Se está no topo, sempre mostra
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Se rolou para baixo, esconde
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } 
      // Se rolou para cima, mostra
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Adiciona throttle para performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [lastScrollY]);

  return isVisible;
}
```

## 📄 src/shared/services/analyticsService.js
```javascript
class AnalyticsService {
  track(event, data = {}) {
    // Implementação básica de analytics
    console.log('[Analytics]', event, data);
    
    // Aqui você pode integrar com Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, data);
    }
  }

  trackPageView(path) {
    this.track('page_view', { page_path: path });
  }

  trackEvent(name, category, label, value) {
    this.track(name, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export const analyticsService = new AnalyticsService();
```

## 📄 src/shared/services/apiClient.js
```javascript
/**
 * Cliente HTTP centralizado para todas as chamadas à API
 */

import { authService } from './authService';

const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000')+'/api';

class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   * Monta headers padrão para todas as requisições
   */
  getHeaders(customHeaders = {}, isFormData = false) {
    const headers = {
      ...customHeaders,
    };

    // Não definir Content-Type para FormData (deixa o browser definir com boundary)
    if (!isFormData) {
      headers['Content-Type'] = 'application/json';
    }

    // Adiciona token de autenticação se disponível
    const token = authService.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  /**
   * Monta URL completa
   */
  buildUrl(endpoint) {
    // Remove barra inicial do endpoint se existir
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    return `${this.baseUrl}/${cleanEndpoint}`;
  }

  /**
   * Trata erros da API
   */
  async handleResponse(response) {
    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`);
      }

      // Se seguir o padrão ErrorResponseDTO
      if (errorData.message) {
        throw new Error(errorData.message);
      }

      throw new Error(errorData.error || 'Erro desconhecido');
    }

    // Se resposta vazia (204 No Content ou corpo vazio)
    if (response.status === 204) {
      return null;
    }

    // Verifica se há conteúdo antes de fazer parse
    const text = await response.text();
    if (!text || text.trim() === '') {
      return null;
    }

    try {
      return JSON.parse(text);
    } catch (error) {
      console.error('Erro ao fazer parse do JSON:', text);
      throw new Error('Resposta inválida do servidor');
    }
  }

  /**
   * GET request
   */
  async get(endpoint, options = {}) {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'GET',
      headers: this.getHeaders(options.headers),
      ...options,
    });

    return this.handleResponse(response);
  }

  /**
   * POST request
   */
  async post(endpoint, data = null, options = {}) {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'POST',
      headers: this.getHeaders(options.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });

    return this.handleResponse(response);
  }

  /**
   * POST request com FormData (para upload de arquivos)
   */
  async postFormData(endpoint, formData, options = {}) {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'POST',
      headers: this.getHeaders(options.headers, true), // true indica FormData
      body: formData,
      ...options,
    });

    return this.handleResponse(response);
  }

  /**
   * PUT request com FormData (para atualização com upload de arquivos)
   */
  async putFormData(endpoint, formData, options = {}) {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'PUT',
      headers: this.getHeaders(options.headers, true), // true indica FormData
      body: formData,
      ...options,
    });

    return this.handleResponse(response);
  }

  /**
   * POST request com FormData e callback de progresso (usa XMLHttpRequest)
   * @param {string} endpoint - Endpoint da API
   * @param {FormData} formData - Dados do formulário
   * @param {Function} onProgress - Callback (percentual) => void
   * @param {Object} options - Opções adicionais
   */
  async postFormDataWithProgress(endpoint, formData, onProgress = null, options = {}) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      
      // Rastreia progresso do upload
      if (onProgress) {
        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) {
            const percentComplete = Math.round((e.loaded / e.total) * 100);
            onProgress(percentComplete);
          }
        });
      }

      // Handler de sucesso
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = xhr.responseText ? JSON.parse(xhr.responseText) : null;
            resolve(response);
          } catch (err) {
            reject(new Error('Erro ao processar resposta'));
          }
        } else {
          try {
            const errorData = JSON.parse(xhr.responseText);
            reject(new Error(errorData.message || `Erro HTTP ${xhr.status}`));
          } catch {
            reject(new Error(`Erro HTTP ${xhr.status}: ${xhr.statusText}`));
          }
        }
      });

      // Handler de erro
      xhr.addEventListener('error', () => {
        reject(new Error('Erro de rede ao enviar arquivo'));
      });

      // Handler de timeout
      xhr.addEventListener('timeout', () => {
        reject(new Error('Timeout ao enviar arquivo'));
      });

      // Configura e envia
      xhr.open('POST', this.buildUrl(endpoint));
      
      // Adiciona headers (exceto Content-Type, que o browser define automaticamente)
      const token = authService.getToken();
      if (token) {
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      }
      
      // Adiciona headers customizados
      if (options.headers) {
        Object.entries(options.headers).forEach(([key, value]) => {
          if (key.toLowerCase() !== 'content-type') {
            xhr.setRequestHeader(key, value);
          }
        });
      }

      xhr.send(formData);
    });
  }

  /**
   * PUT request com FormData e progresso
   */
  putFormDataWithProgress(endpoint, formData, onProgress = null) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      // Setup de progresso
      if (onProgress) {
        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) {
            const percentComplete = Math.round((e.loaded / e.total) * 100);
            onProgress(percentComplete);
          }
        });
      }

      // Handler de sucesso
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = xhr.responseText ? JSON.parse(xhr.responseText) : null;
            resolve(response);
          } catch (err) {
            reject(new Error('Erro ao processar resposta'));
          }
        } else {
          try {
            const errorData = JSON.parse(xhr.responseText);
            reject(new Error(errorData.message || `Erro HTTP ${xhr.status}`));
          } catch {
            reject(new Error(`Erro HTTP ${xhr.status}: ${xhr.statusText}`));
          }
        }
      });

      // Handler de erro
      xhr.addEventListener('error', () => {
        reject(new Error('Erro de rede ao enviar arquivo'));
      });

      // Handler de timeout
      xhr.addEventListener('timeout', () => {
        reject(new Error('Timeout ao enviar arquivo'));
      });

      // Configura e envia
      xhr.open('PUT', this.buildUrl(endpoint));
      
      // Adiciona headers (exceto Content-Type, que é definido automaticamente para FormData)
      const headers = this.getHeaders({}, true);
      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          if (key.toLowerCase() !== 'content-type') {
            xhr.setRequestHeader(key, value);
          }
        });
      }

      xhr.send(formData);
    });
  }

  /**
   * PUT request
   */
  async put(endpoint, data = null, options = {}) {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'PUT',
      headers: this.getHeaders(options.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });

    return this.handleResponse(response);
  }

  /**
   * PATCH request
   */
  async patch(endpoint, data = null, options = {}) {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'PATCH',
      headers: this.getHeaders(options.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });

    return this.handleResponse(response);
  }

  /**
   * DELETE request
   */
  async delete(endpoint, options = {}) {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'DELETE',
      headers: this.getHeaders(options.headers),
      ...options,
    });

    return this.handleResponse(response);
  }
}

// Instância singleton do cliente
export const apiClient = new ApiClient(API_BASE_URL);
```

## 📄 src/shared/services/authService.js
```javascript
import { apiClient } from './apiClient';
import { setCookie, getCookie, deleteCookie, setCookieWithTimestamp } from '@/shared/utils/cookies';

const AUTH_TOKEN_KEY = 'caco_auth_token';
const AUTH_USER_KEY = 'caco_auth_user';
const AUTH_EXPIRY_KEY = 'caco_auth_expiry';

// Tempo de expiração padrão: 24 horas
const DEFAULT_TOKEN_EXPIRY_MILLISECONDS = 24 * 60 * 60 * 1000;

class AuthService {
  // Login com token já recebido do OAuth callback
  async loginWithToken(token, expiresInMilliseconds) {
    try {
      const expiryMilliseconds = expiresInMilliseconds || DEFAULT_TOKEN_EXPIRY_MILLISECONDS;
      console.log('[AuthService] expiresInMilliseconds recebido:', expiresInMilliseconds);
      console.log('[AuthService] expiryMilliseconds a usar:', expiryMilliseconds);
      console.log('[AuthService] Usando default?', !expiresInMilliseconds);
      
      const expiryTimestamp = Date.now() + expiryMilliseconds;
      const hoursFromNow = expiryMilliseconds / (1000 * 60 * 60);
      console.log('[AuthService] Token expirará em (horas):', hoursFromNow.toFixed(2));
      console.log('[AuthService] Timestamp de expiração:', new Date(expiryTimestamp).toISOString());
      
      // Salva o token temporariamente para que apiClient possa usá-lo
      this.setToken(token, expiryTimestamp);
      
      // Busca dados do usuário usando o token
      const user = await apiClient.get('user/me');
      
      // Salva o usuário
      this.setUser(user);
      
      return { token, user };
    } catch (error) {
      throw new Error('Falha ao processar autenticação: ' + error.message);
    }
  }

  // Redireciona para o fluxo OAuth do Google no backend
  redirectToGoogleLogin() {
    const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    window.location.href = `${backendUrl}/oauth2/authorization/google`;
  }

  logout() {
    deleteCookie(AUTH_TOKEN_KEY);
    deleteCookie(AUTH_USER_KEY);
    deleteCookie(AUTH_EXPIRY_KEY);
  }

  setToken(token, expiryTimestamp) {
    setCookieWithTimestamp(AUTH_TOKEN_KEY, token, expiryTimestamp);
    setCookie(AUTH_EXPIRY_KEY, expiryTimestamp.toString(), 365); // 1 ano para o timestamp
  }

  getToken() {
    // Verifica se o token expirou antes de retornar
    if (this.isTokenExpired()) {
      this.logout();
      return null;
    }
    return getCookie(AUTH_TOKEN_KEY);
  }

  getTokenExpiry() {
    const expiry = getCookie(AUTH_EXPIRY_KEY);
    return expiry ? parseInt(expiry, 10) : null;
  }

  isTokenExpired() {
    const expiry = this.getTokenExpiry();
    if (!expiry) return true;
    return Date.now() > expiry;
  }

  getTimeUntilExpiry() {
    const expiry = this.getTokenExpiry();
    if (!expiry) return 0;
    const timeLeft = expiry - Date.now();
    return timeLeft > 0 ? timeLeft : 0;
  }

  getTimeUntilExpiryFormatted() {
    const milliseconds = this.getTimeUntilExpiry();
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  }

  setUser(user) {
    setCookie(AUTH_USER_KEY, JSON.stringify(user), 365); // 1 ano
  }

  getUser() {
    // Verifica expiração antes de retornar usuário
    if (this.isTokenExpired()) {
      this.logout();
      return null;
    }
    const user = getCookie(AUTH_USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired();
  }

  isAdmin() {
    const user = this.getUser();
    return user?.role === 'ADMIN';
  }

  // Avisa o usuário quando a sessão está prestes a expirar
  shouldWarnExpiry() {
    const timeLeft = this.getTimeUntilExpiry();
    // Avisa quando faltam menos de 5 minutos
    return timeLeft > 0 && timeLeft < (5 * 60 * 1000);
  }
}

export const authService = new AuthService();
```

## 📄 src/shared/services/contentService.js
```javascript
const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000') + '/api';

class ContentService {
  async getDashboard() {
    const response = await fetch(`${API_BASE_URL}/public/home`);
    if (!response.ok) throw new Error('Falha ao carregar dashboard');
    return response.json();
  }

  async getNewsList(page = 1, limit = 10) {
    const response = await fetch(`${API_BASE_URL}/news?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error('Falha ao carregar notícias');
    return response.json();
  }

  async getNewsBySlug(slug) {
    const response = await fetch(`${API_BASE_URL}/public/news/${slug}`);
    if (!response.ok) throw new Error('Falha ao carregar notícia');
    return response.json();
  }

  async getManualTree() {
    const response = await fetch(`${API_BASE_URL}/manual/tree`);
    if (!response.ok) throw new Error('Falha ao carregar árvore do manual');
    return response.json();
  }

  async getManualArticle(id) {
    const response = await fetch(`${API_BASE_URL}/manual/articles/${id}`);
    if (!response.ok) throw new Error('Falha ao carregar artigo');
    return response.json();
  }

  async submitFeedback(articleId, helpful, comment = '') {
    const response = await fetch(`${API_BASE_URL}/article-feedback/articles/${articleId}/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isHelpful: helpful, comment }),
    });
    if (!response.ok) throw new Error('Falha ao enviar feedback');
    return response.json();
  }

  async getCalendarEvents(year, month) {
    const response = await fetch(`${API_BASE_URL}/events/calendar?year=${year}&month=${month}`);
    if (!response.ok) throw new Error('Falha ao carregar eventos');
    return response.json();
  }

  async getEvent(id) {
    const response = await fetch(`${API_BASE_URL}/events/${id}`);
    if (!response.ok) throw new Error('Falha ao carregar evento');
    return response.json();
  }

  async getExams() {
    const response = await fetch(`${API_BASE_URL}/exams`);
    if (!response.ok) throw new Error('Falha ao carregar provas');
    return response.json();
  }

  async getStickers(token) {
    const response = await fetch(`${API_BASE_URL}/stickers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error('Falha ao carregar figurinhas');
    return response.json();
  }

  async redeemSticker(code, token) {
    const response = await fetch(`${API_BASE_URL}/stickers/redeem`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ code }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Falha ao resgatar código');
    }
    return response.json();
  }
}

export const contentService = new ContentService();
```

## 📄 src/shared/services/contentService.new.js
```javascript
/**
 * Serviço de conteúdo usando o apiClient centralizado
 * Agora todas as chamadas usam o cliente HTTP configurado com token automático
 */

import { apiClient } from './apiClient';

class ContentService {
  // ============= DASHBOARD =============
  
  /**
   * Busca dados do dashboard (banners, warnings, latest news)
   * @returns {Promise<import('../types/dtos').DashboardDTO>}
   */
  async getDashboard() {
    return apiClient.get('dashboard');
  }

  // ============= BANNERS =============
  
  /**
   * Lista todos os banners
   * @returns {Promise<import('../types/dtos').BannerDTO[]>}
   */
  async getBanners() {
    return apiClient.get('banners');
  }

  /**
   * Cria um novo banner (requer ADMIN)
   * @param {import('../types/dtos').CreateBannerDTO} data
   * @returns {Promise<import('../types/dtos').BannerDTO>}
   */
  async createBanner(data) {
    return apiClient.post('banners', data);
  }

  /**
   * Atualiza um banner (requer ADMIN)
   * @param {string} id - UUID do banner
   * @param {import('../types/dtos').CreateBannerDTO} data
   * @returns {Promise<import('../types/dtos').BannerDTO>}
   */
  async updateBanner(id, data) {
    return apiClient.put(`banners/${id}`, data);
  }

  /**
   * Remove um banner (requer ADMIN)
   * @param {string} id - UUID do banner
   */
  async deleteBanner(id) {
    return apiClient.delete(`banners/${id}`);
  }

  /**
   * Reordena banners (requer ADMIN)
   * @param {import('../types/dtos').ReorderBannersDTO} data
   */
  async reorderBanners(data) {
    return apiClient.put('banners/reorder', data);
  }

  // ============= WARNINGS =============
  
  /**
   * Lista avisos ativos
   * @returns {Promise<import('../types/dtos').WarningDTO[]>}
   */
  async getWarnings() {
    return apiClient.get('warnings');
  }

  /**
   * Cria um novo aviso (requer ADMIN)
   * @param {import('../types/dtos').CreateWarningDTO} data
   * @returns {Promise<import('../types/dtos').WarningDTO>}
   */
  async createWarning(data) {
    return apiClient.post('warnings', data);
  }

  /**
   * Atualiza um aviso (requer ADMIN)
   * @param {string} id - UUID do aviso
   * @param {import('../types/dtos').UpdateWarningDTO} data
   * @returns {Promise<import('../types/dtos').WarningDTO>}
   */
  async updateWarning(id, data) {
    return apiClient.put(`warnings/${id}`, data);
  }

  /**
   * Remove um aviso (requer ADMIN)
   * @param {string} id - UUID do aviso
   */
  async deleteWarning(id) {
    return apiClient.delete(`warnings/${id}`);
  }

  // ============= NEWS =============
  
  /**
   * Lista notícias com paginação
   * @param {Object} params
   * @param {number} [params.page=0] - Página (começa em 0)
   * @param {number} [params.size=10] - Tamanho da página
   * @param {string} [params.search] - Termo de busca
   * @returns {Promise<{content: import('../types/dtos').NewsSummaryDTO[], totalPages: number, totalElements: number}>}
   */
  async getNews(params = {}) {
    const queryParams = new URLSearchParams({
      page: params.page || 0,
      size: params.size || 10,
      ...(params.search && { search: params.search }),
    });
    return apiClient.get(`news?${queryParams}`);
  }

  /**
   * Busca notícia por slug
   * @param {string} slug
   * @returns {Promise<Object>} Notícia completa
   */
  async getNewsBySlug(slug) {
    return apiClient.get(`news/${slug}`);
  }

  /**
   * Cria uma notícia (requer ADMIN)
   * @param {import('../types/dtos').CreateNewsDTO} data
   * @returns {Promise<Object>}
   */
  async createNews(data) {
    return apiClient.post('news', data);
  }

  /**
   * Atualiza uma notícia (requer ADMIN)
   * @param {string} id - UUID da notícia
   * @param {import('../types/dtos').UpdateNewsDTO} data
   * @returns {Promise<Object>}
   */
  async updateNews(id, data) {
    return apiClient.put(`news/${id}`, data);
  }

  /**
   * Remove uma notícia (requer ADMIN)
   * @param {string} id - UUID da notícia
   */
  async deleteNews(id) {
    return apiClient.delete(`news/${id}`);
  }

  // ============= USER PROFILE =============
  
  /**
   * Busca perfil do usuário autenticado
   * @returns {Promise<import('../types/dtos').UserResponseDTO>}
   */
  async getProfile() {
    return apiClient.get('user/me');
  }

  /**
   * Atualiza perfil do usuário
   * @param {import('../types/dtos').UpdateProfileDTO} data
   * @returns {Promise<import('../types/dtos').UserResponseDTO>}
   */
  async updateProfile(data) {
    return apiClient.put('user/profile', data);
  }

  // ============= PLACEHOLDER METHODS (manter compatibilidade) =============
  
  async getManualPages(params = {}) {
    // TODO: Implementar quando backend tiver endpoint
    return { data: [], total: 0 };
  }

  async getEvents(params = {}) {
    // TODO: Implementar quando backend tiver endpoint
    return { data: [], total: 0 };
  }

  async getCalendarEvents(year, month) {
    // TODO: Implementar quando backend tiver endpoint
    return [];
  }

  async getExams(params = {}) {
    // TODO: Implementar quando backend tiver endpoint
    return [];
  }
}

export const contentService = new ContentService();
```

## 📄 src/shared/services/eventService.js
```javascript
/**
 * Serviço para gerenciar eventos
 */

import { apiClient } from './apiClient';

class EventService {
  // ==================== ENDPOINTS PÚBLICOS ====================

  /**
   * Lista eventos de um mês específico (inclui 7 dias antes/depois)
   * @param {Object} params - Parâmetros de busca
   * @param {number} params.year - Ano (opcional, usa atual se não informado)
   * @param {number} params.month - Mês 1-12 (opcional, usa atual se não informado)
   * @param {string} params.date - Data específica YYYY-MM-DD (opcional)
   * @param {number} params.page - Número da página (padrão: 0)
   * @param {number} params.size - Tamanho da página (padrão: 100)
   * @returns {Promise<Object>} Eventos do mês
   */
  async getEventsByMonth(params = {}) {
    const queryParams = new URLSearchParams();
    
    if (params.year) queryParams.append('year', params.year);
    if (params.month) queryParams.append('month', params.month);
    if (params.date) queryParams.append('date', params.date);
    queryParams.append('page', params.page || 0);
    queryParams.append('size', params.size || 100);
    
    return apiClient.get(`/public/events/month?${queryParams.toString()}`);
  }

  /**
   * Lista eventos futuros com paginação
   * @param {number} page - Número da página (padrão: 0)
   * @param {number} size - Tamanho da página (padrão: 20)
   * @returns {Promise<Object>} Página de eventos futuros
   */
  async getUpcomingEvents(page = 0, size = 20) {
    return apiClient.get(`/public/events/upcoming?page=${page}&size=${size}`);
  }

  /**
   * Lista eventos passados com paginação
   * @param {number} page - Número da página (padrão: 0)
   * @param {number} size - Tamanho da página (padrão: 20)
   * @returns {Promise<Object>} Página de eventos passados
   */
  async getPastEvents(page = 0, size = 20) {
    return apiClient.get(`/public/events/past?page=${page}&size=${size}`);
  }

  /**
   * Busca evento por ID
   * @param {string} eventId - ID do evento
   * @returns {Promise<Object>} Detalhes completos do evento (EventResponseDTO)
   */
  async getEventById(eventId) {
    return apiClient.get(`/public/events/${eventId}`);
  }

  /**
   * Busca evento por slug
   * @param {string} slug - Slug do evento
   * @returns {Promise<Object>} Detalhes completos do evento (EventResponseDTO)
   */
  async getEventBySlug(slug) {
    return apiClient.get(`/public/events/slug/${slug}`);
  }

  // ==================== ENDPOINTS PRIVADOS (Autenticação Requerida) ====================

  /**
   * Salva/atualiza participação do usuário no evento
   * @param {string} eventId - ID do evento
   * @param {string} status - Status de participação (INTERESTED, GOING, NOT_GOING)
   * @returns {Promise<Object>} Dados da participação
   */
  async saveParticipation(eventId, status) {
    return apiClient.post(`/private/user/events/${eventId}/save`, { status });
  }

  /**
   * Remove participação do usuário no evento
   * @param {string} eventId - ID do evento
   * @returns {Promise<void>}
   */
  async removeParticipation(eventId) {
    return apiClient.delete(`/private/user/events/${eventId}/save`);
  }

  /**
   * Lista eventos salvos pelo usuário com paginação
   * @param {number} page - Número da página (padrão: 0)
   * @param {number} size - Tamanho da página (padrão: 20)
   * @returns {Promise<Object>} Página de eventos salvos
   */
  async getSavedEvents(page = 0, size = 20) {
    return apiClient.get(`/private/user/events/saved?page=${page}&size=${size}`);
  }

  /**
   * Busca detalhes da participação do usuário em um evento específico
   * @param {string} eventId - ID do evento
   * @returns {Promise<Object>} Detalhes da participação
   */
  async getUserParticipationDetails(eventId) {
    return apiClient.get(`/private/user/events/${eventId}/details`);
  }

  /**
   * Atualiza status de participação do usuário
   * @param {string} eventId - ID do evento
   * @param {string} status - Novo status (INTERESTED, GOING, NOT_GOING)
   * @returns {Promise<Object>} Participação atualizada
   */
  async updateParticipationStatus(eventId, status) {
    return apiClient.put(`/private/user/events/${eventId}/status`, { status });
  }

  // ==================== ENDPOINTS ADMINISTRATIVOS (Papel ADMIN Requerido) ====================

  /**
   * Cria novo evento (admin)
   * @param {FormData} formData - Dados do evento incluindo possível imagem
   * @returns {Promise<Object>} Evento criado
   */
  async createEvent(formData) {
    return apiClient.postFormData('admin/events', formData);
  }

  /**
   * Atualiza evento existente (admin)
   * @param {string} eventId - ID do evento
   * @param {FormData} formData - Dados atualizados incluindo possível imagem
   * @returns {Promise<Object>} Evento atualizado
   */
  async updateEvent(eventId, formData) {
    return apiClient.putFormData(`admin/events/${eventId}`, formData);
  }

  /**
   * Exclui evento (admin)
   * @param {string} eventId - ID do evento
   * @returns {Promise<void>}
   */
  async deleteEvent(eventId) {
    return apiClient.delete(`/admin/events/${eventId}`);
  }
}

export const eventService = new EventService();
```

## 📄 src/shared/services/examService.js
```javascript
import { apiClient } from './apiClient';

export const examService = {
  // Subjects
  getSubjects: async () => {
    return apiClient.get('admin/exams/subjects');
  },

  createSubject: async (subjectData) => {
    return apiClient.post('admin/exams/subjects', subjectData);
  },

  deleteSubject: async (subjectCode) => {
    return apiClient.delete(`admin/exams/subjects/${subjectCode}`);
  },

  // Exams
  getExamsBySubject: async (subjectCode) => {
    return apiClient.get(`admin/exams/subject/${subjectCode}`);
  },

  createExam: async (examData) => {
    return apiClient.post('admin/exams', examData);
  },

  updateExam: async (examId, examData) => {
    return apiClient.put(`admin/exams/${examId}`, examData);
  },

  deleteExam: async (examId) => {
    return apiClient.delete(`admin/exams/${examId}`);
  }
};
```

## 📄 src/shared/services/imageUploadService.js
```javascript
/**
 * Serviço para upload de imagens
 */

import { apiClient } from './apiClient';

class ImageUploadService {
  /**
   * Faz upload de uma imagem para o backend
   * @param {File} imageFile - Arquivo de imagem a ser enviado
   * @returns {Promise<string>} - URL da imagem no servidor
   */
  async uploadImage(imageFile) {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      // Usa o método postFormData específico para upload de arquivos
      const response = await apiClient.postFormData('/admin/images', formData);

      // O backend retorna a URL da imagem
      if (!response || !response.url) {
        throw new Error('Resposta inválida do servidor');
      }

      return response.url;
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
      // Re-lança o erro com mensagem amigável
      const errorMessage = error.message || 'Falha ao enviar imagem. Tente novamente.';
      throw new Error(errorMessage);
    }
  }

  /**
   * Faz upload de uma imagem com callback de progresso
   * @param {File} imageFile - Arquivo de imagem a ser enviado
   * @param {Function} onProgress - Callback com percentual de progresso
   * @returns {Promise<string>} - URL da imagem no servidor
   */
  async uploadImageWithProgress(imageFile, onProgress = null) {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      // Usa o método com progresso
      const response = await apiClient.postFormDataWithProgress(
        '/admin/images',
        formData,
        onProgress
      );

      // O backend retorna a URL da imagem
      if (!response || !response.url) {
        throw new Error('Resposta inválida do servidor');
      }

      return response.url;
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
      const errorMessage = error.message || 'Falha ao enviar imagem. Tente novamente.';
      throw new Error(errorMessage);
    }
  }

  /**
   * Função adaptada para o MDXEditor
   * @param {File} imageFile - Arquivo de imagem
   * @returns {Promise<string>} - URL da imagem
   */
  async imageUploadHandler(imageFile) {
    return this.uploadImage(imageFile);
  }
}

export const imageUploadService = new ImageUploadService();
```

## 📄 src/shared/services/manualService.js
```javascript
import { apiClient } from './apiClient';

export const manualService = {
  // Categories
  getCategories: async () => {
    return apiClient.get('public/manual/categories');
  },

  createCategory: async (categoryData) => {
    return apiClient.post('admin/manual/categories', categoryData);
  },

  updateCategory: async (id, categoryData) => {
    return apiClient.put(`admin/manual/categories/${id}`, categoryData);
  },

  deleteCategory: async (id) => {
    return apiClient.delete(`admin/manual/categories/${id}`);
  },

  reorderCategories: async (categoryIds) => {
    return apiClient.put('admin/manual/categories/r/reorder', { categoryIds });
  },

  // Chapters
  getChaptersByCategory: async (categoryId) => {
    return apiClient.get(`public/manual/chapters/category/${categoryId}`);
  },

  createChapter: async (chapterData) => {
    return apiClient.post('admin/manual/chapters', chapterData);
  },

  updateChapter: async (id, chapterData) => {
    return apiClient.put(`admin/manual/chapters/${id}`, chapterData);
  },

  deleteChapter: async (id) => {
    return apiClient.delete(`admin/manual/chapters/${id}`);
  },

  reorderChapters: async (categoryId, chapterIds) => {
    return apiClient.put('admin/manual/chapters/r/reorder', { categoryId, chapterIds });
  },

  // Articles
  getArticlesByChapter: async (chapterId) => {
    return apiClient.get(`public/manual/articles/chapter/${chapterId}`);
  },

  createArticle: async (articleData) => {
    return apiClient.post('admin/manual/articles', articleData);
  },

  updateArticle: async (id, articleData) => {
    return apiClient.put(`admin/manual/articles/${id}`, articleData);
  },

  deleteArticle: async (id) => {
    return apiClient.delete(`admin/manual/articles/${id}`);
  },

  reorderArticles: async (chapterId, articleIds) => {
    return apiClient.put('admin/manual/articles/r/reorder', { chapterId, articleIds });
  }
};
```

## 📄 src/shared/services/storeService.js
```javascript
/**
 * Serviço para gerenciamento da loja
 * Endpoints para categorias, produtos e variações
 */

import { apiClient } from './apiClient';

/**
 * @typedef {import('../types/dtos').StoreCategoryDTO} StoreCategoryDTO
 * @typedef {import('../types/dtos').ProductSummaryDTO} ProductSummaryDTO
 * @typedef {import('../types/dtos').ProductDetailDTO} ProductDetailDTO
 * @typedef {import('../types/dtos').ProductDetailAdminDTO} ProductDetailAdminDTO
 * @typedef {import('../types/dtos').ProductVariationDTO} ProductVariationDTO
 * @typedef {import('../types/dtos').CreateStoreCategoryDTO} CreateStoreCategoryDTO
 * @typedef {import('../types/dtos').UpdateStoreCategoryDTO} UpdateStoreCategoryDTO
 * @typedef {import('../types/dtos').CreateProductDTO} CreateProductDTO
 * @typedef {import('../types/dtos').UpdateProductDTO} UpdateProductDTO
 * @typedef {import('../types/dtos').CreateProductVariationDTO} CreateProductVariationDTO
 * @typedef {import('../types/dtos').UpdateProductVariationDTO} UpdateProductVariationDTO
 */

class StoreService {
    // ============= ADMIN - CATEGORIAS =============

    /**
     * Busca todas as categorias (admin)
     * @returns {Promise<StoreCategoryDTO[]>}
     */
    async getAllCategories() {
        return await apiClient.get('/admin/store/categories');
    }

    /**
     * Cria uma nova categoria
     * @param {CreateStoreCategoryDTO} data
     * @returns {Promise<StoreCategoryDTO>}
     */
    async createCategory(data) {
        return await apiClient.post('/admin/store/categories', data);
    }

    /**
     * Atualiza uma categoria
     * @param {string} id - UUID da categoria
     * @param {UpdateStoreCategoryDTO} data
     * @returns {Promise<StoreCategoryDTO>}
     */
    async updateCategory(id, data) {
        return await apiClient.put(`/admin/store/categories/${id}`, data);
    }

    /**
     * Remove uma categoria
     * @param {string} id - UUID da categoria
     * @returns {Promise<void>}
     */
    async deleteCategory(id) {
        return await apiClient.delete(`/admin/store/categories/${id}`);
    }

    /**
     * Reordena categorias
     * @param {string[]} categoryIds - Array de IDs na ordem desejada
     * @returns {Promise<void>}
     */
    async reorderCategories(categoryIds) {
        return await apiClient.post('/admin/store/categories/reorder', categoryIds);
    }

    // ============= ADMIN - PRODUTOS =============

    /**
     * Busca todos os produtos (admin)
     * @returns {Promise<ProductDetailAdminDTO[]>}
     */
    async getAllProducts() {
        return await apiClient.get('/admin/store/products');
    }

    /**
     * Busca detalhes de um produto (admin)
     * @param {string} id - UUID do produto
     * @returns {Promise<ProductDetailAdminDTO>}
     */
    async getProductById(id) {
        return await apiClient.get(`/admin/store/products/${id}`);
    }

    /**
     * Cria um novo produto com imagens
     * @param {Object} data - Dados do produto
     * @param {File[]} imageFiles - Array de arquivos de imagem
     * @returns {Promise<ProductDetailAdminDTO>}
     */
    async createProduct(data) {
        return await apiClient.post('/admin/store/products', data);
    }

    /**
     * Atualiza um produto com novas imagens
     * @param {string} id - UUID do produto
     * @param {Object} data - Dados atualizados do produto
     * @param {File[]} imageFiles - Array de novos arquivos de imagem
     * @returns {Promise<ProductDetailAdminDTO>}
     */
    async updateProduct(id, data) {
        return await apiClient.put(`/admin/store/products/${id}`, data);
    }

    /**
     * Remove um produto
     * @param {string} id - UUID do produto
     * @returns {Promise<void>}
     */
    async deleteProduct(id) {
        return await apiClient.delete(`/admin/store/products/${id}`);
    }

    // ============= IMAGENS DO PRODUTO =============

    /**
     * Adiciona uma imagem ao produto
     * @param {string} productId - UUID do produto
     * @param {File} imageFile - Arquivo de imagem
     * @returns {Promise<Object>} Dados da imagem criada
     */
    async addProductImage(productId, imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);
        return await apiClient.postFormData(`/admin/store/products/${productId}/images`, formData);
    }

    /**
     * Lista todas as imagens do produto
     * @param {string} productId - UUID do produto
     * @returns {Promise<Array>} Lista de imagens
     */
    async getProductImages(productId) {
        return await apiClient.get(`/admin/store/products/${productId}/images`);
    }

    /**
     * Remove uma imagem específica
     * @param {string} imageId - UUID da imagem
     * @returns {Promise<void>}
     */
    async deleteProductImage(imageId) {
        return await apiClient.delete(`/admin/store/images/${imageId}`);
    }

    /**
     * Reordena as imagens do produto
     * @param {string} productId - UUID do produto
     * @param {string[]} imageIds - Array de IDs na ordem desejada
     * @returns {Promise<void>}
     */
    async reorderProductImages(productId, imageIds) {
        return await apiClient.post(`/admin/store/products/${productId}/images/reorder`, imageIds);
    }

    // ============= ADMIN - VARIAÇÕES =============

    /**
     * Adiciona uma variação a um produto
     * @param {string} productId - UUID do produto
     * @param {CreateProductVariationDTO} data
     * @returns {Promise<ProductVariationDTO>}
     */
    async createVariation(productId, data) {
        return await apiClient.post(`/admin/store/products/${productId}/variations`, data);
    }

    /**
     * Atualiza uma variação
     * @param {string} variationId - UUID da variação
     * @param {UpdateProductVariationDTO} data
     * @returns {Promise<ProductVariationDTO>}
     */
    async updateVariation(variationId, data) {
        return await apiClient.put(`/admin/store/variations/${variationId}`, data);
    }

    /**
     * Remove uma variação
     * @param {string} variationId - UUID da variação
     * @returns {Promise<void>}
     */
    async deleteVariation(variationId) {
        return await apiClient.delete(`/admin/store/variations/${variationId}`);
    }

    // ============= PÚBLICOS =============

    /**
     * Busca todas as categorias (público)
     * @returns {Promise<StoreCategoryDTO[]>}
     */
    async getPublicCategories() {
        return await apiClient.get('/public/store/categories');
    }

    /**
     * Busca produtos de uma categoria por slug (público)
     * @param {string} categorySlug
     * @returns {Promise<ProductSummaryDTO[]>}
     */
    async getPublicProductsByCategory(categorySlug) {
        return await apiClient.get(`/public/store/categories/${categorySlug}/products`);
    }

    /**
     * Busca detalhes de um produto por slug (público)
     * @param {string} productSlug
     * @returns {Promise<ProductDetailDTO>}
     */
    async getPublicProductBySlug(productSlug) {
        return await apiClient.get(`/public/store/products/slug/${productSlug}`);
    }

    /**
     * Busca produtos por palavra-chave (público)
     * @param {string} keyword
     * @returns {Promise<ProductSummaryDTO[]>}
     */
    async searchPublicProducts(keyword) {
        return await apiClient.get(`/public/store/search`, { keyword });
    }
}

export const storeService = new StoreService();
export default storeService;
```

## 📄 src/shared/services/warningService.js
```javascript
/**
 * Serviço para gerenciamento de Warnings (Avisos)
 */

import { apiClient } from './apiClient';

class WarningService {
  /**
   * Busca todos os avisos ativos
   */
  async getActiveWarnings() {
    return apiClient.get('/admin/warnings/active');
  }

  /**
   * Busca todos os avisos (admin)
   */
  async getAllWarnings() {
    return apiClient.get('/admin/warnings');
  }

  /**
   * Busca um aviso por ID (admin)
   */
  async getWarningById(id) {
    return apiClient.get(`/admin/warnings/${id}`);
  }

  /**
   * Cria um novo aviso (admin)
   * @param {Object} createDTO - { markdownText, severityLevel, startsAt, expiresAt }
   */
  async createWarning(createDTO) {
    return apiClient.post('/admin/warnings', createDTO);
  }

  /**
   * Atualiza um aviso (admin)
   */
  async updateWarning(id, updateDTO) {
    return apiClient.put(`/admin/warnings/${id}`, updateDTO);
  }

  /**
   * Exclui um aviso (admin)
   */
  async deleteWarning(id) {
    return apiClient.delete(`/admin/warnings/${id}`);
  }

  /**
   * Força um aviso a expirar (admin)
   */
  async expireWarning(id) {
    return apiClient.put(`/admin/warnings/${id}/expire`);
  }
}
// Instância singleton do serviço
export const warningService = new WarningService();
```

## 📄 src/shared/types/dtos.js
```javascript
/**
 * DTOs baseados nos DTOs do backend Java
 * Seguem a mesma estrutura para garantir compatibilidade
 */

// ============= RESPONSE DTOs =============

/**
 * @typedef {Object} UserResponseDTO
 * @property {string} id - UUID do usuário
 * @property {string} name - Nome do usuário
 * @property {string} email - Email do usuário
 * @property {string} avatarUrl - URL do avatar
 * @property {'USER' | 'ADMIN'} role - Role do usuário
 */

/**
 * @typedef {Object} ErrorResponseDTO
 * @property {string} timestamp - Data/hora do erro
 * @property {number} status - Código HTTP
 * @property {string} error - Tipo do erro
 * @property {string} message - Mensagem do erro
 * @property {string} path - Path da requisição
 */

/**
 * @typedef {Object} BannerDTO
 * @property {string} id - UUID do banner
 * @property {string} title - Título do banner
 * @property {string} imageUrl - URL da imagem
 * @property {string} targetLink - Link de destino
 */

/**
 * @typedef {Object} WarningDTO
 * @property {string} id - UUID do aviso
 * @property {string} markdownText - Texto em markdown
 * @property {string} expiresAt - Data de expiração (ISO string)
 */

/**
 * @typedef {Object} NewsSummaryDTO
 * @property {string} id - UUID da notícia
 * @property {string} title - Título da notícia
 * @property {string} slug - Slug para URL
 * @property {string} summary - Resumo da notícia
 * @property {string} coverImage - URL da imagem de capa
 * @property {string} publishDate - Data de publicação (ISO string)
 * @property {string} authorName - Nome do autor
 */

/**
 * @typedef {Object} DashboardDTO
 * @property {BannerDTO[]} banners - Lista de banners
 * @property {WarningDTO[]} warnings - Lista de avisos
 * @property {NewsSummaryDTO[]} latestNews - Últimas notícias
 */

// ============= REQUEST DTOs =============

/**
 * @typedef {Object} UpdateProfileDTO
 * @property {string} name - Nome do usuário
 * @property {string} avatarUrl - URL do avatar
 */

/**
 * @typedef {Object} CreateNewsDTO
 * @property {string} title - Título da notícia (obrigatório)
 * @property {string} summary - Resumo (obrigatório)
 * @property {string} content - Conteúdo em markdown (obrigatório)
 * @property {string} [coverImage] - URL da imagem de capa (opcional)
 */

/**
 * @typedef {Object} UpdateNewsDTO
 * @property {string} [title] - Título da notícia
 * @property {string} [summary] - Resumo
 * @property {string} [content] - Conteúdo em markdown
 * @property {string} [coverImage] - URL da imagem de capa
 */

/**
 * @typedef {Object} CreateBannerDTO
 * @property {string} title - Título do banner (obrigatório)
 * @property {File} imageFile - Arquivo de imagem (obrigatório, será enviado como MultipartFile)
 * @property {string} targetLink - Link de destino (obrigatório)
 * @property {boolean} [active] - Se o banner está ativo (padrão true)
 */

/**
 * @typedef {Object} ReorderBannersDTO
 * @property {string[]} bannerIds - Lista ordenada de UUIDs dos banners
 */

/**
 * @typedef {Object} CreateWarningDTO
 * @property {string} markdownText - Texto em markdown (obrigatório)
 * @property {string} startsAt - Data de início (ISO string, obrigatório)
 * @property {string} expiresAt - Data de expiração (ISO string, obrigatório, deve ser futura)
 */

/**
 * @typedef {Object} UpdateWarningDTO
 * @property {string} [markdownText] - Texto em markdown
 * @property {string} [startsAt] - Data de início (ISO string)
 * @property {string} [expiresAt] - Data de expiração (ISO string)
 */

// ============= STORE DTOs =============

/**
 * @typedef {Object} StoreCategoryDTO
 * @property {string} id - UUID da categoria
 * @property {string} name - Nome da categoria
 * @property {string} slug - Slug para URL
 * @property {number} order - Ordem de exibição
 */

/**
 * @typedef {Object} ProductSummaryDTO
 * @property {string} id - UUID do produto
 * @property {string} name - Nome do produto
 * @property {string} slug - Slug para URL
 * @property {number} price - Preço do produto
 * @property {number} [originalPrice] - Preço original (antes do desconto)
 * @property {string} coverImage - URL da imagem de capa
 * @property {boolean} outOfStock - Se está fora de estoque
 * @property {string} categoryId - UUID da categoria
 * @property {string} categoryName - Nome da categoria
 * @property {string} categorySlug - Slug da categoria
 * @property {string} createdAt - Data de criação (ISO string)
 */

/**
 * @typedef {Object} ProductVariationDTO
 * @property {string} id - UUID da variação
 * @property {string} name - Nome da variação
 * @property {number} additionalPrice - Preço adicional
 * @property {number} stockQuantity - Quantidade em estoque
 * @property {boolean} available - Se está disponível
 */

/**
 * @typedef {Object} ProductDetailDTO
 * @property {string} id - UUID do produto
 * @property {string} name - Nome do produto
 * @property {string} slug - Slug para URL
 * @property {string} description - Descrição do produto
 * @property {number} price - Preço do produto
 * @property {boolean} manageStock - Se gerencia estoque
 * @property {boolean} outOfStock - Se está fora de estoque
 * @property {string} categoryId - UUID da categoria
 * @property {string} categoryName - Nome da categoria
 * @property {string} categorySlug - Slug da categoria
 * @property {string[]} images - URLs das imagens
 * @property {ProductVariationDTO[]} variations - Variações do produto
 */

/**
 * @typedef {Object} ProductDetailAdminDTO
 * @property {string} id - UUID do produto
 * @property {string} name - Nome do produto
 * @property {string} slug - Slug para URL
 * @property {string} description - Descrição do produto
 * @property {number} price - Preço do produto
 * @property {number} [originalPrice] - Preço original
 * @property {boolean} manageStock - Se gerencia estoque
 * @property {number} stockQuantity - Quantidade em estoque
 * @property {boolean} active - Se está ativo
 * @property {string} categoryId - UUID da categoria
 * @property {string} categoryName - Nome da categoria
 * @property {string} categorySlug - Slug da categoria
 * @property {string[]} images - URLs das imagens
 * @property {ProductVariationDTO[]} variations - Variações do produto
 * @property {string} createdAt - Data de criação (ISO string)
 * @property {string} updatedAt - Data de atualização (ISO string)
 */

/**
 * @typedef {Object} CreateStoreCategoryDTO
 * @property {string} name - Nome da categoria
 * @property {string} slug - Slug para URL
 */

/**
 * @typedef {Object} UpdateStoreCategoryDTO
 * @property {string} name - Nome da categoria
 * @property {string} slug - Slug para URL
 */

/**
 * @typedef {Object} CreateProductDTO
 * @property {string} name - Nome do produto
 * @property {string} slug - Slug para URL
 * @property {string} description - Descrição do produto
 * @property {number} price - Preço do produto
 * @property {number} [originalPrice] - Preço original
 * @property {string} categoryId - UUID da categoria
 * @property {boolean} manageStock - Se gerencia estoque
 * @property {number} stockQuantity - Quantidade em estoque
 * @property {boolean} active - Se está ativo
 * @property {string[]} images - URLs das imagens
 */

/**
 * @typedef {Object} UpdateProductDTO
 * @property {string} name - Nome do produto
 * @property {string} slug - Slug para URL
 * @property {string} description - Descrição do produto
 * @property {number} price - Preço do produto
 * @property {number} [originalPrice] - Preço original
 * @property {string} categoryId - UUID da categoria
 * @property {boolean} manageStock - Se gerencia estoque
 * @property {number} stockQuantity - Quantidade em estoque
 * @property {boolean} active - Se está ativo
 * @property {string[]} images - URLs das imagens
 */

/**
 * @typedef {Object} CreateProductVariationDTO
 * @property {string} name - Nome da variação
 * @property {number} additionalPrice - Preço adicional
 * @property {number} stockQuantity - Quantidade em estoque
 */

/**
 * @typedef {Object} UpdateProductVariationDTO
 * @property {string} name - Nome da variação
 * @property {number} additionalPrice - Preço adicional
 * @property {number} stockQuantity - Quantidade em estoque
 */

// Exporta um objeto vazio apenas para permitir importação
// Os tipos estão disponíveis via JSDoc
export default {};
```

## 📄 src/shared/types/index.js
```javascript
// Dashboard Types
export const DashboardData = {
  banners: [],
  warnings: [],
  latestNews: [],
};

// News Types
export const NewsArticle = {
  id: '',
  slug: '',
  title: '',
  summary: '',
  content: '',
  imageUrl: '',
  publishedAt: '',
  author: '',
};

// Manual Types
export const ManualSection = {
  id: '',
  title: '',
  children: [],
  articles: [],
};

export const ManualArticle = {
  id: '',
  title: '',
  content: '',
  sectionId: '',
  path: [],
};

// Event Types
export const CalendarEvent = {
  id: '',
  title: '',
  description: '',
  start: '',
  end: '',
  type: 'MINOR' | 'MAJOR',
  action: 'MODAL' | 'PAGE',
  location: '',
  imageUrl: '',
  status: 'UPCOMING' | 'ONGOING' | 'ENDED',
  gallery: [],
};

// Exam Types
export const Exam = {
  id: '',
  subject: '',
  type: 'P1' | 'P2' | 'P3' | 'FINAL',
  year: 0,
  semester: 0,
  fileUrl: '',
};

// Sticker Types
export const Sticker = {
  id: '',
  name: '',
  description: '',
  imageUrl: '',
  rarity: 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY',
  eventId: '',
};

export const UserSticker = {
  stickerId: '',
  acquiredAt: '',
  eventName: '',
};
```

## 📄 src/shared/utils/cookies.js
```javascript
/**
 * Utilitários para gerenciar cookies de forma segura
 */

/**
 * Define um cookie
 * @param {string} name - Nome do cookie
 * @param {string} value - Valor do cookie
 * @param {number} days - Dias até expiração (opcional)
 */
export function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  
  // SameSite=Strict para segurança CSRF
  // Secure em produção (HTTPS)
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/${secure}; SameSite=Strict`;
}

/**
 * Obtém o valor de um cookie
 * @param {string} name - Nome do cookie
 * @returns {string|null} Valor do cookie ou null
 */
export function getCookie(name) {
  const nameEQ = name + '=';
  const cookies = document.cookie.split(';');
  
  for (let cookie of cookies) {
    let c = cookie.trim();
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length));
    }
  }
  
  return null;
}

/**
 * Remove um cookie
 * @param {string} name - Nome do cookie
 */
export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict`;
}

/**
 * Define um cookie com timestamp de expiração em milissegundos
 * @param {string} name - Nome do cookie
 * @param {string} value - Valor do cookie
 * @param {number} expiryTimestamp - Timestamp em milissegundos
 */
export function setCookieWithTimestamp(name, value, expiryTimestamp) {
  const date = new Date(expiryTimestamp);
  const expires = `; expires=${date.toUTCString()}`;
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/${secure}; SameSite=Strict`;
}
```

## 📄 src/shared/utils/formatters.js
```javascript
/**
 * Formata um valor numérico como moeda brasileira (BRL)
 * @param {number} value - Valor a ser formatado
 * @returns {string} Valor formatado como R$ X,XX
 */
export function formatCurrency(value) {
  if (value === null || value === undefined) {
    return 'R$ 0,00';
  }
  
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Formata uma data no padrão brasileiro
 * @param {string | Date} date - Data a ser formatada
 * @returns {string} Data formatada como DD/MM/YYYY
 */
export function formatDate(date) {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateFormat('pt-BR').format(dateObj);
}

/**
 * Formata uma data e hora no padrão brasileiro
 * @param {string | Date} date - Data a ser formatada
 * @returns {string} Data formatada como DD/MM/YYYY às HH:MM
 */
export function formatDateTime(date) {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(dateObj);
}
```

## 📄 src/shared/utils/helpers.js
```javascript
export function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function formatShortDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}

export function formatTime(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function getTimeUntil(targetDate) {
  const now = new Date();
  const target = new Date(targetDate);
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Combina uma data e hora em uma única Date, usando valores padrão se hora estiver vazia
 * @param {Date} date - A data base
 * @param {string} time - A hora no formato HH:MM (pode ser vazia)
 * @param {string} defaultTime - Hora padrão se time estiver vazio (ex: '00:00' ou '23:59')
 * @returns {Date|null} A data combinada ou null se date for null/undefined
 */
export function combineDateAndTime(date, time, defaultTime = '00:00') {
  if (!date) return null;
  
  const timeToUse = (time && time.trim()) ? time : defaultTime;
  const [hours, minutes] = timeToUse.split(':').map(Number);
  
  const combined = new Date(date);
  combined.setHours(hours, minutes, 0, 0);
  
  return combined;
}

/**
 * Converte uma Date para string ISO local (sem conversão de timezone)
 * @param {Date} date - A data a ser convertida
 * @returns {string|null} String ISO local ou null se date for null/undefined
 */
export function toLocalISOString(date) {
  if (!date) return null;
  
  const pad = (num) => num.toString().padStart(2, '0');
  return (
    date.getFullYear() +
    '-' + pad(date.getMonth() + 1) +
    '-' + pad(date.getDate()) +
    'T' + pad(date.getHours()) +
    ':' + pad(date.getMinutes()) +
    ':' + pad(date.getSeconds())
  );
}
```

## 📄 src/shared/utils/imageCrop.js
```javascript
/**
 * Utilitário para recortar imagens
 */

export async function getCroppedImg(imageSrc, croppedAreaPixels) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Não foi possível criar contexto do canvas');
  }

  // Define o tamanho do canvas para a área recortada
  canvas.width = croppedAreaPixels.width;
  canvas.height = croppedAreaPixels.height;

  // Desenha a imagem recortada no canvas
  ctx.drawImage(
    image,
    croppedAreaPixels.x,
    croppedAreaPixels.y,
    croppedAreaPixels.width,
    croppedAreaPixels.height,
    0,
    0,
    croppedAreaPixels.width,
    croppedAreaPixels.height
  );

  // Converte canvas para blob
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Falha ao criar blob da imagem'));
        return;
      }
      resolve(blob);
    }, 'image/jpeg', 0.95);
  });
}

function createImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.src = url;
  });
}
```

## 📄 tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
```

## 📄 vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    allowedHosts: 
      'https://hypertonic-diagrammatically-mechelle.ngrok-free.dev'
    
  }
})
```
