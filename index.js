import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, SafeAreaView, Platform, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { DatabaseConnection } from '../../database/database';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation, StackActions, useRoute, useFocusEffect } from '@react-navigation/native'

const db = new DatabaseConnection.getConnection;

export default function TodosClientes(){
    const route = useRoute();

    const navigation = useNavigation();

}
