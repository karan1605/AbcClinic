/**
 * Firebase Client Initialization & Firestore Service for ABC Clinic
 * Project: AbcClinic (abcclinic-3504a)
 */
(function () {
  var firebaseConfig = {
    apiKey: "AIzaSyCisGxN7udoRGUi3ogkbIQUmeqAl5h4Nk8",
    authDomain: "abcclinic-3504a.firebaseapp.com",
    projectId: "abcclinic-3504a",
    storageBucket: "abcclinic-3504a.firebasestorage.app",
    messagingSenderId: "245447031792",
    appId: "1:245447031792:web:3570a5945ebdede861fb35",
    measurementId: "G-NZJJ3F9LNZ"
  };

  var db = null;
  var initPromise = null;

  function getDb() {
    if (db) return Promise.resolve(db);
    if (initPromise) return initPromise;

    initPromise = new Promise(function (resolve, reject) {
      if (typeof window.firebase === 'undefined') {
        reject(new Error('Firebase SDK failed to load. Please check your internet connection.'));
        return;
      }
      try {
        if (!window.firebase.apps.length) {
          window.firebase.initializeApp(firebaseConfig);
        }
        db = window.firebase.firestore();
        resolve(db);
      } catch (err) {
        reject(err);
      }
    });

    return initPromise;
  }

  /**
   * Save an appointment to Firestore
   * @param {Object} data - Patient appointment details
   */
  function saveAppointment(data) {
    return getDb().then(function (database) {
      return database.collection('appointments').add({
        patientName: data.patientName || data.name || '',
        phone: data.phone || '',
        email: data.email || '',
        date: data.date || '',
        timeSlot: data.time || data.timeSlot || '',
        service: data.service || '',
        mode: data.mode || 'in-clinic',
        notes: data.notes || data.message || '',
        status: 'pending',
        createdAt: window.firebase.firestore.FieldValue.serverTimestamp()
      });
    });
  }

  /**
   * Save a contact inquiry message to Firestore
   * @param {Object} data - Contact form submission
   */
  function saveInquiry(data) {
    return getDb().then(function (database) {
      return database.collection('inquiries').add({
        name: data.name || '',
        email: data.email || '',
        phone: data.phone || '',
        message: data.message || '',
        status: 'unread',
        createdAt: window.firebase.firestore.FieldValue.serverTimestamp()
      });
    });
  }

  window.ABCClinicFirebase = {
    config: firebaseConfig,
    getDb: getDb,
    saveAppointment: saveAppointment,
    saveInquiry: saveInquiry
  };
})();
