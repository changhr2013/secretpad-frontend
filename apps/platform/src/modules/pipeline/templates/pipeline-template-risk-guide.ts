import templateImg from '@/assets/template-risk-control.jpg';
import { Model } from '@/util/valtio-helper';

import type { PipelineTemplateContribution } from '../pipeline-protocol';
import { PipelineTemplateType } from '../pipeline-protocol';

export class TemplateGuideRisk extends Model implements PipelineTemplateContribution {
  type: PipelineTemplateType = PipelineTemplateType.RISK_GUIDE;
  name = `金融风控`;
  argsFilled = true;

  // TODO: this is place holder, to be replaced
  minimap = templateImg;
  content = (graphId: string) => ({
    edges: [
      {
        edgeId: `${graphId}-node-1-output-0__${graphId}-node-3-input-0`,
        sourceAnchor: `${graphId}-node-1-output-0`,
        targetAnchor: `${graphId}-node-3-input-0`,
        source: `${graphId}-node-1`,
        target: `${graphId}-node-3`,
      },
      {
        edgeId: `${graphId}-node-2-output-0__${graphId}-node-3-input-1`,
        sourceAnchor: `${graphId}-node-2-output-0`,
        targetAnchor: `${graphId}-node-3-input-1`,
        source: `${graphId}-node-2`,
        target: `${graphId}-node-3`,
      },
      {
        edgeId: `${graphId}-node-3-output-0__${graphId}-node-4-input-0`,
        sourceAnchor: `${graphId}-node-3-output-0`,
        targetAnchor: `${graphId}-node-4-input-0`,
        source: `${graphId}-node-3`,
        target: `${graphId}-node-4`,
      },
      {
        edgeId: `${graphId}-node-3-output-0__${graphId}-node-5-input-0`,
        sourceAnchor: `${graphId}-node-3-output-0`,
        targetAnchor: `${graphId}-node-5-input-0`,
        source: `${graphId}-node-3`,
        target: `${graphId}-node-5`,
      },
      {
        edgeId: `${graphId}-node-5-output-0__${graphId}-node-6-input-0`,
        sourceAnchor: `${graphId}-node-5-output-0`,
        targetAnchor: `${graphId}-node-6-input-0`,
        source: `${graphId}-node-5`,
        target: `${graphId}-node-6`,
      },
      {
        edgeId: `${graphId}-node-6-output-1__${graphId}-node-8-input-1`,
        sourceAnchor: `${graphId}-node-6-output-1`,
        targetAnchor: `${graphId}-node-8-input-1`,
        source: `${graphId}-node-6`,
        target: `${graphId}-node-8`,
      },
      {
        edgeId: `${graphId}-node-5-output-1__${graphId}-node-8-input-0`,
        sourceAnchor: `${graphId}-node-5-output-1`,
        targetAnchor: `${graphId}-node-8-input-0`,
        source: `${graphId}-node-5`,
        target: `${graphId}-node-8`,
      },
      {
        edgeId: `${graphId}-node-6-output-0__${graphId}-node-9-input-0`,
        sourceAnchor: `${graphId}-node-6-output-0`,
        targetAnchor: `${graphId}-node-9-input-0`,
        source: `${graphId}-node-6`,
        target: `${graphId}-node-9`,
      },
      {
        edgeId: `${graphId}-node-6-output-0__${graphId}-node-10-input-0`,
        sourceAnchor: `${graphId}-node-6-output-0`,
        targetAnchor: `${graphId}-node-10-input-0`,
        source: `${graphId}-node-6`,
        target: `${graphId}-node-10`,
      },
      {
        edgeId: `${graphId}-node-6-output-0__${graphId}-node-11-input-0`,
        sourceAnchor: `${graphId}-node-6-output-0`,
        targetAnchor: `${graphId}-node-11-input-0`,
        source: `${graphId}-node-6`,
        target: `${graphId}-node-11`,
      },
      {
        edgeId: `${graphId}-node-6-output-0__${graphId}-node-12-input-1`,
        sourceAnchor: `${graphId}-node-6-output-0`,
        targetAnchor: `${graphId}-node-12-input-1`,
        source: `${graphId}-node-6`,
        target: `${graphId}-node-12`,
      },
      {
        edgeId: `${graphId}-node-11-output-0__${graphId}-node-12-input-0`,
        sourceAnchor: `${graphId}-node-11-output-0`,
        targetAnchor: `${graphId}-node-12-input-0`,
        source: `${graphId}-node-11`,
        target: `${graphId}-node-12`,
      },
      {
        edgeId: `${graphId}-node-11-output-0__${graphId}-node-13-input-0`,
        sourceAnchor: `${graphId}-node-11-output-0`,
        targetAnchor: `${graphId}-node-13-input-0`,
        source: `${graphId}-node-11`,
        target: `${graphId}-node-13`,
      },
      {
        edgeId: `${graphId}-node-8-output-0__${graphId}-node-13-input-1`,
        sourceAnchor: `${graphId}-node-8-output-0`,
        targetAnchor: `${graphId}-node-13-input-1`,
        source: `${graphId}-node-8`,
        target: `${graphId}-node-13`,
      },
      {
        edgeId: `${graphId}-node-13-output-0__${graphId}-node-15-input-0`,
        sourceAnchor: `${graphId}-node-13-output-0`,
        targetAnchor: `${graphId}-node-15-input-0`,
        source: `${graphId}-node-13`,
        target: `${graphId}-node-15`,
      },
      {
        edgeId: `${graphId}-node-13-output-0__${graphId}-node-14-input-0`,
        sourceAnchor: `${graphId}-node-13-output-0`,
        targetAnchor: `${graphId}-node-14-input-0`,
        source: `${graphId}-node-13`,
        target: `${graphId}-node-14`,
      },
    ],
    nodes: [
      {
        outputs: [`${graphId}-node-1-output-0`],
        nodeDef: {
          domain: `read_data`,
          name: `datatable`,
          version: `0.0.1`,
          attrPaths: ['datatable_selected'],
          attrs: [
            {
              s: 'alice-table',
              is_na: false,
            },
          ],
        },
        inputs: [],
        codeName: `read_data/datatable`,
        x: -370,
        y: -250,
        label: `样本表`,
        graphNodeId: `${graphId}-node-1`,
        status: `STAGING`,
      },
      {
        outputs: [`${graphId}-node-10-output-0`],
        nodeDef: {
          domain: `stats`,
          name: `ss_vif`,
          version: `1.0.0`,
          attrPaths: ['input/input_ds/feature_selects'],
          attrs: [
            {
              ss: ['duration'],
            },
          ],
        },
        inputs: [`${graphId}-node-6-output-0`],
        codeName: `stats/ss_vif`,
        x: -240,
        y: 190,
        label: `VIF指标计算`,
        graphNodeId: `${graphId}-node-10`,
        status: `STAGING`,
      },
      {
        outputs: [`${graphId}-node-11-output-0`, `${graphId}-node-11-output-1`],
        nodeDef: {
          attrPaths: [
            'input/input_ds/feature_selects',
            'input/input_ds/label',
            'epochs',
            'learning_rate',
            'batch_size',
            'sig_type',
            'reg_type',
            'penalty',
            'l2_norm',
            'eps',
          ],
          attrs: [
            {
              is_na: false,
              ss: ['duration'],
            },
            {
              is_na: false,
              ss: ['y'],
            },
            {
              i64: 10,
              is_na: false,
            },
            {
              f: 0.1,
              is_na: false,
            },
            {
              i64: 1024,
              is_na: false,
            },
            {
              is_na: false,
              s: 't1',
            },
            {
              is_na: false,
              s: 'logistic',
            },
            {
              is_na: false,
              s: 'None',
            },
            {
              f: 0.5,
              is_na: false,
            },
            {
              f: 0.001,
              is_na: false,
            },
          ],
          domain: 'ml.train',
          name: 'ss_sgd_train',
          version: '1.0.0',
        },
        inputs: [`${graphId}-node-6-output-0`],
        codeName: `ml.train/ss_sgd_train`,
        x: -40,
        y: 220,
        label: `逻辑回归训练`,
        graphNodeId: `${graphId}-node-11`,
        status: `STAGING`,
      },
      {
        outputs: [`${graphId}-node-12-output-0`],
        nodeDef: {
          domain: `ml.eval`,
          name: `ss_pvalue`,
          version: `1.0.0`,
        },
        inputs: [`${graphId}-node-11-output-0`, `${graphId}-node-6-output-0`],
        codeName: `ml.eval/ss_pvalue`,
        x: -250,
        y: 310,
        label: `P-VALUE评估`,
        graphNodeId: `${graphId}-node-12`,
        status: `STAGING`,
      },
      {
        outputs: [`${graphId}-node-13-output-0`],
        nodeDef: {
          attrPaths: [
            'input/input_ds/saved_features',
            'batch_size',
            'receiver',
            'pred_name',
            'save_ids',
            'save_label',
          ],
          attrs: [
            {
              ss: ['contact_cellular'],
              is_na: false,
            },
            {
              i64: 1024,
              is_na: false,
            },
            {
              ss: ['bob'],
              is_na: false,
            },
            {
              s: 'pred',
              is_na: false,
            },
            {
              b: true,
              is_na: false,
            },
            {
              b: true,
              is_na: false,
            },
          ],
          domain: 'ml.predict',
          name: 'ss_sgd_predict',
          version: '1.0.0',
        },
        inputs: [`${graphId}-node-11-output-0`, `${graphId}-node-8-output-0`],
        codeName: `ml.predict/ss_sgd_predict`,
        x: 40,
        y: 330,
        label: `逻辑回归预测`,
        graphNodeId: `${graphId}-node-13`,
        status: `STAGING`,
      },
      {
        outputs: [`${graphId}-node-14-output-0`],
        nodeDef: {
          domain: `ml.eval`,
          name: `biclassification_eval`,
          version: `1.0.0`,
          attrPaths: ['input/input_ds/label', 'input/input_ds/prediction'],
          attrs: [
            { ss: ['y'], is_na: false },
            { ss: ['pred'], is_na: false },
          ],
        },
        inputs: [`${graphId}-node-13-output-0`],
        codeName: `ml.eval/biclassification_eval`,
        x: 130,
        y: 450,
        label: `二分类评估`,
        graphNodeId: `${graphId}-node-14`,
        status: `STAGING`,
      },
      {
        outputs: [`${graphId}-node-15-output-0`],
        nodeDef: {
          domain: `ml.eval`,
          name: `prediction_bias_eval`,
          version: `1.0.0`,
          attrPaths: ['input/input_ds/label', 'input/input_ds/prediction'],
          attrs: [
            { ss: ['y'], is_na: false },
            { ss: ['pred'], is_na: false },
          ],
        },
        inputs: [`${graphId}-node-13-output-0`],
        codeName: `ml.eval/prediction_bias_eval`,
        x: -110,
        y: 540,
        label: `预测偏差评估`,
        graphNodeId: `${graphId}-node-15`,
        status: `STAGING`,
      },
      {
        outputs: [`${graphId}-node-2-output-0`],
        nodeDef: {
          domain: `read_data`,
          name: `datatable`,
          version: `0.0.1`,
          attrPaths: ['datatable_selected'],
          attrs: [
            {
              s: 'bob-table',
              is_na: false,
            },
          ],
        },
        inputs: [],
        codeName: `read_data/datatable`,
        x: -140,
        y: -250,
        label: `样本表`,
        graphNodeId: `${graphId}-node-2`,
        status: `STAGING`,
      },
      {
        outputs: [`${graphId}-node-3-output-0`],
        nodeDef: {
          attrPaths: [
            'input/input_table_1/key',
            'input/input_table_2/key',
            'protocol',
            'sort_result',
            'allow_duplicate_keys',
            'allow_duplicate_keys/no/skip_duplicates_check',
            'ecdh_curve',
            'allow_duplicate_keys/no/receiver_parties',
          ],
          attrs: [
            {
              ss: ['id1'],
              is_na: false,
            },
            {
              ss: ['id2'],
              is_na: false,
            },
            {
              s: 'PROTOCOL_RR22',
              is_na: false,
            },
            {
              b: true,
              is_na: false,
            },
            {
              s: 'no',
              is_na: false,
            },
            {
              is_na: true,
            },
            {
              s: 'CURVE_FOURQ',
              is_na: false,
            },
            { ss: ['alice', 'bob'], is_na: false },
          ],
          domain: 'data_prep',
          name: 'psi',
          version: '0.0.8',
        },
        inputs: [`${graphId}-node-1-output-0`, `${graphId}-node-2-output-0`],
        codeName: `data_prep/psi`,
        x: -240,
        y: -160,
        label: `隐私求交`,
        graphNodeId: `${graphId}-node-3`,
        status: `STAGING`,
      },
      {
        outputs: [`${graphId}-node-4-output-0`],
        nodeDef: {
          domain: `stats`,
          name: `table_statistics`,
          version: `1.0.0`,
          attrPaths: ['input/input_ds/features'],
          attrs: [
            {
              ss: ['y', 'age', 'education', 'default'],
            },
          ],
        },
        inputs: [`${graphId}-node-3-output-0`],
        codeName: `stats/table_statistics`,
        x: -430,
        y: -90,
        label: `全表统计`,
        graphNodeId: `${graphId}-node-4`,
        status: `STAGING`,
      },
      {
        outputs: [`${graphId}-node-5-output-0`, `${graphId}-node-5-output-1`],
        nodeDef: {
          domain: `data_prep`,
          name: `train_test_split`,
          version: `1.0.0`,
        },
        inputs: [`${graphId}-node-3-output-0`],
        codeName: `data_prep/train_test_split`,
        x: -120,
        y: -80,
        label: `随机分割`,
        graphNodeId: `${graphId}-node-5`,
        status: `STAGING`,
      },
      {
        outputs: [
          `${graphId}-node-6-output-0`,
          `${graphId}-node-6-output-1`,
          `${graphId}-node-6-output-2`,
        ],
        nodeDef: {
          domain: `preprocessing`,
          name: `vert_woe_binning`,
          version: `1.0.0`,
          attrPaths: [
            'input/input_ds/feature_selects',
            'input/input_ds/label',
            'secure_device_type',
            'binning_method',
            'bin_num',
            'positive_label',
            'chimerge_init_bins',
            'chimerge_target_bins',
            'chimerge_target_pvalue',
            'report_rules',
          ],
          attrs: [
            {
              ss: ['duration'],
              is_na: false,
            },
            {
              ss: ['y'],
              is_na: false,
            },
            {
              s: 'spu',
              is_na: false,
            },
            {
              s: 'quantile',
              is_na: false,
            },
            {
              i64: 10,
              is_na: false,
            },
            {
              s: '1',
              is_na: false,
            },
            {
              i64: 100,
              is_na: false,
            },
            {
              i64: 10,
              is_na: false,
            },
            {
              f: 0.1,
              is_na: false,
            },
            {
              is_na: true,
            },
          ],
        },
        inputs: [`${graphId}-node-5-output-0`],
        codeName: `preprocessing/vert_woe_binning`,
        x: -140,
        y: 20,
        label: `WOE分箱`,
        graphNodeId: `${graphId}-node-6`,
        status: `STAGING`,
      },
      {
        outputs: [`${graphId}-node-8-output-0`],
        nodeDef: {
          domain: `preprocessing`,
          name: `substitution`,
          version: `1.0.0`,
        },
        inputs: [`${graphId}-node-5-output-1`, `${graphId}-node-6-output-1`],
        codeName: `preprocessing/substitution`,
        x: -10,
        y: 100,
        label: `特征工程应用`,
        graphNodeId: `${graphId}-node-8`,
        status: `STAGING`,
      },
      {
        outputs: [`${graphId}-node-9-output-0`],
        nodeDef: {
          domain: `stats`,
          name: `ss_pearsonr`,
          version: `1.0.0`,
          attrPaths: ['input/input_ds/feature_selects'],
          attrs: [
            {
              ss: ['contact_cellular'],
              is_na: false,
            },
          ],
        },
        inputs: [`${graphId}-node-6-output-0`],
        codeName: `stats/ss_pearsonr`,
        x: -450,
        y: 190,
        label: `相关系数矩阵`,
        graphNodeId: `${graphId}-node-9`,
        status: `STAGING`,
      },
    ],
  });
}
