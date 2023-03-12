import {
  REQUESTED_DATE,
  POLICY_NO,
  ALL,
  REQUESTED_BY,
  TRANSACTION_TYPE,
  APPROVED_BY,
  NEW,
  CHECKING_FRCM,
  WAITING_FOR_CHECKER,
  CANCELLED,
  WAITING_FOR_APPROVAL,
  APPROVED,
  PROCESSED_BY_ACCOUNTING,
  SENT_PAYMENT,
  ACK,
  PROCESSED,
  CLEAR_OS_FAIL,
  REJECTED_BY_ACCOUNTING,
  REJECTED_BY_CHECKER,
  REJECTED_BY_APPROVER,
  REJECT_BY_BANK,
  CLEAR_OS_SUCCESS,
  PAYMENT_ID,
} from './state';

export const currencyOption = [{ label: 'VND', value: 'VND' }];

export const optionSearchBy = [
  { label: 'Policy no', value: POLICY_NO },
  { label: 'Payment ID', value: PAYMENT_ID },
  { label: 'Requested by', value: REQUESTED_BY },
  { label: 'Requested date', value: REQUESTED_DATE },
  { label: 'Transaction type', value: TRANSACTION_TYPE },
  { label: 'Approved by', value: APPROVED_BY },
];

export const optionPaymentStatus = [
  { label: ALL, value: ALL },
  { label: 'New', value: NEW },
  { label: 'Checking FRCM', value: CHECKING_FRCM },
  { label: 'Waiting for Checker', value: WAITING_FOR_CHECKER },
  { label: 'Cancelled', value: CANCELLED },
  { label: 'Waiting for Approval', value: WAITING_FOR_APPROVAL },
  { label: 'Rejected by Checker', value: REJECTED_BY_CHECKER },
  { label: 'Approved', value: APPROVED },
  { label: 'Rejected by Approver', value: REJECTED_BY_APPROVER },
  { label: 'Rejected by Accounting', value: REJECTED_BY_ACCOUNTING },
  { label: 'Processed by Accounting', value: PROCESSED_BY_ACCOUNTING },
  { label: 'Sent Payment', value: SENT_PAYMENT },
  { label: 'ACK', value: ACK },
  { label: 'Processed', value: PROCESSED },
  { label: 'Rejected by bank', value: REJECT_BY_BANK },
  { label: 'Clear OS success', value: CLEAR_OS_SUCCESS },
  { label: 'Clear OS failed', value: CLEAR_OS_FAIL },
];

export const optionFCRM = [
  { label: 'Alarm', value: 'ALARM' },
  { label: 'Closed', value: 'CLOSED' },
  { label: 'Passed', value: 'PASSED' },
  { label: 'Rejected', value: 'REJECTED' },
  { label: 'Failed', value: 'FAILED' },
  { label: 'Hit Criminal', value: 'HIT_CRIMINAL' },
  { label: 'By pass', value: 'BYPASS' },
];

export const listPaymentStatus = [
  {
    title: 'Payment Request',
    scopes: [],
  },
  {
    title: 'Waitting for Checker',
    scopes: ['DBM_CLAIM_CHECKER', 'DBM_NB_CHECKER', 'DBM_POS_CHECKER'],
  },
  {
    title: 'Waitting for Approval',
    scopes: [
      'DBM_CLAIM_DEPARTMENTHEAD',
      'DBM_NB_DEPARTMENTHEAD',
      'DBM_POS_DEPARTMENTHEAD',
      'DBM_POS_UNITMANAGER',
      'DBM_CCO',
      'DBM_CFO',
      'DBM_CEO',
      'DBM_POS_UNITHEAD',
    ],
  },
  {
    title: 'Waitting for Accounting',
    scopes: ['DBM_FINANCE_APPROVER'],
  },
];

