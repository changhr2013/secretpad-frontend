/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！

declare namespace API {
  type AbstractInitiatingTypeMessage = Record<string, any>;

  interface AbstractPageResponse {
    pageSize?: number;
    pageNum?: number;
    total?: number;
    totalPage?: number;
  }

  type AbstractVoteConfig = Record<string, any>;

  type AbstractVoteTypeMessage = Record<string, any>;

  interface AddInstToProjectRequest {
    /** Project id */
    projectId?: string;
    /** Institution id */
    instId?: string;
  }

  interface AddNodeToProjectRequest {
    /** Project id */
    projectId?: string;
    /** Node id */
    nodeId?: string;
  }

  interface AddProjectDatatableRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Node id, it can not be blank */
    nodeId?: string;
    /** Datatable id, it can not be blank */
    datatableId?: string;
    /** Datatable column config list */
    configs?: Array<TableColumnConfigParam>;
    /** Tee node id, it can be blank and has default value */
    teeNodeId?: string;
    /** Datasource id, it can be blank and has default value */
    datasourceId?: string;
    type?: string;
  }

  interface AllDatatableListVO {
    /** Datatable view object list */
    datatableNodeVOList?: Array<DatatableNodeVO>;
    /** The total count of datatable */
    totalDatatableNums?: number;
  }

  interface AllNodeResultsListVO {
    /** Node results view object */
    nodeAllResultsVOList?: Array<NodeAllResultsVO>;
    /** The count of node results */
    totalNodeResultNums?: number;
  }

  interface ArchiveProjectRequest {
    projectId?: string;
  }

  type AuthErrorCode =
    | 202011600
    | 'USER_NOT_FOUND'
    | 202011601
    | 'USER_PASSWORD_ERROR'
    | 202011602
    | 'AUTH_FAILED'
    | 202011603
    | 'USER_IS_LOCKED'
    | 202011604
    | 'RESET_PASSWORD_IS_LOCKED';

  interface AuthProjectVO {
    /** Project id */
    projectId?: string;
    /** Project name */
    name?: string;
    /** Compute mode */
    computeMode?: string;
    /** Association key list */
    associateKeys?: Array<string>;
    /** Group key list */
    groupKeys?: Array<string>;
    /** Label key list */
    labelKeys?: Array<string>;
    /** Authorized time */
    gmtCreate?: string;
  }

  interface CloudGraphNodeTaskLogsVO {
    /** Graph node task status */
    status?: GraphNodeTaskStatus;
    /** Task logs */
    logs?: Array<string>;
    config?: boolean;
    nodeParties?: Array<NodeSimpleInfo>;
  }

  interface ComponentVersion {
    /** teeDmImage */
    teeDmImage?: string;
    /** teeAppImage */
    teeAppImage?: string;
    /** capsuleManagerImage */
    capsuleManagerSimImage?: string;
    /** secretpadImage */
    secretpadImage?: string;
    /** secretflowServingImage */
    secretflowServingImage?: string;
    /** kusciaImage */
    kusciaImage?: string;
    /** secretflowImage */
    secretflowImage?: string;
    /** dataProxyImage */
    dataProxyImage?: string;
  }

  type ConcurrentErrorCode =
    | 202012601
    | 'TASK_INTERRUPTED_ERROR'
    | 202012602
    | 'TASK_EXECUTION_ERROR'
    | 202012603
    | 'TASK_TIME_OUT_ERROR';

  interface CreateApprovalRequest {
    initiatorId?: string;
    voteType?: string;
    voteConfig?: AbstractVoteConfig;
  }

  interface CreateDataRequest {
    /** Node id */
    nodeId?: string;
    /** The data file name, it must be the same as that of the source file */
    name?: string;
    /** The real name of the file, passed only to the back end, is the field that the user needs to
manipulate, derived from the value returned by the back end in the uplink mouth */
    realName?: string;
    /** Specific table name, user manually filled */
    tableName?: string;
    /** Datatable description */
    description?: string;
    datasourceType?: string;
    datasourceName?: string;
    /** Datatable schema */
    datatableSchema?: Array<DatatableSchema>;
    /** When registering a table, users can specify certain specific values to be treated as nulls. */
    nullStrs?: Array<string>;
  }

  interface CreateDatasourceRequest {
    ownerId?: string;
    nodeIds?: Array<string>;
    type?: string;
    name?: string;
    dataSourceInfo: DataSourceInfo;
  }

  interface CreateDatasourceVO {
    datasourceId?: string;
    failedCreatedNodes?: Record<string, any>;
  }

  interface CreateDatatableRequest {
    /** owner ID */
    ownerId?: string;
    /** The node ID to which the data belongs. In p2p mode, there may be more than one node ID. */
    nodeIds?: Array<string>;
    /** table name */
    datatableName?: string;
    /** datasource id */
    datasourceId?: string;
    /** datasource name */
    datasourceName?: string;
    /** datatable type */
    datasourceType?: string;
    /** table description */
    desc?: string;
    /** table url */
    relativeUri?: string;
    /** table columns */
    columns?: Array<TableColumnVO>;
    partition?: OdpsPartitionRequest;
    /** When registering a table, users can specify certain specific values to be treated as nulls. */
    nullStrs?: Array<string>;
  }

  interface CreateFeatureDatasourceRequest {
    ownerId?: string;
    nodeIds?: Array<string>;
    featureTableName?: string;
    type?: string;
    desc?: string;
    url?: string;
    columns?: Array<TableColumnVO>;
    datasourceId?: string;
  }

  interface CreateGraphRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Graph name, it can not be blank */
    name?: string;
    /** Template id */
    templateId?: string;
    /** Graph node list */
    nodes?: Array<GraphNode>;
    /** Graph edge list */
    edges?: Array<GraphEdge>;
  }

  interface CreateGraphVO {
    /** Graph id */
    graphId?: string;
  }

  interface CreateModelServingRequest {
    modelId?: string;
    projectId?: string;
    partyConfigs?: Array<OrgSecretflowSecretpadServiceModelModelCreateModelServingRequestPartyConfig>;
  }

  type CreateModelServingRequest$PartyConfig = Record<string, any>;

  interface CreateNodeRequest {
    /** Node name, the value cannot be empty and can be the same */
    name: string;
    /** node feature indicates by bit, bit0 - mpc | bit1 - tee | bit2 mpc&tee */
    mode: number;
  }

  interface CreateProjectRequest {
    /** Project name */
    name?: string;
    /** Project description */
    description?: string;
    /** computeMode mpc,tee */
    computeMode?: string;
    /** tee node domainId */
    teeNodeId?: string;
    computeFunc?: string;
  }

  interface CreateProjectVO {
    /** Project id */
    projectId?: string;
  }

  type Cron = Record<string, any>;

  type DataErrorCode =
    | 202011801
    | 'FILE_NAME_EMPTY'
    | 202011802
    | 'FILE_TYPE_NOT_SUPPORT'
    | 202011803
    | 'FILE_EXISTS_ERROR'
    | 202011804
    | 'FILE_NOT_EXISTS_ERROR'
    | 202011805
    | 'ILLEGAL_PARAMS_ERROR'
    | 202011806
    | 'NAME_DUPLICATION_ERROR';

  type DataResourceTypeEnum = 'NODE_ID' | 'PROJECT_ID';

  type DataSource = Record<string, any>;

  type DataSourceConfig = Record<string, any>;

  type DataSourceInfo = Record<string, any>;

  interface DataSourceRelatedNode {
    nodeId?: string;
    nodeName?: string;
    status?: string;
  }

  type DataSourceTypeEnum = 'HTTP' | 'OSS' | 'LOCAL' | 'MYSQL' | 'ODPS';

  type DataTableTypeEnum = 'HTTP' | 'CSV';

  interface DatasourceDetailAggregateVO {
    nodes?: Array<DataSourceRelatedNode>;
    datasourceId?: string;
    name?: string;
    type?: string;
    status?: string;
    info?: DataSourceInfo;
  }

  interface DatasourceDetailRequest {
    ownerId?: string;
    datasourceId?: string;
    type?: string;
  }

  type DatasourceErrorCode =
    | 202012501
    | 'DATA_SOURCE_ENDPOINT_CONNECT_FAIL'
    | 202012502
    | 'DATA_SOURCE_CREATE_FAIL'
    | 202012503
    | 'DATA_SOURCE_BUCKET_NOT_EXIST'
    | 202012504
    | 'DATA_SOURCE_CREDENTIALS_INVALID'
    | 202012506
    | 'DATA_SOURCE_BUCKET_NOT_MATCH_ENDPOINT'
    | 202012507
    | 'DATA_SOURCE_ENDPOINT_API_PORT_ERROR'
    | 202012508
    | 'DATASOURCE_UNKNOWN_EXCEPTION'
    | 202012509
    | 'DATA_SOURCE_DELETE_FAIL'
    | 202012510
    | 'DATA_SOURCE_NOT_FOUND'
    | 202012505
    | 'QUERY_DATASOURCE_FAILED'
    | 202012511
    | 'UPDATE_DATASOURCE_FAILED';

  interface DatasourceListInfoAggregate {
    nodes?: Array<DataSourceRelatedNode>;
    datasourceId?: string;
    name?: string;
    type?: string;
    relatedDatas?: Array<string>;
  }

  interface DatasourceListRequest {
    /** page num default 1 */
    page?: number;
    /** page size default 10 */
    size?: number;
    /** sort，property,property(,ASC|DESC) "createdDate,desc" */
    sort?: Record<string, any>;
    ownerId?: string;
    name?: string;
    status?: string;
    types?: Array<string>;
  }

  interface DatasourceListVO {
    pageSize?: number;
    pageNum?: number;
    total?: number;
    totalPage?: number;
    infos?: Array<DatasourceListInfoAggregate>;
  }

  interface DatasourceNodesRequest {
    ownerId?: string;
    datasourceId?: string;
  }

  interface DatasourceNodesVO {
    nodes?: Array<DataSourceRelatedNode>;
  }

  type DatatableErrorCode =
    | 202011301
    | 'DATATABLE_NOT_EXISTS'
    | 202011302
    | 'UNSUPPORTED_DATATABLE_TYPE'
    | 202011303
    | 'QUERY_DATATABLE_FAILED'
    | 202011304
    | 'DELETE_DATATABLE_FAILED'
    | 202011305
    | 'DATATABLE_DUPLICATED_AUTHORIZED'
    | 202011306
    | 'QUERY_DATATABLE_GRANT_FAILED'
    | 202011307
    | 'CREATE_DATATABLE_GRANT_FAILED'
    | 202011308
    | 'CREATE_TEE_JOB_FAILED';

  interface DatatableNodeVO {
    datatableVO?: DatatableVO;
    /** Node name the table belongs to */
    nodeName?: string;
    /** Node id the table belongs to */
    nodeId?: string;
  }

  interface DatatableSchema {
    /** Feature name */
    featureName?: string;
    /** Feature type */
    featureType?: string;
    /** Feature description */
    featureDescription?: string;
  }

  interface DatatableVO {
    /** Datatable id */
    datatableId?: string;
    /** Datatable name */
    datatableName?: string;
    /** Datatable status Status：Available，Unavailable */
    status?: string;
    /** Datatable push to tee status Status：FAILED/SUCCESS/RUNNING */
    pushToTeeStatus?: string;
    /** Datatable push to tee error message */
    pushToTeeErrMsg?: string;
    /** The data source id which it belongs to */
    datasourceId?: string;
    /** The data source type which it belongs to */
    datasourceType?: string;
    /** The data source name which it belongs to */
    datasourceName?: string;
    /** The data source node which it belongs to */
    nodeId?: string;
    /** Relative uri */
    relativeUri?: string;
    /** Datatable type */
    type?: string;
    /** Datatable description */
    description?: string;
    /** Datatable table column view object list */
    schema?: Array<TableColumnVO>;
    /** Authorized project list */
    authProjects?: Array<AuthProjectVO>;
    partition?: OdpsPartitionRequest;
    nullStrs?: Array<string>;
  }

  type DbChangeAction = 'CREATE' | 'UPDATE' | 'REMOVE';

  interface DbSyncRequest {
    syncDataType?: string;
    projectNodesInfo?: ProjectNodesInfo;
  }

  interface DeleteDatasourceRequest {
    ownerId?: string;
    datasourceId?: string;
    type?: string;
  }

  interface DeleteDatatableRequest {
    /** Node id */
    nodeId?: string;
    /** Datatable id */
    datatableId?: string;
    /** Tee node id, it can be blank and has default value */
    teeNodeId?: string;
    /** Datasource id, it can be blank and has default value */
    datasourceId?: string;
    /** Relative uri */
    relativeUri?: string;
    type?: string;
  }

  interface DeleteGraphRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Graph id, it can not be blank */
    graphId?: string;
  }

  interface DeleteModelPackRequest {
    modelId?: string;
    nodeId?: string;
  }

  interface DeleteModelServingRequest {
    servingId?: string;
  }

  interface DeleteProjectDatatableRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Node id, it can not be blank */
    nodeId?: string;
    /** Datatable id, it can not be blank */
    datatableId?: string;
    type?: string;
  }

  interface DiscardModelPackRequest {
    modelId?: string;
  }

  interface DownloadDataRequest {
    /** Node id */
    nodeId?: string;
    /** Domain data id */
    domainDataId?: string;
  }

  interface FeatureDataSourceVO {
    nodeId?: string;
    featureTableId?: string;
    featureTableName?: string;
    columns?: Array<TableColumnVO>;
  }

  type FeatureTableErrorCode =
    | 202012301
    | 'FEATURE_TABLE_NOT_EXIST'
    | 202012302
    | 'FEATURE_TABLE_IP_FILTER'
    | 202012303
    | 'FEATURE_TABLE_IP_NOT_KNOWN';

  type Field = Record<string, any>;

  type FileMeta = Record<string, any>;

  interface FullUpdateGraphRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Graph id, it can not be blank */
    graphId?: string;
    /** Graph node information list */
    nodes?: Array<GraphNodeInfo>;
    /** Graph edge list */
    edges?: Array<GraphEdge>;
    /** Graph max parallelism */
    maxParallelism?: number;
    dataSourceConfig?: Array<OrgSecretflowSecretpadServiceModelGraphFullUpdateGraphRequestGraphDataSourceConfig>;
  }

  type FullUpdateGraphRequest$GraphDataSourceConfig = Record<string, any>;

  interface GetComponentRequest {
    /** app of the component, it can not be blank */
    app?: string;
    /** Namespace of the component, it can not be blank */
    domain?: string;
    /** Component name, it can not be blank */
    name?: string;
  }

  interface GetDatatableRequest {
    /** Node id */
    nodeId?: string;
    /** Datatable id */
    datatableId?: string;
    type?: string;
    /** Tee node id, it can be blank and has default value */
    teeNodeId?: string;
  }

  interface GetGraphRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Graph id, it can not be blank */
    graphId?: string;
  }

  interface GetNodeResultDetailRequest {
    /** Node id */
    nodeId?: string;
    /** Domain data id */
    domainDataId?: string;
    /** Rules for filtering by data type, not filled when listing all outputs */
    dataType?: string;
    /** Rules for producer filtering by data vendor, not filled when listing all outputs */
    dataVendor?: string;
  }

  interface GetProjectDatatableRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Node id, it can not be blank */
    nodeId?: string;
    /** Datatable id, it can not be blank */
    datatableId?: string;
    type?: string;
  }

  interface GetProjectGraphDomainDataSourceRequest {
    /** Project id */
    projectId?: string;
  }

  interface GetProjectGraphRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** graphId, it can not be blank */
    graphId?: string;
  }

  interface GetProjectJobRequest {
    /** Project id */
    projectId?: string;
    /** Job id */
    jobId?: string;
  }

  interface GetProjectJobTaskLogRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Job id, it can not be blank */
    jobId?: string;
    /** Task id, it can not be blank */
    taskId?: string;
  }

  interface GetProjectJobTaskOutputRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Job id, it can not be blank */
    jobId?: string;
    /** Task id, it can not be blank */
    taskId?: string;
    /** Output id, it can not be blank */
    outputId?: string;
  }

  interface GetProjectRequest {
    /** Project id, it can not be blank */
    projectId?: string;
  }

  type GraphDataSourceConfig = Record<string, any>;

  interface GraphDetailVO {
    /** Project id */
    projectId?: string;
    /** Graph id */
    graphId?: string;
    /** Graph name */
    name?: string;
    /** Graph node detail list */
    nodes?: Array<GraphNodeDetail>;
    /** Graph edge list */
    edges?: Array<GraphEdge>;
    /** Graph max parallelism */
    maxParallelism?: number;
    /** data source configuration */
    dataSourceConfig?: Array<OrgSecretflowSecretpadServiceModelGraphGraphDetailVODataSourceConfig>;
  }

  type GraphDetailVO$DataSourceConfig = Record<string, any>;

  interface GraphEdge {
    /** Edge id */
    edgeId?: string;
    /** Graph edge source attribute */
    source?: string;
    /** Graph edge sourceAnchor attribute */
    sourceAnchor?: string;
    /** Graph edge target attribute */
    target?: string;
    /** Graph edge targetAnchor attribute */
    targetAnchor?: string;
  }

  type GraphErrorCode =
    | 202011701
    | 'COMPONENT_NOT_EXISTS'
    | 202011702
    | 'GRAPH_NOT_EXISTS'
    | 202011703
    | 'GRAPH_EXISTS'
    | 202011704
    | 'GRAPH_NODE_NOT_EXISTS'
    | 202011705
    | 'GRAPH_DATATABLE_EMPTY'
    | 202011706
    | 'COMPONENT_18N_ERROR'
    | 202011707
    | 'GRAPH_JOB_INVALID'
    | 202011708
    | 'GRAPH_NODE_OUTPUT_NOT_EXISTS'
    | 202011709
    | 'RESULT_TYPE_NOT_SUPPORTED'
    | 202011710
    | 'GRAPH_DEPENDENT_NODE_NOT_RUN'
    | 202011711
    | 'GRAPH_NODE_ROUTE_NOT_EXISTS'
    | 202011712
    | 'GRAPH_NOT_OWNER_CANNOT_UPDATE'
    | 202011713
    | 'NON_OUR_CREATION_CAN_VIEWED';

  type GraphJobStatus = 'RUNNING' | 'STOPPED' | 'SUCCEED' | 'FAILED';

  interface GraphMetaVO {
    /** Project id */
    projectId?: string;
    /** Graph id */
    graphId?: string;
    /** Graph name */
    name?: string;
    /** Graph owner id */
    ownerId?: string;
  }

  interface GraphNode {
    /** Graph code name */
    codeName?: string;
    /** Graph node id */
    graphNodeId?: string;
    /** Label column */
    label?: string;
    /** X value */
    x?: number;
    /** Y value */
    y?: number;
    /** Graph node task status */
    status?: GraphNodeTaskStatus;
  }

  interface GraphNodeCloudLogsRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** the graph nodeId */
    graphNodeId?: string;
    /** the graph node jobId */
    jobId?: string;
    /** the graph node taskId */
    taskId?: string;
    /** ture:query node running parties false:not query node running parties */
    queryParties?: boolean;
    /** the requester nodeId */
    nodeId?: string;
  }

  interface GraphNodeDetail {
    /** Graph code name */
    codeName?: string;
    /** Graph node id */
    graphNodeId?: string;
    /** Label column */
    label?: string;
    /** X value */
    x?: number;
    /** Y value */
    y?: number;
    /** Project graph input list */
    inputs?: Array<string>;
    /** Project graph output list */
    outputs?: Array<string>;
    /** Project graph nodeDef metadata model */
    nodeDef?: Record<string, any>;
    /** Graph node task status */
    status?: GraphNodeTaskStatus;
    /** JobId，the Job associated with this GraphNode is empty if it is not associated */
    jobId?: string;
    /** TaskId，the Task associated with this GraphNode is empty if it is not associated */
    taskId?: string;
    /** Project result base view object list */
    results?: Array<ProjectResultBaseVO>;
    /** the graph node running parties */
    parties?: Array<NodeSimpleInfo>;
  }

  interface GraphNodeInfo {
    /** Graph code name */
    codeName?: string;
    /** Graph node id */
    graphNodeId?: string;
    /** Label column */
    label?: string;
    /** X value */
    x?: number;
    /** Y value */
    y?: number;
    /** Project graph input list */
    inputs?: Array<string>;
    /** Project graph output list */
    outputs?: Array<string>;
    /** Project graph nodeDef metadata model */
    nodeDef?: Record<string, any>;
  }

  interface GraphNodeLogsRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Graph id, it can not be blank */
    graphId?: string;
    /** Graph node id, it can not be blank */
    graphNodeId?: string;
  }

  interface GraphNodeMaxIndexRefreshRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Graph id, it can not be blank */
    graphId?: string;
    /** max node index in current graph */
    currentIndex?: number;
  }

  interface GraphNodeMaxIndexRefreshVO {
    maxIndex?: number;
  }

  interface GraphNodeOutputRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Graph id, it can not be blank */
    graphId?: string;
    /** Graph node id, it can not be blank */
    graphNodeId?: string;
    /** Graph node output id, it can not be blank */
    outputId?: string;
  }

  interface GraphNodeOutputVO {
    /** Graph result type */
    type?: string;
    /** Graph code name */
    codeName?: string;
    /** Graph node output tabs */
    tabs?: Record<string, any>;
    /** Graph node output file meta */
    meta?: GraphNodeOutputVOFileMeta;
    /** Graph node output jobId */
    jobId?: string;
    /** Graph node output taskId */
    taskId?: string;
    /** this output produced by this graph */
    graphID?: string;
    /** Graph start time */
    gmtCreate?: string;
    /** Graph update time */
    gmtModified?: string;
  }

  type GraphNodeOutputVOFileMeta = Record<string, any>;

  interface GraphNodeStatusVO {
    /** Graph node id */
    graphNodeId?: string;
    /** Graph node task id */
    taskId?: string;
    /** Graph node job id */
    jobId?: string;
    /** Graph node task status */
    status?: GraphNodeTaskStatus;
    /** Graph node job parties */
    parties?: Array<NodeSimpleInfo>;
  }

  interface GraphNodeTaskLogsVO {
    /** Graph node task status */
    status?: GraphNodeTaskStatus;
    /** Task logs */
    logs?: Array<string>;
  }

  type GraphNodeTaskStatus =
    | 'STAGING'
    | 'INITIALIZED'
    | 'RUNNING'
    | 'STOPPED'
    | 'SUCCEED'
    | 'FAILED';

  interface GraphStatus {
    /** Check if the graph is finished */
    finished?: boolean;
    /** Graph node status view object list */
    nodes?: Array<GraphNodeStatusVO>;
  }

  type HttpServletRequest = Record<string, any>;

  type HttpServletResponse = Record<string, any>;

  type InstErrorCode =
    | 202011200
    | 'INST_NOT_EXISTS'
    | 202011201
    | 'INST_NOT_MATCH_NODE'
    | 202011202
    | 'INST_NODE_COUNT_LIMITED'
    | 202011203
    | 'INST_MISMATCH_LOGIN'
    | 202011204
    | 'INST_REGISTER_CHECK_FAILED'
    | 202011205
    | 'INST_TOKEN_MISMATCH'
    | 202011206
    | 'INST_DUPLICATED'
    | 202011207
    | 'INST_FILE_OPERATION_FAILED';

  interface InstRequest {
    /** ownerId as instId */
    instId?: string;
  }

  interface InstTokenVO {
    /** id */
    nodeId?: string;
    /** nodeName */
    nodeName?: string;
    /** inst token */
    instToken?: string;
    /** ?? time or modify time */
    createTime?: string;
  }

  interface InstVO {
    instId?: string;
    instName?: string;
    localNodeId?: string;
  }

  type JobErrorCode =
    | 202011901
    | 'PROJECT_JOB_NOT_EXISTS'
    | 202011902
    | 'PROJECT_JOB_CREATE_ERROR'
    | 202011903
    | 'PROJECT_JOB_TASK_NOT_EXISTS'
    | 202011904
    | 'PROJECT_JOB_DELETE_ERROR'
    | 202011905
    | 'PROJECT_JOB_CLOUD_LOG_ERROR'
    | 202011906
    | 'PROJECT_JOB_NODE_PERMISSION_ERROR';

  type KusciaApiChannelType = 'BLOCKING' | 'STREAMING' | 'ASYNC';

  type KusciaGrpcErrorCode = 202012101 | 'RPC_ERROR';

  type KusciaModeEnum = 'MASTER' | 'LITE' | 'P2P';

  type KusciaProtocolEnum = 'TLS' | 'MTLS' | 'NOTLS';

  interface ListDatatableRequest {
    /** How many pieces of data are in each page */
    pageSize?: number;
    /** What page is currently requested? Note that starting at 1 represents the first page */
    pageNumber?: number;
    /** Filter the list by nodeName */
    nodeNamesFilter?: Array<string>;
    /** Filter the list by status Available：Datatables that filter available status
Unavailable：Datatables that filter unavailable status Other values or null：All datatables */
    statusFilter?: string;
    /** Fuzzy search by table name */
    datatableNameFilter?: string;
    /** Fuzzy search by table name */
    types?: Array<string>;
    /** Owner Id */
    ownerId?: string;
    /** Tee node id, it can be blank and has default value */
    teeNodeId?: string;
  }

  interface ListGraphNodeStatusRequest {
    /** Project id */
    projectId?: string;
    /** Graph id */
    graphId?: string;
  }

  interface ListGraphRequest {
    /** Project id, it can not be blank */
    projectId?: string;
  }

  interface ListNodeResultRequest {
    /** Owner id */
    ownerId?: string;
    /** How many pieces of data are in each page */
    pageSize?: number;
    /** What page is currently requested? Note that starting at 1 represents the first page */
    pageNumber?: number;
    /** Rules for filtering by node name, not filled when listing all outputs */
    nodeNamesFilter?: Array<string>;
    /** Rules for filtering by kind, not filled when listing all outputs */
    kindFilters?: Array<string>;
    /** Rules for producer filtering by data vendor, not filled when listing all outputs */
    dataVendorFilter?: string;
    /** Filter by any name, such as table name, project, training stream and so on Note: Because the
current version (20230630) does not use name, the front end is required to fill in domain data
id here Filter by ID */
    nameFilter?: string;
    /** The rules are sorted by time 1. Ascending：ascending 2. Descending：descending */
    timeSortingRule?: string;
    /** Tee node id, it can be blank and has default value */
    teeNodeId?: string;
  }

  interface ListProjectFeatureDatasourceRequest {
    projectId?: string;
    nodeId?: string;
  }

  interface ListProjectJobRequest {
    /** What page is currently requested? Note that starting at 1 represents the first page */
    pageNum?: number;
    /** How many pieces of data are in each page */
    pageSize?: number;
    /** Project id, it can not be blank */
    projectId?: string;
    /** Graph id */
    graphId?: string;
  }

  interface LoginRequest {
    /** User name */
    name?: string;
    /** User password */
    passwordHash?: string;
  }

  interface MessageDetailRequest {
    /** requester ownerId */
    ownerId?: string;
    /** unique voteID */
    voteId?: string;
    /** if it is initiator */
    isInitiator: boolean;
    voteType?: string;
    projectId?: string;
  }

  interface MessageDetailVO {
    messageName?: string;
    type?: string;
    status?: string;
  }

  interface MessageListRequest {
    /** page num default 1 */
    page?: number;
    /** page size default 10 */
    size?: number;
    /** sort，property,property(,ASC|DESC) "createdDate,desc" */
    sort?: Record<string, any>;
    /** if i am initiator */
    isInitiator?: boolean;
    /** requester nodeID */
    ownerId?: string;
    /** if the message has been processed */
    isProcessed?: boolean;
    /** vote type {@link VoteTypeEnum} */
    type?: string;
    /** fuzzy search */
    keyWord?: string;
  }

  interface MessageListVO {
    pageSize?: number;
    pageNum?: number;
    total?: number;
    totalPage?: number;
    messages?: Array<MessageVO>;
  }

  interface MessagePendingCountRequest {
    /** participant owner id */
    ownerId?: string;
  }

  interface MessageVO {
    /** see {@link org.secretflow.secretpad.service.enums.VoteTypeEnum} */
    type?: string;
    /** see {@link org.secretflow.secretpad.service.enums.VoteStatusEnum} approved/rejected/null

<p>for indicator this status id decided by multi-party all party approve,it is approved one
party reject,it is rejected no party reject,some party approve and some party not voted,it is
waiting approved

<p>for vote receiver,the status is only its own status */
    status?: string;
    initiatingTypeMessage?: AbstractInitiatingTypeMessage;
    voteTypeMessage?: AbstractVoteTypeMessage;
    /** messageName */
    messageName?: string;
    /** create time */
    createTime?: string;
    /** vote id */
    voteID?: string;
  }

  interface ModelComponent {
    graphNodeId?: string;
    domain?: string;
    name?: string;
    version?: string;
  }

  type ModelExportErrorCode = 202012401 | 'MODEL_EXPORT_FAILED';

  interface ModelExportPackageRequest {
    projectId?: string;
    graphId?: string;
    trainId?: string;
    modelName?: string;
    modelDesc?: string;
    graphNodeOutPutId?: string;
    modelPartyConfig: Array<ModelPartyConfig>;
    modelComponent: Array<ModelComponent>;
  }

  interface ModelExportPackageResponse {
    modelId?: string;
    jobId?: string;
  }

  interface ModelExportStatusRequest {
    jobId?: string;
    projectId?: string;
  }

  interface ModelPackDetailVO {
    parties?: Array<OrgSecretflowSecretpadServiceModelModelModelPackDetailVOParties>;
  }

  type ModelPackDetailVO$Parties = Record<string, any>;

  interface ModelPackInfoVO {
    graphDetailVO?: GraphDetailVO;
    modelGraphDetail?: Array<string>;
    modelStats?: string;
    servingDetails?: Array<OrgSecretflowSecretpadServiceModelServingServingDetailVOServingDetail>;
  }

  interface ModelPackListVO {
    pageSize?: number;
    pageNum?: number;
    total?: number;
    totalPage?: number;
    modelPacks?: Array<ModelPackVO>;
  }

  interface ModelPackVO {
    modelId?: string;
    servingId?: string;
    modelName?: string;
    modelDesc?: string;
    modelStats?: string;
    gmtCreate?: string;
    ownerId?: string;
  }

  interface ModelPartiesVO {
    parties?: Array<OrgSecretflowSecretpadServiceModelModelModelPartiesVOParty>;
  }

  type ModelPartiesVO$Party = Record<string, any>;

  interface ModelPartyConfig {
    modelParty?: string;
    modelDataSource?: string;
    modelDataName?: string;
  }

  interface ModelPartyPathRequest {
    projectId?: string;
    graphNodeId?: string;
    graphNodeOutPutId?: string;
  }

  interface ModelPartyPathResponse {
    nodeId?: string;
    nodeName?: string;
    dataSources?: Array<OrgSecretflowSecretpadServiceModelProjectProjectGraphDomainDataSourceVODataSource>;
  }

  type ModelStatsEnum =
    | 0
    | 'INIT'
    | 1
    | 'PUBLISHING'
    | 2
    | 'PUBLISHED'
    | 3
    | 'OFFLINE'
    | 4
    | 'PUBLISH_FAIL'
    | 5
    | 'DISCARDED';

  interface NodeAllResultsVO {
    nodeResultsVO?: NodeResultsVO;
    /** Node id the result belongs to */
    nodeId?: string;
    /** Node name the result belongs to */
    nodeName?: string;
  }

  interface NodeDatatableVO {
    /** Datatable id */
    datatableId?: string;
    /** Datatable name */
    datatableName?: string;
  }

  type NodeErrorCode =
    | 202011401
    | 'NODE_ALREADY_EXIST_ERROR'
    | 202011402
    | 'NODE_CREATE_ERROR'
    | 202011403
    | 'NODE_NOT_EXIST_ERROR'
    | 202011404
    | 'NODE_DELETE_ERROR'
    | 202011405
    | 'DOMAIN_DATA_NOT_EXISTS'
    | 202011406
    | 'NODE_UPDATE_ERROR'
    | 202011407
    | 'NODE_TOKEN_ERROR'
    | 202011408
    | 'NODE_TOKEN_IS_EMPTY_ERROR'
    | 202011409
    | 'NODE_CERT_CONFIG_ERROR';

  interface NodeIdRequest {
    /** nodeId */
    nodeId?: string;
  }

  type NodeInstVO = Record<string, any>;

  interface NodeInstanceDTO {
    /** domain name */
    name?: string;
    /** domain status Ready, NotReady */
    status?: string;
    /** Agent version */
    version?: string;
    /** lastHeartbeatTime，RFC3339（e.g. 2006-01-02T15:04:05Z） */
    lastHeartbeatTime?: string;
    /** lastTransitionTime，RFC3339（e.g. 2006-01-02T15:04:05Z） */
    lastTransitionTime?: string;
  }

  interface NodeResultDetailVO {
    /** Node result list view object */
    nodeResultsVO?: NodeResultsVO;
    /** Graph detail view object */
    graphDetailVO?: GraphDetailVO;
    /** Table column view object list */
    tableColumnVOList?: Array<TableColumnVO>;
    /** Graph node output view object */
    output?: GraphNodeOutputVO;
    datasource?: string;
  }

  interface NodeResultsVO {
    /** Domain data id */
    domainDataId?: string;
    /** Domain datasource id */
    datasourceId?: string;
    /** Domain datasource type */
    datasourceType?: string;
    /** Node result name */
    productName?: string;
    /** Node result datatable type */
    datatableType?: string;
    /** Node result source projectId */
    sourceProjectId?: string;
    /** Node result source project name */
    sourceProjectName?: string;
    /** Relative uri */
    relativeUri?: string;
    /** Job id */
    jobId?: string;
    /** The training flow the node result belongs to */
    trainFlow?: string;
    /** Result pull from tee status Status：FAILED/SUCCESS/RUNNING */
    pullFromTeeStatus?: string;
    /** Result pull from tee error message */
    pullFromTeeErrMsg?: string;
    /** Start time of the node result */
    gmtCreate?: string;
    /** project computeMode mpc,tee */
    computeMode?: string;
  }

  type NodeRouteErrorCode =
    | 202012901
    | 'NODE_ROUTE_ALREADY_EXISTS'
    | 202012902
    | 'NODE_ROUTE_CREATE_ERROR'
    | 202012903
    | 'NODE_ROUTE_NOT_EXIST_ERROR'
    | 202012904
    | 'NODE_ROUTE_DELETE_ERROR'
    | 202012905
    | 'NODE_ROUTE_UPDATE_ERROR'
    | 202012906
    | 'NODE_ROUTE_CONFIG_ERROR';

  interface NodeRouteVO {
    /** The node id of source */
    routeId?: number;
    /** srcNodeId */
    srcNodeId?: string;
    /** dstNodeId */
    dstNodeId?: string;
    /** srcNetAddress */
    srcNetAddress?: string;
    /** dstNetAddress */
    dstNetAddress?: string;
    /** route status Pending, Succeeded, Failed, Unknown */
    status?: string;
  }

  interface NodeRouterVO {
    /** id */
    routeId?: string;
    /** srcNodeId */
    srcNodeId?: string;
    /** dstNodeId */
    dstNodeId?: string;
    /** srcNode */
    srcNode?: NodeVO;
    /** dstNode */
    dstNode?: NodeVO;
    /** srcNetAddress */
    srcNetAddress?: string;
    /** dstNetAddress */
    dstNetAddress?: string;
    /** status Pending, Succeeded, Failed, Unknown */
    status?: string;
    /** gmtCreate */
    gmtCreate?: string;
    /** gmtModified */
    gmtModified?: string;
    /** if running project job exists */
    isProjectJobRunning?: boolean;
    /** routeType： :FullDuplex :HalfDuplex */
    routeType?: string;
  }

  interface NodeSimpleInfo {
    nodeId?: string;
    nodeName?: string;
  }

  interface NodeTokenRequest {
    /** nodeId */
    nodeId?: string;
  }

  interface NodeTokenVO {
    /** token */
    token?: string;
    /** tokenStatus */
    tokenStatus?: string;
    /** lastTransitionTime */
    lastTransitionTime?: string;
  }

  interface NodeVO {
    /** id */
    nodeId?: string;
    /** nodeName */
    nodeName?: string;
    instId?: string;
    instName?: string;
    /** controlNodeId */
    controlNodeId?: string;
    /** masterNodeId */
    masterNodeId?: string;
    /** description */
    description?: string;
    /** netAddress */
    netAddress?: string;
    /** cert */
    cert?: string;
    /** real cert, base64 */
    certText?: string;
    /** node authentication code */
    nodeAuthenticationCode?: string;
    /** token */
    token?: string;
    /** tokenStatus used、unused */
    tokenStatus?: string;
    /** nodeRole */
    nodeRole?: string;
    /** nodeStatus Pending, Ready, NotReady, Unknown */
    nodeStatus?: string;
    /** node type embedded */
    type?: string;
    /** node feature indicates by bit, bit0 - mpc | bit1 - tee | bit2 mpc&tee */
    mode?: number;
    /** gmtCreate */
    gmtCreate?: string;
    /** gmtModified */
    gmtModified?: string;
    /** instance list */
    nodeInstances?: Array<NodeInstanceDTO>;
    /** datatables */
    datatables?: Array<NodeDatatableVO>;
    /** nodeRoutes */
    nodeRoutes?: Array<NodeRouteVO>;
    /** The count of node results. The detailed result information needs to be obtained through the
result management list interface */
    resultCount?: number;
    /** kuscia api protocol */
    protocol?: string;
    instToken?: string;
    allowDeletion?: boolean;
    isMainNode?: boolean;
  }

  interface OdpsPartitionParam {
    type?: string;
    fields?: Array<OrgSecretflowSecretpadManagerIntegrationModelOdpsPartitionParamField>;
  }

  type OdpsPartitionParam$Field = Record<string, any>;

  interface OdpsPartitionRequest {
    type?: string;
    fields?: Array<OrgSecretflowSecretpadServiceModelDatatableOdpsPartitionRequestField>;
  }

  type OdpsPartitionRequest$Field = Record<string, any>;

  type OneApiResult_object_ = Record<string, any>;

  type OneApiResult_string_ = Record<string, any>;

  interface OrgSecretflowSecretpadCommonDtoSecretPadResponse {
    status?: OrgSecretflowSecretpadCommonDtoSecretPadResponseSecretPadResponseStatus;
    data?: Record<string, any>;
  }

  type OrgSecretflowSecretpadCommonDtoSecretPadResponseSecretPadResponseStatus = Record<
    string,
    any
  >;

  interface OrgSecretflowSecretpadCommonDtoSecretPadResponse_ComponentVersion {
    /** teeDmImage */
    teeDmImage?: string;
    /** teeAppImage */
    teeAppImage?: string;
    /** capsuleManagerImage */
    capsuleManagerSimImage?: string;
    /** secretpadImage */
    secretpadImage?: string;
    /** secretflowServingImage */
    secretflowServingImage?: string;
    /** kusciaImage */
    kusciaImage?: string;
    /** secretflowImage */
    secretflowImage?: string;
    /** dataProxyImage */
    dataProxyImage?: string;
  }

  interface OrgSecretflowSecretpadCommonDtoSecretPadResponse_ComponentVersion_ {
    status?: OrgSecretflowSecretpadCommonDtoSecretPadResponseSecretPadResponseStatus;
    data?: OrgSecretflowSecretpadCommonDtoSecretPadResponse_ComponentVersion;
  }

  interface OrgSecretflowSecretpadCommonDtoSecretPadResponse_SyncDataDTO {
    tableName?: string;
    lastUpdateTime?: string;
    action?: string;
    data?: Record<string, any>;
  }

  interface OrgSecretflowSecretpadCommonDtoSecretPadResponse_SyncDataDTO_ {
    status?: OrgSecretflowSecretpadCommonDtoSecretPadResponseSecretPadResponseStatus;
    data?: OrgSecretflowSecretpadCommonDtoSecretPadResponse_SyncDataDTO;
  }

  type OrgSecretflowSecretpadManagerIntegrationModelOdpsPartitionParamField = Record<
    string,
    any
  >;

  type OrgSecretflowSecretpadPersistenceModelParticipantNodeInstVONodeInstVO = Record<
    string,
    any
  >;

  type OrgSecretflowSecretpadServiceModelApprovalParticipantVoteInfo = Record<
    string,
    any
  >;

  type OrgSecretflowSecretpadServiceModelDatatableOdpsPartitionRequestField = Record<
    string,
    any
  >;

  type OrgSecretflowSecretpadServiceModelGraphFullUpdateGraphRequestGraphDataSourceConfig =
    Record<string, any>;

  type OrgSecretflowSecretpadServiceModelGraphGraphDetailVODataSourceConfig = Record<
    string,
    any
  >;

  type OrgSecretflowSecretpadServiceModelModelCreateModelServingRequestPartyConfig =
    Record<string, any>;

  type OrgSecretflowSecretpadServiceModelModelModelPackDetailVOParties = Record<
    string,
    any
  >;

  type OrgSecretflowSecretpadServiceModelModelModelPartiesVOParty = Record<string, any>;

  type OrgSecretflowSecretpadServiceModelProjectProjectGraphDomainDataSourceVODataSource =
    Record<string, any>;

  type OrgSecretflowSecretpadServiceModelServingServingDetailVOServingDetail = Record<
    string,
    any
  >;

  interface OssDatatableVO {
    domainDataId?: string;
    failedCreatedNodes?: Record<string, any>;
  }

  interface P2pCreateNodeRequest {
    /** Node name, the value cannot be empty and can be the same */
    name?: string;
    /** node feature indicates by bit, bit0 - mpc | bit1 - tee | bit2 mpc&tee */
    mode: number;
    /** nodeId of master */
    masterNodeId?: string;
    /** cert text */
    certText?: string;
    /** nodeId of collaborative node */
    dstNodeId?: string;
    /** net address of platform nodeId */
    srcNetAddress?: string;
    /** the nodeId of initiator */
    srcNodeId?: string;
    /** net address of collaborative node */
    dstNetAddress?: string;
    /** the dst node's instId */
    dstInstId?: string;
    /** the dst node's instName */
    dstInstName?: string;
  }

  interface PageNodeRequest {
    /** page num default 1 */
    page?: number;
    /** page size default 10 */
    size?: number;
    /** sort，property,property(,ASC|DESC) "createdDate,desc" */
    sort?: Record<string, any>;
    /** name,nodeId,netAddress search */
    search?: string;
  }

  interface PageNodeRouteRequest {
    /** page num default 1 */
    page?: number;
    /** page size default 10 */
    size?: number;
    /** sort，property,property(,ASC|DESC) "createdDate,desc" */
    sort?: Record<string, any>;
    /** dstNodeId,dstNetAddress,dstNodeName search */
    search?: string;
    /** srcNodeId data filter */
    ownerId?: string;
  }

  interface PageRequest {
    /** What page is currently requested? Note that starting at 1 represents the first page */
    pageNum?: number;
    /** How many pieces of data are in each page */
    pageSize?: number;
  }

  interface PageResponse {
    /** The total count of page */
    pageTotal?: number;
    /** How many pieces of data are in each page */
    pageSize?: number;
    /** Page data list */
    data?: Array<Record<string, any>>;
  }

  interface PageResponse_ProjectJobSummaryVO_ {
    /** The total count of page */
    pageTotal?: number;
    /** How many pieces of data are in each page */
    pageSize?: number;
    /** Page data list */
    data?: Array<ProjectJobSummaryVO>;
  }

  interface PageScheduledRequest {
    /** page num default 1 */
    page?: number;
    /** page size default 10 */
    size?: number;
    /** sort，property,property(,ASC|DESC) "createdDate,desc" */
    sort?: Record<string, any>;
    /** scheduleId,status */
    search?: string;
    status?: string;
    projectId?: string;
  }

  interface PageScheduledVO {
    scheduleId?: string;
    scheduleDesc?: string;
    scheduleStats?: string;
    creator?: string;
    createTime?: string;
    taskRunning?: boolean;
  }

  interface Participant {
    /** this id means the node who initiate a vote */
    nodeID?: string;
    /** the status by this vote

<p>{@link org.secretflow.secretpad.service.enums.VoteStatusEnum} */
    status?: string;
    nodeName?: string;
    voteInfos?: Array<OrgSecretflowSecretpadServiceModelApprovalParticipantVoteInfo>;
  }

  type Participant$VoteInfo = Record<string, any>;

  interface ParticipantNodeInstVO {
    initiatorNodeId?: string;
    initiatorNodeName?: string;
    invitees?: Array<OrgSecretflowSecretpadPersistenceModelParticipantNodeInstVONodeInstVO>;
  }

  type ParticipantNodeInstVO$NodeInstVO = Record<string, any>;

  type Parties = Record<string, any>;

  type Party = Record<string, any>;

  type PartyConfig = Record<string, any>;

  interface PartyVoteInfoVO {
    partyId?: string;
    partyName?: string;
    action?: string;
    reason?: string;
  }

  interface PartyVoteStatus {
    participantID?: string;
    participantName?: string;
    action?: string;
    reason?: string;
  }

  type PermissionTargetTypeEnum = 'ROLE';

  type PermissionUserTypeEnum = 'USER' | 'EDGE_USER' | 'NODE';

  type PlatformTypeEnum = 'EDGE' | 'CENTER' | 'TEST' | 'AUTONOMY';

  interface ProjectDatatableBaseVO {
    /** Datatable id */
    datatableId?: string;
    /** Datatable name */
    datatableName?: string;
    partition?: OdpsPartitionParam;
  }

  type ProjectErrorCode =
    | 202011501
    | 'PROJECT_NOT_EXISTS'
    | 202011502
    | 'PROJECT_INST_NOT_EXISTS'
    | 202011503
    | 'PROJECT_NODE_NOT_EXISTS'
    | 202011504
    | 'PROJECT_DATATABLE_NOT_EXISTS'
    | 202011505
    | 'PROJECT_RESULT_NOT_FOUND'
    | 202011506
    | 'PROJECT_GRAPH_NOT_EMPTY'
    | 202011507
    | 'PROJECT_ARCHIVE_FAIL'
    | 202011508
    | 'PROJECT_UPDATE_FAIL'
    | 202011509
    | 'PROJECT_CAN_NOT_ARCHIVE'
    | 202011510
    | 'PROJECT_CAN_NOT_CREATE_ARCHIVE_VOTE'
    | 202011511
    | 'PROJECT_MODEL_NOT_FOUND'
    | 202011512
    | 'PROJECT_SERVING_NOT_FOUND'
    | 202011513
    | 'PROJECT_SERVING_NOT_SUCCESS'
    | 202011514
    | 'PROJECT_SERVING_NOT_OFFLINE'
    | 202011515
    | 'PROJECT_SERVING_NOT_DISCARD'
    | 202011516
    | 'PROJECT_FEATURE_TABLE_NOT_EXISTS'
    | 202011517
    | 'NON_OUR_CREATION_CAN_VIEWED';

  interface ProjectGraphDomainDataSourceVO {
    nodeId?: string;
    nodeName?: string;
    dataSources?: Array<OrgSecretflowSecretpadServiceModelProjectProjectGraphDomainDataSourceVODataSource>;
  }

  type ProjectGraphDomainDataSourceVO$DataSource = Record<string, any>;

  interface ProjectGraphOutputVO {
    /** graphId */
    graphId?: string;
    /** graphNodeId */
    graphNodeId?: string;
    /** outputs */
    outputs?: Array<string>;
  }

  interface ProjectInstVO {
    /** inst id */
    instId?: string;
    /** inst name */
    instName?: string;
  }

  interface ProjectJobBaseVO {
    /** Job id */
    jobId?: string;
    /** Job status */
    status?: GraphJobStatus;
    /** Job error message */
    errMsg?: string;
    /** Job start time */
    gmtCreate?: string;
    /** Job update time */
    gmtModified?: string;
    /** Job finish time */
    gmtFinished?: string;
  }

  interface ProjectJobSummaryVO {
    /** Job id */
    jobId?: string;
    /** Job status */
    status?: GraphJobStatus;
    /** Job error message */
    errMsg?: string;
    /** Job start time */
    gmtCreate?: string;
    /** Job update time */
    gmtModified?: string;
    /** Finish time */
    gmtFinished?: string;
    /** The count of datatable */
    tableCount?: number;
    /** The count of model */
    modelCount?: number;
    /** The count of rule */
    ruleCount?: number;
    /** The count of report */
    reportCount?: number;
    /** The count of completed subtasks */
    finishedTaskCount?: number;
    /** The count of total subtasks */
    taskCount?: number;
  }

  interface ProjectJobVO {
    /** Job id */
    jobId?: string;
    /** Job status */
    status?: GraphJobStatus;
    /** Job error message */
    errMsg?: string;
    /** Job start time */
    gmtCreate?: string;
    /** Job update time */
    gmtModified?: string;
    /** Job finish time */
    gmtFinished?: string;
    /** Check if the job is finished */
    finished?: boolean;
    /** Graph view object */
    graph?: GraphDetailVO;
  }

  interface ProjectNodeVO {
    /** Node id */
    nodeId?: string;
    /** Node name */
    nodeName?: string;
    /** Node Type */
    nodeType?: string;
    /** Datatable list of the node, it is empty for list requests */
    datatables?: Array<ProjectDatatableBaseVO>;
  }

  type ProjectNodesInfo = Record<string, any>;

  interface ProjectOutputVO {
    /** Project id */
    projectId?: string;
    /** Project name */
    projectName?: string;
    /** Project description */
    description?: string;
    /** List of added nodes output */
    nodes?: Array<ProjectGraphOutputVO>;
    /** The count of graph */
    graphCount?: number;
    /** The count of job */
    jobCount?: number;
    /** Start time of the project */
    gmtCreate?: string;
    /** computeMode pipeline: ,hub: */
    computeMode?: string;
  }

  interface ProjectParticipantsDetailVO {
    /** initiator id */
    initiatorId?: string;
    /** initiator name */
    initiatorName?: string;
    /** project name */
    projectName?: string;
    /** party vote status */
    partyVoteStatuses?: Array<PartyVoteStatus>;
    /** compute mode */
    computeMode?: string;
    /** compute func */
    computeFunc?: string;
    /** project description */
    projectDesc?: string;
    /** gmt created */
    gmtCreated?: string;
    /** participant node and inst */
    participantNodeInstVOS?: Array<ParticipantNodeInstVO>;
    /** status */
    status?: string;
  }

  interface ProjectParticipantsRequest {
    /** vote id */
    voteId?: string;
  }

  interface ProjectResultBaseVO {
    /** Result kind enum */
    kind?: ResultKind;
    /** Ref id, domain data id in ApiLite */
    refId?: string;
  }

  type ProjectStatusEnum = 0 | 'REVIEWING' | 1 | 'APPROVED' | 2 | 'ARCHIVED';

  interface ProjectVO {
    /** vote invite patties's vote information */
    partyVoteInfos?: Array<PartyVoteInfoVO>;
    /** Project id */
    projectId?: string;
    /** Project name */
    projectName?: string;
    /** Project description */
    description?: string;
    /** List of added nodes */
    nodes?: Array<ProjectNodeVO>;
    /** List of added insts */
    insts?: Array<ProjectInstVO>;
    /** The count of graph */
    graphCount?: number;
    /** The count of job */
    jobCount?: number;
    /** Start time of the project */
    gmtCreate?: string;
    /** computeMode mpc,tee */
    computeMode?: string;
    /** tee node domainId */
    teeNodeId?: string;
    /** project approval status {@link org.secretflow.secretpad.common.enums.ProjectStatusEnum} */
    status?: string;
    /** project initiator nodeId */
    initiator?: string;
    /** project initiator nodeName */
    initiatorName?: string;
    /** computeFunc {@link org.secretflow.secretpad.common.constant.ProjectConstants.ComputeFuncEnum} */
    computeFunc?: string;
    /** project vote id */
    voteId?: string;
  }

  interface PullStatusRequest {
    projectID?: string;
    jobID?: string;
    taskID?: string;
    resourceType?: string;
    resourceID?: string;
  }

  interface PullStatusVO {
    resourceID?: string;
    resourceType?: string;
    taskID?: string;
    graphID?: string;
    jobID?: string;
    parties?: Array<Participant>;
  }

  interface PushDatatableToTeeRequest {
    /** Node id, it can not be blank */
    nodeId?: string;
    /** Datatable id, it can not be blank */
    datatableId?: string;
    /** Tee node id, it can be blank and has default value */
    teeNodeId?: string;
    /** Datasource id, it can be blank and has default value */
    datasourceId?: string;
    /** Relative uri */
    relativeUri?: string;
  }

  interface QueryModelDetailRequest {
    modelId?: string;
    projectId?: string;
  }

  interface QueryModelPageRequest {
    /** page num default 1 */
    page?: number;
    /** page size default 10 */
    size?: number;
    /** sort，property,property(,ASC|DESC) "createdDate,desc" */
    sort?: Record<string, any>;
    projectId?: string;
    searchKey?: string;
    modelStats?: string;
  }

  interface QueryModelServingRequest {
    servingId?: string;
  }

  interface ResetNodeUserPwdRequest {
    /** nodeId */
    nodeId?: string;
    /** User name */
    name?: string;
    /** passwordHash */
    passwordHash?: string;
    /** User password */
    newPasswordHash?: string;
  }

  type ResourceTypeEnum = 'API' | 'NODE_ID';

  type ResultKind = 'FedTable' | 'Model' | 'Rule' | 'Report' | 'READ_DATA';

  interface RouterIdRequest {
    /** nodeId */
    nodeId?: string;
    /** routerId */
    routerId?: string;
  }

  interface ScheduleListProjectJobRequest {
    /** What page is currently requested? Note that starting at 1 represents the first page */
    pageNum?: number;
    /** How many pieces of data are in each page */
    pageSize?: number;
    projectId?: string;
    graphId?: string;
  }

  interface ScheduledDelRequest {
    scheduleId?: string;
  }

  type ScheduledErrorCode =
    | 202015001
    | 'PROJECT_JOB_NEED_SUCCESS_ONCE'
    | 202015002
    | 'PROJECT_JOB_NOT_EXIST'
    | 202015003
    | 'SCHEDULE_NOT_EXIST'
    | 202015004
    | 'SCHEDULE_UP_NOT_DEL'
    | 202015005
    | 'SCHEDULE_RUNNING_NOT_OFFLINE'
    | 202015006
    | 'REQUEST_IS_NULL'
    | 202015007
    | 'SCHEDULE_TASK_NOT_EXIST'
    | 202015008
    | 'SCHEDULE_TASK_STATUS_NOT_RUNNING'
    | 202015009
    | 'PROJECT_JOB_RESTART_ERROR';

  interface ScheduledGraphCreateRequest {
    scheduleId?: string;
    scheduleDesc?: string;
    cron?: ScheduledGraphCreateRequestCron;
    projectId?: string;
    graphId?: string;
    nodes?: Array<string>;
  }

  type ScheduledGraphCreateRequestCron = Record<string, any>;

  interface ScheduledGraphOnceSuccessRequest {
    projectId?: string;
    graphId?: string;
  }

  interface ScheduledIdRequest {
    projectId?: string;
    graphId?: string;
  }

  interface ScheduledInfoRequest {
    scheduleId?: string;
  }

  interface ScheduledOfflineRequest {
    scheduleId?: string;
  }

  type ScheduledStatus =
    | 'UP'
    | 'DOWN'
    | 'TO_BE_RUN'
    | 'RUNNING'
    | 'STOPPED'
    | 'SUCCEED'
    | 'FAILED';

  interface SecretPadPageRequest {
    /** page num default 1 */
    page?: number;
    /** page size default 10 */
    size?: number;
    /** sort，property,property(,ASC|DESC) "createdDate,desc" */
    sort?: Record<string, any>;
  }

  interface SecretPadPageResponse {
    /** page list */
    list?: Array<Record<string, any>>;
    /** total */
    total?: number;
  }

  interface SecretPadPageResponse_NodeRouterVO_ {
    /** page list */
    list?: Array<NodeRouterVO>;
    /** total */
    total?: number;
  }

  interface SecretPadPageResponse_NodeVO_ {
    /** page list */
    list?: Array<NodeVO>;
    /** total */
    total?: number;
  }

  interface SecretPadPageResponse_PageScheduledVO_ {
    /** page list */
    list?: Array<PageScheduledVO>;
    /** total */
    total?: number;
  }

  interface SecretPadPageResponse_TaskPageScheduledVO_ {
    /** page list */
    list?: Array<TaskPageScheduledVO>;
    /** total */
    total?: number;
  }

  interface SecretPadResponse {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: Record<string, any>;
  }

  type SecretPadResponseSecretPadResponseStatus = Record<string, any>;

  type SecretPadResponseStatus = Record<string, any>;

  interface SecretPadResponse_AllDatatableListVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: AllDatatableListVO;
  }

  interface SecretPadResponse_AllNodeResultsListVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: AllNodeResultsListVO;
  }

  interface SecretPadResponse_Boolean_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: boolean;
  }

  interface SecretPadResponse_CloudGraphNodeTaskLogsVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: CloudGraphNodeTaskLogsVO;
  }

  interface SecretPadResponse_CreateDatasourceVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: CreateDatasourceVO;
  }

  interface SecretPadResponse_CreateGraphVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: CreateGraphVO;
  }

  interface SecretPadResponse_CreateProjectVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: CreateProjectVO;
  }

  interface SecretPadResponse_DatasourceDetailAggregateVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: DatasourceDetailAggregateVO;
  }

  interface SecretPadResponse_DatasourceListVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: DatasourceListVO;
  }

  interface SecretPadResponse_DatasourceNodesVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: DatasourceNodesVO;
  }

  interface SecretPadResponse_DatatableNodeVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: DatatableNodeVO;
  }

  interface SecretPadResponse_GraphDetailVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: GraphDetailVO;
  }

  interface SecretPadResponse_GraphNodeMaxIndexRefreshVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: GraphNodeMaxIndexRefreshVO;
  }

  interface SecretPadResponse_GraphNodeOutputVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: GraphNodeOutputVO;
  }

  interface SecretPadResponse_GraphNodeTaskLogsVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: GraphNodeTaskLogsVO;
  }

  interface SecretPadResponse_GraphStatus_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: GraphStatus;
  }

  interface SecretPadResponse_InstTokenVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: InstTokenVO;
  }

  interface SecretPadResponse_InstVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: InstVO;
  }

  interface SecretPadResponse_List_FeatureDataSourceVO__ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: Array<FeatureDataSourceVO>;
  }

  interface SecretPadResponse_List_GraphMetaVO__ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: Array<GraphMetaVO>;
  }

  interface SecretPadResponse_List_ModelPartyPathResponse__ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: Array<ModelPartyPathResponse>;
  }

  interface SecretPadResponse_List_NodeVO__ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: Array<NodeVO>;
  }

  interface SecretPadResponse_List_ProjectVO__ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: Array<ProjectVO>;
  }

  interface SecretPadResponse_Long_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: number;
  }

  interface SecretPadResponse_Map_String_CompListVO__ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: Record<string, any>;
  }

  interface SecretPadResponse_MessageDetailVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: MessageDetailVO;
  }

  interface SecretPadResponse_MessageListVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: MessageListVO;
  }

  interface SecretPadResponse_ModelExportPackageResponse_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: ModelExportPackageResponse;
  }

  interface SecretPadResponse_ModelPackDetailVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: ModelPackDetailVO;
  }

  interface SecretPadResponse_ModelPackInfoVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: ModelPackInfoVO;
  }

  interface SecretPadResponse_ModelPackListVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: ModelPackListVO;
  }

  interface SecretPadResponse_ModelPartiesVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: ModelPartiesVO;
  }

  interface SecretPadResponse_NodeResultDetailVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: NodeResultDetailVO;
  }

  interface SecretPadResponse_NodeRouterVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: NodeRouterVO;
  }

  interface SecretPadResponse_NodeTokenVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: NodeTokenVO;
  }

  interface SecretPadResponse_NodeVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: NodeVO;
  }

  interface SecretPadResponse_Object_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: Record<string, any>;
  }

  interface SecretPadResponse_OssDatatableVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: OssDatatableVO;
  }

  interface SecretPadResponse_PageResponse_ProjectJobSummaryVO__ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: PageResponse_ProjectJobSummaryVO_;
  }

  interface SecretPadResponse_ProjectJobVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: ProjectJobVO;
  }

  interface SecretPadResponse_ProjectOutputVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: ProjectOutputVO;
  }

  interface SecretPadResponse_ProjectParticipantsDetailVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: ProjectParticipantsDetailVO;
  }

  interface SecretPadResponse_ProjectVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: ProjectVO;
  }

  interface SecretPadResponse_PullStatusVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: PullStatusVO;
  }

  interface SecretPadResponse_SecretPadPageResponse_NodeRouterVO__ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: SecretPadPageResponse_NodeRouterVO_;
  }

  interface SecretPadResponse_SecretPadPageResponse_NodeVO__ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: SecretPadPageResponse_NodeVO_;
  }

  interface SecretPadResponse_SecretPadPageResponse_PageScheduledVO__ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: SecretPadPageResponse_PageScheduledVO_;
  }

  interface SecretPadResponse_SecretPadPageResponse_TaskPageScheduledVO__ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: SecretPadPageResponse_TaskPageScheduledVO_;
  }

  interface SecretPadResponse_ServingDetailVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: ServingDetailVO;
  }

  interface SecretPadResponse_Set_ProjectGraphDomainDataSourceVO__ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: Array<ProjectGraphDomainDataSourceVO>;
  }

  interface SecretPadResponse_StartGraphVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: StartGraphVO;
  }

  interface SecretPadResponse_String_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: string;
  }

  interface SecretPadResponse_UploadDataResultVO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: UploadDataResultVO;
  }

  interface SecretPadResponse_UserContextDTO_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: UserContextDTO;
  }

  interface SecretPadResponse_Void_ {
    status?: SecretPadResponseSecretPadResponseStatus;
    data?: Record<string, any>;
  }

  type ServingDetail = Record<string, any>;

  interface ServingDetailVO {
    modelId?: string;
    servingDetails?: Array<OrgSecretflowSecretpadServiceModelServingServingDetailVOServingDetail>;
    servingId?: string;
  }

  type ServingDetailVO$ServingDetail = Record<string, any>;

  type SseEmitter = Record<string, any>;

  interface StartGraphRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Graph id, it can not be blank */
    graphId?: string;
    /** breakpoint resuming training flag true：yes，false：no */
    breakpoint?: boolean;
    /** Graph node id list, it can not be empty */
    nodes?: Array<string>;
  }

  interface StartGraphVO {
    /** Graph job id */
    jobId?: string;
  }

  interface StopGraphNodeRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Graph id, it can not be blank */
    graphId?: string;
    /** Graph node id */
    graphNodeId?: string;
  }

  interface StopProjectJobTaskRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Job id, it can not be blank */
    jobId?: string;
  }

  interface SyncDataDTO {
    tableName?: string;
    lastUpdateTime?: string;
    action?: string;
    data?: Record<string, any>;
  }

  type SystemErrorCode =
    | 202011100
    | 'VALIDATION_ERROR'
    | 202011101
    | 'UNKNOWN_ERROR'
    | 202011102
    | 'OUT_OF_RANGE_ERROR'
    | 202011199
    | 'TODO_ERROR'
    | 202011103
    | 'HTTP_4XX_ERROR'
    | 202011104
    | 'HTTP_404_ERROR'
    | 202011105
    | 'HTTP_5XX_ERROR'
    | 202011106
    | 'ENCODE_ERROR'
    | 2020111107
    | 'SIGNATURE_ERROR'
    | 2020111108
    | 'VERIFY_SIGNATURE_ERROR'
    | 202011109
    | 'SSE_ERROR'
    | 202011110
    | 'SYNC_ERROR'
    | 2020111011
    | 'REMOTE_CALL_ERROR'
    | 2020111012
    | 'REQUEST_FREQUENCY_ERROR';

  interface TableColumnConfigParam {
    /** Column name, it can not be blank */
    colName?: string;
    /** Association key or not. False by default */
    isAssociateKey?: boolean;
    /** Group key or not. False by default */
    isGroupKey?: boolean;
    /** Label key or not. False by default */
    isLabelKey?: boolean;
    /** key protection or not, false by default */
    isProtection?: boolean;
  }

  interface TableColumnVO {
    /** Column name */
    colName?: string;
    /** Column type */
    colType?: string;
    /** Column comment */
    colComment?: string;
  }

  interface TaskInfoScheduledRequest {
    scheduleId?: string;
    scheduleTaskId?: string;
  }

  interface TaskPageScheduledRequest {
    /** page num default 1 */
    page?: number;
    /** page size default 10 */
    size?: number;
    /** sort，property,property(,ASC|DESC) "createdDate,desc" */
    sort?: Record<string, any>;
    /** scheduleTaskId */
    search?: string;
    /** scheduleId */
    scheduleId?: string;
  }

  interface TaskPageScheduledVO {
    scheduleTaskId?: string;
    scheduleTaskExpectStartTime?: string;
    scheduleTaskStartTime?: string;
    scheduleTaskEndTime?: string;
    scheduleTaskStatus?: string;
  }

  interface TaskReRunScheduledRequest {
    scheduleId?: string;
    scheduleTaskId?: string;
    type?: string;
  }

  interface TaskStopScheduledRequest {
    scheduleId?: string;
    scheduleTaskId?: string;
  }

  type TeeJobKind = 'PushAuth' | 'Push' | 'Auth' | 'CancelAuth' | 'Pull' | 'Delete';

  type TeeJobStatus = 'RUNNING' | 'SUCCESS' | 'FAILED';

  interface UpdateGraphMetaRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Graph id, it can not be blank */
    graphId?: string;
    /** The name of the graph to change */
    name?: string;
  }

  interface UpdateGraphNodeRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Graph id, it can not be blank */
    graphId?: string;
    /** Graph node information, it can not be null */
    node: GraphNodeInfo;
  }

  interface UpdateNodeRequest {
    netAddress?: string;
    nodeId?: string;
  }

  interface UpdateNodeRouterRequest {
    /** routerId */
    routerId?: string;
    /** srcNetAddress */
    srcNetAddress?: string;
    /** dstNetAddress */
    dstNetAddress?: string;
  }

  interface UpdateProjectRequest {
    /** Project id, it can not be blank */
    projectId?: string;
    /** Project name */
    name?: string;
    /** Project description */
    description?: string;
  }

  interface UploadDataResultVO {
    /** File name */
    name?: string;
    /** The real path to store the data, the change value should be returned to the back end during the
create operation */
    realName?: string;
    /** Owning data source */
    datasource?: string;
    /** Data source type */
    datasourceType?: string;
  }

  interface UserContextDTO {
    token?: string;
    name?: string;
    platformType?: PlatformTypeEnum;
    platformNodeId?: string;
    ownerType?: UserOwnerTypeEnum;
    ownerId?: string;
    projectIds?: Array<string>;
    apiResources?: Array<string>;
    /** only for edge platform rpc. */
    virtualUserForNode?: boolean;
    /** deploy-mode:${DEPLOY_MODE:MPC} # MPC TEE ALL-IN-ONE@see application.yaml secretpad:deploy-mode */
    deployMode?: string;
  }

  type UserErrorCode =
    | 202012001
    | 'USER_UPDATE_PASSWORD_ERROR_INCONSISTENT'
    | 202012002
    | 'USER_UPDATE_PASSWORD_ERROR_SAME'
    | 202012003
    | 'USER_UPDATE_PASSWORD_ERROR_INCORRECT';

  type UserOwnerTypeEnum = 'EDGE' | 'CENTER' | 'P2P';

  interface UserUpdatePwdRequest {
    /** User name */
    name?: string;
    /** User old password */
    oldPasswordHash?: string;
    /** User new password */
    newPasswordHash?: string;
    /** User confirm password */
    confirmPasswordHash?: string;
  }

  type VoteActionEnum = 'APPROVE' | 'REJECT';

  type VoteErrorCode =
    | 202012201
    | 'VOTE_NOT_EXISTS'
    | 202012202
    | 'VOTE_CHECK_FAILED'
    | 202012203
    | 'VOTE_SIGNATURE_SYNCHRONIZING'
    | 202012204
    | 'PROJECT_VOTE_NOT_EXISTS'
    | 202012205
    | 'PROJECT_ARCHIVE_VOTE_ALREADY_EXIST';

  type VoteExecuteEnum = 'EXECUTING' | 'COMMITTED' | 'SUCCESS' | 'OBSERVER' | 'FAILED';

  type VoteInfo = Record<string, any>;

  interface VoteReplyRequest {
    action?: string;
    reason?: string;
    voteId?: string;
    voteParticipantId?: string;
  }

  type VoteStatusEnum =
    | 0
    | 'REVIEWING'
    | 1
    | 'APPROVED'
    | 2
    | 'REJECTED'
    | 3
    | 'NOT_INITIATED';

  interface VoteSyncRequest {
    /** vote request vote result

<p>vote */
    dbSyncRequests?: Array<DbSyncRequest>;
  }

  type VoteSyncTypeEnum =
    | 'VOTE_REQUEST'
    | 'VOTE_INVITE'
    | 'NODE_ROUTE'
    | 'TEE_NODE_DATATABLE_MANAGEMENT'
    | 'PROJECT_APPROVAL_CONFIG'
    | 'PROJECT'
    | 'PROJECT_NODE'
    | 'PROJECT_INST';

  type VoteTypeEnum =
    | 'TEE_DOWNLOAD'
    | 'NODE_ROUTE'
    | 'PROJECT_CREATE'
    | 'PROJECT_ARCHIVE'
    | 'PROJECT_NODE_ADD';
}
