package com.example.sp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Student {
    @Id
    int studentId;
    String studentName;
    int studentAge;
    long groupId;
    public Student() {
    }
    public Student(int studentId, String studentName, int studentAge, long groupId) {
      this.studentId = studentId;
      this.studentName = studentName;
      this.studentAge = studentAge;
      this.groupId = groupId;
    }
    public int getStudentId() {
      return studentId;
    }
    public void setStudentId(int studentId) {
      this.studentId = studentId;
    }
    public String getStudentName() {
      return studentName;
    }
    public void setStudentName(String studentName) {
      this.studentName = studentName;
    }
    public int getStudentAge() {
      return studentAge;
    }
    public void setStudentAge(int studentAge) {
      this.studentAge = studentAge;
    }
    public long getGroupId() {
      return groupId;
    }
    public void setGroupId(long groupId) {
      this.groupId = groupId;
    }

}