export const listTransactionType = [
  {
    label: 'Claim Payment',
    value: 'CLPAYM',
    labelVN: 'Thanh toan Claim',
  },
  {
    label: 'Claim Death (ING)',
    value: 'CLDEAT',
    labelVN: 'Thanh toan Claim',
  },
  {
    label: 'Claim HI Benefit (ING)',
    value: 'CLBNBE',
    labelVN: 'Thanh toan Claim',
  },
  {
    label: 'Claim CI (ING)',
    value: 'CLCIBE',
    labelVN: 'Thanh toan Claim',
  },
  {
    label: 'Void policy by claim (ING)',
    value: 'CLVOID',
    labelVN: 'Thanh toan Claim',
  },
  {
    label: 'Policy Reject',
    value: 'NBPORE',
    labelVN: 'Hoan phi cho khach hang do',
  },

  {
    label: 'NB Policy Refund',
    value: 'NBPORF',
    labelVN: 'Hoan phi cho khach hang do',
  },

  {
    label: 'Not Taken Policy',
    value: 'PSNTUP',
    labelVN: 'Huy hop dong trong 21 ngay can nhac',
  },

  {
    label: 'Pension Benefit',
    value: 'PSPEBE',
    labelVN: 'Thanh toan quyen loi huu tri',
  },

  {
    label: 'POS Policy Refund',
    value: 'PSPORF',
    labelVN: 'Hoan phi bao hiem du',
  },

  {
    label: 'Policy Loan',
    value: 'PSLOAN',
    labelVN: 'Tam ung tu gia tri hoan lai',
  },

  {
    label: 'Policy Surrender',
    value: 'PSSURR',
    labelVN: 'Huy hop dong nhan gia tri hoan lai',
  },

  {
    label: 'Void policy',
    value: 'PSVOID',
    labelVN:
      'Vo hieu hop dong hoan tra phi (coverage number ="00") Vo hieu SPBS hoan tra phi (coverage number <> "00")',
  },

  {
    label: 'Partial Withdrawal',
    value: 'PSWTH',
    labelVN: 'Rut mot phan gia tri tai khoan',
  },

  {
    label: 'Educational benefit',
    value: 'PSEDUC',
    labelVN: 'Thanh toan quyen loi hoc van',
  },

  {
    label: 'Cash Coupon Benefit',
    value: 'PSCACO',
    labelVN: 'Thanh toan quyen loi tien mat dinh ky',
  },

  {
    label: 'Pension Partial Withdrawal',
    value: 'PSPWTH',
    labelVN: 'Rut tien tu tai khoan huu tri',
  },

  {
    label: 'Acedamic reward benefit',
    value: 'PSACAD',
    labelVN: 'Thanh toan quyen loi khuyen hoc',
  },

  {
    label: 'EDP Refund',
    value: 'PSEDPR',
    labelVN: '',
  },

  {
    label: 'Health Account Withdrawal',
    value: 'PSHWRA',
    labelVN: 'Rut tien tu Quy cham soc suc khoe',
  },

  {
    label: 'Maturity benefit',
    value: 'PSMATU',
    labelVN: 'Thanh toan quyen loi dao han',
  },

  {
    label: 'Fund Value Refund',
    value: 'PSTBSU',
    labelVN: 'Hoan lai gia tri tai khoan cho doanh nghiep',
  },

  {
    label: 'Fund Withdrawal',
    value: 'PSFWTH',
    labelVN: 'Rut mot phan gia tri quy',
  },
];

export const rejectReason = [
  { label: 'Cty tu choi', value: 'DC' },
  { label: 'Cty tu choi do suc khoe', value: 'DH' },
  { label: 'Cty tu choi do nghe nghiep', value: 'DO' },
  { label: 'Dong ho so do qua han', value: 'FC' },
  { label: 'KH yeu cau huy ho so', value: 'NP' },
  { label: 'Tam hoan vi suc khoe', value: 'PP' },
  { label: 'Cty tu choi do nop sai', value: 'WS' },
  { label: 'KH huy trong 21 ngay', value: 'NT' },
];

