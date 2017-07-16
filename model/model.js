/* jshint esversion: 6 */
const seq = require('./sequelize');
const Seq = require('sequelize');
const user = seq.define('user', {
  name : Seq.STRING,
  password : {
    type  : Seq.STRING,
    set   : function(value) {
      this.setDataValue('password', value);
    },
    validate  : {
      isInt : true
    }
  },
  total_point : Seq.STRING
});

const totalPlan = seq.define('totalPlan', {
  owner_id : Seq.INTEGER,
  start_date : Seq.DATE,
  end_date : Seq.DATE,
  total_todo_time : Seq.DATE,
  total_scheduled_free_time : Seq.DATE,
  max_point : Seq.INTEGER
});

const dayPlan = seq.define('dayPlan', {
  owner_id : Seq.INTEGER,
  start_date : Seq.DATE,
  end_date : Seq.DATE,
  todo_time : Seq.DATE,
  scheduled_free_time : Seq.DATE,
  unscheduled_free_time : Seq.DATE,
  available_time : Seq.DATE,
  unavailable_time : Seq.DATE,
  sleep_time : Seq.DATE,
  total_point : Seq.INTEGER
});

const planUnit = seq.define('planUnit', {
  plan_id : Seq.INTEGER,
  enum_type : Seq.INTEGER,
  title : Seq.STRING,
  actual_log : Seq.STRING,
  total_time : Seq.DATE,
  point_per_hour : Seq.INTEGER
});

const totalPlanStatus = seq.define('totalPlanStatus', {
  plan_id : Seq.INTEGER,
  current_date : Seq.DATE,
  current_point : Seq.INTEGER,
  current_todo_time : Seq.DATE,
  current_unscheduled_time : Seq.DATE
});

const dayPlanStatus = seq.define('dayPlanStatus', {
  day_id : Seq.INTEGER,
  current_time : Seq.DATE,
  current_point : Seq.INTEGER,
  current_todo_time : Seq.DATE,
  current_unscheduled_time : Seq.DATE
});




module.exports = {
  user: user,
  totalPlan : totalPlan,
  totalPlanStatus : totalPlanStatus,
  planUnit : planUnit,
  dayPlan : dayPlan,
  dayPlanStatus : dayPlanStatus
};
