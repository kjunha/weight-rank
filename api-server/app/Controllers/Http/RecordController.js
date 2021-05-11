'use strict';

const BaseController = use('App/Controllers/Http/BaseController');
const Record = use('App/Models/Record');
const User = use('App/Models/User');
const DB = use('Database');

class RecordController extends BaseController {
  // GET | record/rank/:type ::: 종목별 랭킹 조회
  async getList({ request, response }) {
    let params = request.only(['type', 'page']);
    if (params['type']) {
      let typeCheck = await DB.table('record_types')
        .where('type_key', params['type'])
        .first();
      if (!typeCheck) {
        return response.forbidden('type not found');
      }
    }
    let type = params['type'] ?? 'overall'
    let page = params['page'] ?? 1;
    let recordList = await Record.query()
      .select('*', DB.raw('(bp + sq + dl) as overall'))
      .orderBy(type, 'desc')
      .paginate(page, 10)
    return response.json(recordList);
  }

  // GET | record/personal/:user_id ::: 회원별 모든 종목 기록 조회
  async getMyRecords({ request, response }) {
    let userId = request.params.user_id;
    // todo: 유저 테이블 데이터 입력 이후 추가
    // let userCheck = User.query().find(userId)
    let userCheck = true;
    if (!userCheck) {
      return response.forbidden('user not found');
    }
    let myRecords = await Record.query().where('user_id', userId).fetch();
    return response.json(myRecords);
  }

  // POST | record/personal/:user_id ::: 신규 기록 등록 & 기존 기록 업데이트
  async updateRecord({ request, response }) {
    const reqKeys = [
      'record_type',
      'rm_kg',
      'rm_lb',
      'rep_count',
      'video_link',
    ];
    const reqData = request.only(reqKeys);
    const userId = request.params.user_id;
    if (!this.hasRequiredKeys(reqData, reqKeys)) {
      return response.forbidden('insufficient data');
    }
    let typeCheck = await DB.table('record_types')
      .where('type_key', reqData.record_type)
      .first();
    if (!typeCheck) {
      return response.forbidden('type not found');
    }
    let record = await Record.query()
      .where('user_id', userId)
      .where('record_type', reqData.record_type)
      .first();
    if (!record) {
      // 해당 기록이 없을 때 신규 기록 생성
      record = new Record();
      record.user_id = userId;
      record.record_type = reqData.record_type.toUpperCase();
      record.rm_kg = reqData.rm_kg;
      record.rm_lb = reqData.rm_lb;
      record.rep_count = reqData.rep_count;
      record.video_link = reqData.video_link;
      await record.save();
    } else {
      // 기존 기록 업데이트
      record = await Record.find(record.id);
      record.rm_kg = reqData.rm_kg;
      record.rm_lb = reqData.rm_lb;
      record.rep_count = reqData.rep_count;
      record.video_link = reqData.video_link;
      await record.save();
    }
    // 해당 기록이 있으면 기록 업데이트
    return response.json(record);
  }
}

module.exports = RecordController;