export const bankCountry = [
  {
    label: 'NGÂN HÀNG TMCP NGOẠI THƯƠNG VIỆT NAM (VIETCOMBANK)',
    value: '001',
  },
  {
    label: 'NGÂN HÀNG NÔNG NGHIỆP VÀ PTNT VIỆT NAM (AGRIBANK)',
    value: '002',
  },
  {
    label: 'NGÂN HÀNG TMCP SÀI GÒN THƯƠNG TÍN (SACOMBANK)',
    value: '003',
  },
  {
    label: 'NGÂN HÀNG TMCP Á CHÂU (ACB)',
    value: '004',
  },
  {
    label: 'NGÂN HÀNG TMCP ĐẦU TƯ VÀ PHÁT TRIỂN VIỆT NAM (BIDV)',
    value: '005',
  },
  {
    label: 'NGÂN HÀNG TMCP CÔNG THƯƠNG VIỆT NAM (VIETINBANK)',
    value: '006',
  },
  {
    label: 'NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN ĐÔNG Á (DONGA BANK)',
    value: '007',
  },
  {
    label: 'NGÂN HÀNG TMCP KỸ THƯƠNG VIỆT NAM (TECHCOMBANK)',
    value: '008',
  },
  {
    label: 'NGÂN HÀNG TMCP XUẤT NHẬP KHẨU VIỆT NAM (EXIMBANK)',
    value: '009',
  },
  {
    label: 'NGÂN HÀNG TMCP ĐÔNG NAM Á (SeABank)',
    value: '010',
  },
  {
    label: 'NGÂN HÀNG TMCP VIỆT NAM THỊNH VƯỢNG (VPBANK)',
    value: '011',
  },
  {
    label: 'NGÂN HÀNG TMCP AN BÌNH (ABBANK)',
    value: '012',
  },
  {
    label: 'NGÂN HÀNG TMCP ĐẠI DƯƠNG (OCEANBANK)',
    value: '013',
  },
  {
    label: 'NGÂN HÀNG TMCP HÀNG HẢI VIỆT NAM (MARITIME BANK)',
    value: '014',
  },
  {
    label: 'NGÂN HÀNG TMCP SÀI GÒN (SCB)',
    value: '015',
  },
  {
    label: 'NGÂN HÀNG TMCP KIÊN LONG (KIENLONGBANK)',
    value: '016',
  },
  {
    label: 'NGÂN HÀNG TMCP TIỀN PHONG (TPBANK)',
    value: '017',
  },
  {
    label: 'NGÂN HÀNG NAM Á (NAM A BANK)',
    value: '018',
  },
  {
    label: 'NGÂN HÀNG TMCP PHƯƠNG ĐÔNG VIỆT NAM (OCB)',
    value: '019',
  },
  {
    label: 'NGÂN HÀNG TMCP QUÂN ĐỘI (MB BANK)',
    value: '020',
  },
  {
    label: 'NGÂN HÀNG TMCP SÀI GÒN CÔNG THƯƠNG (SAIGON BANK)',
    value: '021',
  },
  {
    label: 'NGÂN HÀNG TMCP VIỆT Á (VietA Bank)',
    value: '022',
  },
  {
    label: 'NGÂN HÀNG TMCP BẮC Á (BAC A BANK)',
    value: '023',
  },
  {
    label: 'NGÂN HÀNG VIỆT NAM THƯƠNG TÍN (VIETBANK)',
    value: '024',
  },
  {
    label: 'NGÂN HÀNG TMCP PHÁT TRIỂN TP.HỒ CHÍ MINH (HDBANK)',
    value: '025',
  },
  {
    label: 'NGÂN HÀNG TMCP PHƯƠNG NAM (SOUTHERN BANK)',
    value: '026',
  },
  {
    label: 'NGÂN HÀNG TMCP XĂNG DẦU PETROLIMEX (PG BANK)',
    value: '027',
  },
  {
    label: 'NGÂN HÀNG TMCP QUỐC TẾ (VIB)',
    value: '028',
  },
  {
    label: 'NGÂN HÀNG TMCP SÀI GÒN HÀ NỘI (SHB)',
    value: '029',
  },
  {
    label: 'NGÂN HÀNG TMCP BƯU ĐIỆN LIÊN VIỆT (LIENVIETPOSTBANK)',
    value: '030',
  },
  {
    label: 'NGÂN HÀNG TMCP BẢO VIỆT (BAOVIETBANK)',
    value: '031',
  },
  {
    label: 'NGÂN HÀNG TMCP BẢO VIỆT (BAOVIETBANK)',
    value: '032',
  },
  {
    label: 'NGÂN HÀNG TMCP BẢN VIỆT (VIET CAPITAL BANK)',
    value: '033',
  },
  {
    label: 'NGÂN HÀNG TMCP ĐẠI CHÚNG VIỆT NAM (PVCOMBANK)',
    value: '034',
  },
  {
    label: 'NGÂN HÀNG QUỐC DÂN (NCB)',
    value: '035',
  },
  {
    label: 'NGÂN HÀNG XÂY DỰNG VIỆT NAM (CBBANK)',
    value: '036',
  },
  {
    label: 'NGÂN HÀNG TMCP PHÁT TRIỂN MEKONG (MEKONG BANK)',
    value: '037',
  },
  {
    label: 'NGÂN HÀNG TNHH MTV ANZ VIỆT NAM (ANZ)',
    value: '038',
  },
  {
    label: 'NGÂN HÀNG TNHH MTV HSBC VIỆT NAM (HSBC)',
    value: '039',
  },
  {
    label: 'NGÂN HÀNG TNHH MTV STANDARD CHARTERED VIỆT NAM',
    value: '040',
  },
  {
    label: 'NGÂN HÀNG TNHH MTV HONG LEONG VIỆT NAM (HONG LEONG)',
    value: '041',
  },
  {
    label: 'NGÂN HÀNG TNHH MTV SHINHAN VIỆT NAM (SHINHAN)',
    value: '042',
  },
  {
    label: 'NGÂN HÀNG CITI BANK VIỆT NAM (CITI BANK)',
    value: '043',
  },
  {
    label: 'NGÂN HÀNG PHÁT TRIỂN VIỆT NAM (VDB)',
    value: '044',
  },
  {
    label: 'NGÂN HÀNG HỢP TÁC (CO-OP BANK)',
    value: '045',
  },
  {
    label: 'NGÂN HÀNG TNHH INDOVINA (IVB)',
    value: '046',
  },
  {
    label: 'NGÂN HÀNG LIÊN DOANH VIỆT NGA (VRB)',
    value: '047',
  },
  {
    label: 'NGÂN HÀNG TMCP PHƯƠNG TÂY (WESTERN BANK)',
    value: '048',
  },
  {
    label: 'NGÂN HÀNG TMCP PHÁT TRIỂN NHÀ ĐỒNG BẰNG SÔNG CỬU LONG',
    value: '051',
  },
  {
    label: 'NGÂN HÀNG LIÊN DOANH VIỆT - NGA (VRB)',
    value: '061',
  },
  {
    label: 'NGÂN HÀNG MUFG BANK',
    value: '057',
  },
  {
    label: 'NGÂN HÀNG THE SIAM COMMERCIAL BANK PUBLIC COMPANY LIMITED',
    value: '060',
  },
  {
    label: 'NGÂN HÀNG CHÍNH SÁCH XÃ HỘI',
    value: '049',
  },
  {
    label: 'NGÂN HÀNG MIZUHO BANK, LTD',
    value: '052',
  },
  {
    label: 'NGÂN HÀNG PUBLIC BANK',
    value: '053',
  },
  {
    label: 'NGÂN HÀNG WOORI BANK',
    value: '054',
  },
  {
    label: 'NGÂN HÀNG TNHH CTBC',
    value: '055',
  },
  {
    label: 'NGÂN HÀNG MALAYAN BANKING BERHAD',
    value: '059',
  },
  {
    label: 'NGÂN HÀNG SUMITOMO MITSUI ',
    value: '058',
  },
  {
    label: 'KHO BẠC NHÀ NƯỚC',
    value: '050',
  },
  {
    label: 'QUỸ TIẾT KIỆM',
    value: '056',
  },
];

