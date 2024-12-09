'use client';

import axios, { AxiosInstance } from 'axios';
import { api } from '@/config';

export const Http: AxiosInstance = axios.create({ baseURL: api });
