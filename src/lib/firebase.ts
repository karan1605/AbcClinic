import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyCisGxN7udoRGUi3ogkbIQUmeqAl5h4Nk8",
  authDomain: "abcclinic-3504a.firebaseapp.com",
  projectId: "abcclinic-3504a",
  storageBucket: "abcclinic-3504a.firebasestorage.app",
  messagingSenderId: "245447031792",
  appId: "1:245447031792:web:3570a5945ebdede861fb35",
  measurementId: "G-NZJJ3F9LNZ"
};

export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

export interface AppointmentData {
  patientName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot?: string;
  service: string;
  mode?: 'in-clinic' | 'telemedicine';
  notes?: string;
}

export interface InquiryData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function createAppointment(data: AppointmentData) {
  return await addDoc(collection(db, 'appointments'), {
    ...data,
    status: 'pending',
    createdAt: serverTimestamp()
  });
}

export async function createInquiry(data: InquiryData) {
  return await addDoc(collection(db, 'inquiries'), {
    ...data,
    status: 'unread',
    createdAt: serverTimestamp()
  });
}