export const optionCountry = [
  { label: 'Việt Nam', value: 'VN' },
  { label: 'Afghanistan', value: 'AF' },
  { label: 'Åland Islands', value: 'AX' },
  { label: 'Albania', value: 'AL' },
  { label: 'Algeria', value: 'DZ' },
  { label: 'American Samoa', value: 'AS' },
  { label: 'Andorra', value: 'AD' },
  { label: 'Angola', value: 'AO' },
  { label: 'Anguilla', value: 'AI' },
  { label: 'Antarctica', value: 'AQ' },
  { label: 'Antigua and Barbuda', value: 'AG' },
  { label: 'Argentina', value: 'AR' },
  { label: 'Armenia', value: 'AM' },
  { label: 'Aruba', value: 'AW' },
  { label: 'Australia', value: 'AU' },
  { label: 'Austria', value: 'AT' },
  { label: 'Azerbaijan', value: 'AZ' },
  { label: 'Bahamas', value: 'BS' },
  { label: 'Bahrain', value: 'BH' },
  { label: 'Bangladesh', value: 'BD' },
  { label: 'Barbados', value: 'BB' },
  { label: 'Belarus', value: 'BY' },
  { label: 'Belgium', value: 'BE' },
  { label: 'Belize', value: 'BZ' },
  { label: 'Benin', value: 'BJ' },
  { label: 'Bermuda', value: 'BM' },
  { label: 'Bhutan', value: 'BT' },
  { label: 'Bolivia (Plurinational State of)', value: 'BO' },
  { label: 'Bonaire, Sint Eustatius and Saba', value: 'BQ' },
  { label: 'Bosnia and Herzegovina', value: 'BA' },
  { label: 'Botswana', value: 'BW' },
  { label: 'Bouvet Island', value: 'BV' },
  { label: 'Brazil', value: 'BR' },
  { label: 'British Indian Ocean Territory', value: 'IO' },
  { label: 'Brunei Darussalam', value: 'BN' },
  { label: 'Bulgaria', value: 'BG' },
  { label: 'Burkina Faso', value: 'BF' },
  { label: 'Burundi', value: 'BI' },
  { label: 'Cabo Verde', value: 'CV' },
  { label: 'Cambodia', value: 'KH' },
  { label: 'Cameroon', value: 'CM' },
  { label: 'Canada', value: 'CA' },
  { label: 'Cayman Islands', value: 'KY' },
  { label: 'Central African Republic', value: 'CF' },
  { label: 'Chad', value: 'TD' },
  { label: 'Chile', value: 'CL' },
  { label: 'China', value: 'CN' },
  { label: 'Christmas Island', value: 'CX' },
  { label: 'Cocos (Keeling) Islands', value: 'CC' },
  { label: 'Colombia', value: 'CO' },
  { label: 'Comoros', value: 'KM' },
  { label: 'Congo', value: 'CG' },
  { label: 'Congo, Democratic Republic of the', value: 'CD' },
  { label: 'Cook Islands', value: 'CK' },
  { label: 'Costa Rica', value: 'CR' },
  { label: "Côte d'Ivoire", value: 'CI' },
  { label: 'Croatia', value: 'HR' },
  { label: 'Cuba', value: 'CU' },
  { label: 'Curaçao', value: 'CW' },
  { label: 'Cyprus', value: 'CY' },
  { label: 'Czechia', value: 'CZ' },
  { label: 'Denmark', value: 'DK' },
  { label: 'Djibouti', value: 'DJ' },
  { label: 'Dominica', value: 'DM' },
  { label: 'Dominican Republic', value: 'DO' },
  { label: 'Ecuador', value: 'EC' },
  { label: 'Egypt', value: 'EG' },
  { label: 'El Salvador', value: 'SV' },
  { label: 'Equatorial Guinea', value: 'GQ' },
  { label: 'Eritrea', value: 'ER' },
  { label: 'Estonia', value: 'EE' },
  { label: 'Eswatini', value: 'SZ' },
  { label: 'Ethiopia', value: 'ET' },
  { label: 'Falkland Islands (Malvinas)', value: 'FK' },
  { label: 'Faroe Islands', value: 'FO' },
  { label: 'Fiji', value: 'FJ' },
  { label: 'Finland', value: 'FI' },
  { label: 'France', value: 'FR' },
  { label: 'French Guiana', value: 'GF' },
  { label: 'French Polynesia', value: 'PF' },
  { label: 'French Southern Territories', value: 'TF' },
  { label: 'Gabon', value: 'GA' },
  { label: 'Gambia', value: 'GM' },
  { label: 'Georgia', value: 'GE' },
  { label: 'Germany', value: 'DE' },
  { label: 'Ghana', value: 'GH' },
  { label: 'Gibraltar', value: 'GI' },
  { label: 'Greece', value: 'GR' },
  { label: 'Greenland', value: 'GL' },
  { label: 'Grenada', value: 'GD' },
  { label: 'Guadeloupe', value: 'GP' },
  { label: 'Guam', value: 'GU' },
  { label: 'Guatemala', value: 'GT' },
  { label: 'Guernsey', value: 'GG' },
  { label: 'Guinea', value: 'GN' },
  { label: 'Guinea-Bissau', value: 'GW' },
  { label: 'Guyana', value: 'GY' },
  { label: 'Haiti', value: 'HT' },
  { label: 'Heard Island and McDonald Islands', value: 'HM' },
  { label: 'Holy See', value: 'VA' },
  { label: 'Honduras', value: 'HN' },
  { label: 'Hong Kong', value: 'HK' },
  { label: 'Hungary', value: 'HU' },
  { label: 'Iceland', value: 'IS' },
  { label: 'India', value: 'IN' },
  { label: 'Indonesia', value: 'ID' },
  { label: 'Iran (Islamic Republic of)', value: 'IR' },
  { label: 'Iraq', value: 'IQ' },
  { label: 'Ireland', value: 'IE' },
  { label: 'Isle of Man', value: 'IM' },
  { label: 'Israel', value: 'IL' },
  { label: 'Italy', value: 'IT' },
  { label: 'Jamaica', value: 'JM' },
  { label: 'Japan', value: 'JP' },
  { label: 'Jersey', value: 'JE' },
  { label: 'Jordan', value: 'JO' },
  { label: 'Kazakhstan', value: 'KZ' },
  { label: 'Kenya', value: 'KE' },
  { label: 'Kiribati', value: 'KI' },
  { label: "Korea (Democratic People's Republic of)", value: 'KP' },
  { label: 'Korea, Republic of', value: 'KR' },
  { label: 'Kuwait', value: 'KW' },
  { label: 'Kyrgyzstan', value: 'KG' },
  { label: "Lao People's Democratic Republic", value: 'LA' },
  { label: 'Latvia', value: 'LV' },
  { label: 'Lebanon', value: 'LB' },
  { label: 'Lesotho', value: 'LS' },
  { label: 'Liberia', value: 'LR' },
  { label: 'Libya', value: 'LY' },
  { label: 'Liechtenstein', value: 'LI' },
  { label: 'Lithuania', value: 'LT' },
  { label: 'Luxembourg', value: 'LU' },
  { label: 'Macao', value: 'MO' },
  { label: 'Madagascar', value: 'MG' },
  { label: 'Malawi', value: 'MW' },
  { label: 'Malaysia', value: 'MY' },
  { label: 'Maldives', value: 'MV' },
  { label: 'Mali', value: 'ML' },
  { label: 'Malta', value: 'MT' },
  { label: 'Marshall Islands', value: 'MH' },
  { label: 'Martinique', value: 'MQ' },
  { label: 'Mauritania', value: 'MR' },
  { label: 'Mauritius', value: 'MU' },
  { label: 'Mayotte', value: 'YT' },
  { label: 'Mexico', value: 'MX' },
  { label: 'Micronesia (Federated States of)', value: 'FM' },
  { label: 'Moldova, Republic of', value: 'MD' },
  { label: 'Monaco', value: 'MC' },
  { label: 'Mongolia', value: 'MN' },
  { label: 'Montenegro', value: 'ME' },
  { label: 'Montserrat', value: 'MS' },
  { label: 'Morocco', value: 'MA' },
  { label: 'Mozambique', value: 'MZ' },
  { label: 'Myanmar', value: 'MM' },
  { label: 'Namibia', value: 'NA' },
  { label: 'Nauru', value: 'NR' },
  { label: 'Nepal', value: 'NP' },
  { label: 'Netherlands', value: 'NL' },
  { label: 'New Caledonia', value: 'NC' },
  { label: 'New Zealand', value: 'NZ' },
  { label: 'Nicaragua', value: 'NI' },
  { label: 'Niger', value: 'NE' },
  { label: 'Nigeria', value: 'NG' },
  { label: 'Niue', value: 'NU' },
  { label: 'Norfolk Island', value: 'NF' },
  { label: 'North Macedonia', value: 'MK' },
  { label: 'Northern Mariana Islands', value: 'MP' },
  { label: 'Norway', value: 'NO' },
  { label: 'Oman', value: 'OM' },
  { label: 'Pakistan', value: 'PK' },
  { label: 'Palau', value: 'PW' },
  { label: 'Palestine, State of', value: 'PS' },
  { label: 'Panama', value: 'PA' },
  { label: 'Papua New Guinea', value: 'PG' },
  { label: 'Paraguay', value: 'PY' },
  { label: 'Peru', value: 'PE' },
  { label: 'Philippines', value: 'PH' },
  { label: 'Pitcairn', value: 'PN' },
  { label: 'Poland', value: 'PL' },
  { label: 'Portugal', value: 'PT' },
  { label: 'Puerto Rico', value: 'PR' },
  { label: 'Qatar', value: 'QA' },
  { label: 'Réunion', value: 'RE' },
  { label: 'Romania', value: 'RO' },
  { label: 'Russian Federation', value: 'RU' },
  { label: 'Rwanda', value: 'RW' },
  { label: 'Saint Barthélemy', value: 'BL' },
  { label: 'Saint Helena, Ascension and Tristan da Cunha', value: 'SH' },
  { label: 'Saint Kitts and Nevis', value: 'KN' },
  { label: 'Saint Lucia', value: 'LC' },
  { label: 'Saint Martin (French part)', value: 'MF' },
  { label: 'Saint Pierre and Miquelon', value: 'PM' },
  { label: 'Saint Vincent and the Grenadines', value: 'VC' },
  { label: 'Samoa', value: 'WS' },
  { label: 'San Marino', value: 'SM' },
  { label: 'Sao Tome and Principe', value: 'ST' },
  { label: 'Saudi Arabia', value: 'SA' },
  { label: 'Senegal', value: 'SN' },
  { label: 'Serbia', value: 'RS' },
  { label: 'Seychelles', value: 'SC' },
  { label: 'Sierra Leone', value: 'SL' },
  { label: 'Singapore', value: 'SG' },
  { label: 'Sint Maarten (Dutch part)', value: 'SX' },
  { label: 'Slovakia', value: 'SK' },
  { label: 'Slovenia', value: 'SI' },
  { label: 'Solomon Islands', value: 'SB' },
  { label: 'Somalia', value: 'SO' },
  { label: 'South Africa', value: 'ZA' },
  { label: 'South Georgia and the South Sandwich Islands', value: 'GS' },
  { label: 'South Sudan', value: 'SS' },
  { label: 'Spain', value: 'ES' },
  { label: 'Sri Lanka', value: 'LK' },
  { label: 'Sudan', value: 'SD' },
  { label: 'Suriname', value: 'SR' },
  { label: 'Svalbard and Jan Mayen', value: 'SJ' },
  { label: 'Sweden', value: 'SE' },
  { label: 'Switzerland', value: 'CH' },
  { label: 'Syrian Arab Republic', value: 'SY' },
  { label: 'Taiwan, MDM_LOC_PROV of China', value: 'TW' },
  { label: 'Tajikistan', value: 'TJ' },
  { label: 'Tanzania, United Republic of', value: 'TZ' },
  { label: 'Thailand', value: 'TH' },
  { label: 'Timor-Leste', value: 'TL' },
  { label: 'Togo', value: 'TG' },
  { label: 'Tokelau', value: 'TK' },
  { label: 'Tonga', value: 'TO' },
  { label: 'Trinidad and Tobago', value: 'TT' },
  { label: 'Tunisia', value: 'TN' },
  { label: 'Turkey', value: 'TR' },
  { label: 'Turkmenistan', value: 'TM' },
  { label: 'Turks and Caicos Islands', value: 'TC' },
  { label: 'Tuvalu', value: 'TV' },
  { label: 'Uganda', value: 'UG' },
  { label: 'Ukraine', value: 'UA' },
  { label: 'United Arab Emirates', value: 'AE' },
  { label: 'United Kingdom of Great Britain and Northern Ireland', value: 'GB' },
  { label: 'United States Minor Outlying Islands', value: 'UM' },
  { label: 'United States of America', value: 'US' },
  { label: 'Uruguay', value: 'UY' },
  { label: 'Uzbekistan', value: 'UZ' },
  { label: 'Vanuatu', value: 'VU' },
  { label: 'Venezuela (Bolivarian Republic of)', value: 'VE' },
  { label: 'Virgin Islands (British)', value: 'VG' },
  { label: 'Virgin Islands (U.S.)', value: 'VI' },
  { label: 'Wallis and Futuna', value: 'WF' },
  { label: 'Western Sahara', value: 'EH' },
  { label: 'Yemen', value: 'YE' },
  { label: 'Zambia', value: 'ZM' },
  { label: 'Zimbabwe', value: 'ZW' },
];