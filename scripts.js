const vazio = { 'id': '', 'nome': '', 'over': 00, 'pos': '', 'idpos': 99, 'tipo': 'azul', 'time': ''};
const jogTime = [vazio,vazio,vazio,vazio,vazio,vazio,vazio,vazio,vazio,vazio,vazio,vazio];
window.numTime = {'tec': 0,'gol': 0, 'ld': 0, 'le': 0, 'zag': 0, 'vol': 0, 'mei': 0, 'pon': 0, 'ata': 0, 'total': 0};
var cont = 5;
var din = 40;


window.nomes = [
    { 'id': 'neymar_2011', 'nome': 'NEYMAR 2011', 'over': 99, 'pos': 'PON', 'idpos': 2, 'tipo': 'LENDA', 'time': 'santos'}
    ,{ 'id': 'rogerio_ceni_2005', 'nome': 'CENI 2005', 'over': 98, 'pos': 'GOL', 'idpos': 8, 'tipo': 'LENDA', 'time': 'sao_paulo'}
    ,{ 'id': 'ronaldinho_2013', 'nome': 'RONALDINHO 2013', 'over': 97, 'pos': 'MEI', 'idpos': 3, 'tipo': 'LENDA', 'time': 'atletico_mg'}
    ,{ 'id': 'fred_2012', 'nome': 'FRED 2012', 'over': 96, 'pos': 'ATA', 'idpos': 1, 'tipo': 'LENDA', 'time': 'fluminense'}
    ,{ 'id': 'conca_2010', 'nome': 'CONCA 2010', 'over': 95, 'pos': 'MEI', 'idpos': 3, 'tipo': 'LENDA', 'time': 'fluminense'}
    ,{ 'id': 'cassio_2012', 'nome': 'CASSIO 2012', 'over': 95, 'pos': 'GOL', 'idpos': 8, 'tipo': 'LENDA', 'time': 'corinthians'}
    ,{ 'id': 'gabigol_2019', 'nome': 'GABIGOL 2019', 'over': 95, 'pos': 'ATA', 'idpos': 1, 'tipo': 'REI DA AMÉRICA', 'time': 'flamengo'}
    ,{ 'id': 'everton_ribeiro_2014', 'nome': 'E. RIBEIRO 2014', 'over': 94, 'pos': 'MEI', 'idpos': 3, 'tipo': 'LENDA', 'time': 'cruzeiro'}
    ,{ 'id': 'geromel_2017', 'nome': 'GEROMEL 2017', 'over': 92, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'LENDA', 'time': 'gremio'}
    ,{ 'id': 'hernanes_2008', 'nome': 'HERNANES 2008', 'over': 92, 'pos': 'VOL', 'idpos': 4, 'tipo': 'LENDA', 'time': 'sao_paulo'}
    ,{ 'id': 'pedro_2022', 'nome': 'PEDRO 2022', 'over': 90, 'pos': 'ATA', 'idpos': 1, 'tipo': 'REI DA AMÉRICA', 'time': 'flamengo'}
    ,{ 'id': 'jorge_jesus_2019', 'nome': 'J. JESUS 2019', 'over': 90, 'pos': 'TEC', 'idpos': 9, 'tipo': 'LENDA', 'time': 'flamengo'}
    ,{ 'id': 'suarez', 'nome': 'SUAREZ', 'over': 89, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'gremio'}
    ,{ 'id': 'arrascaeta', 'nome': 'ARRASCAETA', 'over': 89, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO RARA', 'time': 'flamengo'}
    ,{ 'id': 'abel ferreira', 'nome': 'ABEL FERREIRA', 'over': 89, 'pos': 'TEC', 'idpos': 9, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'german cano', 'nome': 'GERMAN CANO', 'over': 88, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'fluminense'}
    ,{ 'id': 'raphael veiga', 'nome': 'RAPHAEL VEIGA', 'over': 88, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'andré', 'nome': 'ANDRÉ', 'over': 88, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO RARA', 'time': 'fluminense'}
    ,{ 'id': 'gustavo gomez', 'nome': 'GUSTAVO GOMEZ', 'over': 88, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'marcelo', 'nome': 'MARCELO', 'over': 88, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO RARA', 'time': 'fluminense'}
    ,{ 'id': 'weverton', 'nome': 'WEVERTON', 'over': 88, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'luan_2017', 'nome': 'LUAN 2017', 'over': 88, 'pos': 'MEI', 'idpos': 3, 'tipo': 'REI DA AMÉRICA', 'time': 'gremio'}
    ,{ 'id': 'hulk', 'nome': 'HULK', 'over': 87, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'atletico_mg'}
    ,{ 'id': 'pedro', 'nome': 'PEDRO', 'over': 87, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'flamengo'}
    ,{ 'id': 'dudu', 'nome': 'DUDU', 'over': 87, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'fernando diniz', 'nome': 'FERNANDO DINIZ', 'over': 87, 'pos': 'TEC', 'idpos': 9, 'tipo': 'OURO RARA', 'time': 'fluminense'}
    ,{ 'id': 'yuri alberto', 'nome': 'YURI ALBERTO', 'over': 86, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'corinthians'}
    ,{ 'id': 'gabigol', 'nome': 'GABIGOL', 'over': 86, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'flamengo'}
    ,{ 'id': 'calleri', 'nome': 'CALLERI', 'over': 86, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'sao_paulo'}
    ,{ 'id': 'paulinho_cam', 'nome': 'PAULINHO', 'over': 86, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO RARA', 'time': 'atletico_mg'}
    ,{ 'id': 'jhon arias', 'nome': 'JHON ARIAS', 'over': 86, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO RARA', 'time': 'fluminense'}
    ,{ 'id': 'ganso', 'nome': 'GANSO', 'over': 86, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO RARA', 'time': 'fluminense'}
    ,{ 'id': 'fernandinho', 'nome': 'FERNANDINHO', 'over': 86, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO RARA', 'time': 'cap'}
    ,{ 'id': 'renato augusto', 'nome': 'RENATO AUGUSTO', 'over': 86, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO RARA', 'time': 'corinthians'}
    ,{ 'id': 'nino', 'nome': 'NINO', 'over': 86, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO RARA', 'time': 'fluminense'}
    ,{ 'id': 'ayrton lucas', 'nome': 'AYRTON LUCAS', 'over': 86, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO RARA', 'time': 'flamengo'}
    ,{ 'id': 'piquerez', 'nome': 'PIQUEREZ', 'over': 86, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'fagner', 'nome': 'FAGNER', 'over': 86, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO RARA', 'time': 'corinthians'}
    ,{ 'id': 'marcos rocha', 'nome': 'MARCOS ROCHA', 'over': 86, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'everson', 'nome': 'EVERSON', 'over': 86, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO RARA', 'time': 'atletico_mg'}
    ,{ 'id': 'cassio', 'nome': 'CASSIO', 'over': 86, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO RARA', 'time': 'corinthians'}
    ,{ 'id': 'marinho_2020', 'nome': 'MARINHO 2020', 'over': 86, 'pos': 'PON', 'idpos': 2, 'tipo': 'REI DA AMÉRICA', 'time': 'santos'}
    ,{ 'id': 'vitor roque', 'nome': 'VITOR ROQUE', 'over': 85, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'cap'}
    ,{ 'id': 'rony', 'nome': 'RONY', 'over': 85, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'roger guedes', 'nome': 'ROGER GUEDES', 'over': 85, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO RARA', 'time': 'corinthians'}
    ,{ 'id': 'zaracho', 'nome': 'ZARACHO', 'over': 85, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO RARA', 'time': 'atletico_mg'}
    ,{ 'id': 'zé rafael', 'nome': 'ZÉ RAFAEL', 'over': 85, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'kannemann', 'nome': 'KANNEMANN', 'over': 85, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO RARA', 'time': 'gremio'}
    ,{ 'id': 'murilo', 'nome': 'MURILO', 'over': 85, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO RARA', 'time': 'palmeiras'}
    ,{ 'id': 'arana', 'nome': 'ARANA', 'over': 85, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO RARA', 'time': 'atletico_mg'}
    ,{ 'id': 'marçal', 'nome': 'MARÇAL', 'over': 85, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO RARA', 'time': 'botafogo'}
    ,{ 'id': 'bento', 'nome': 'BENTO', 'over': 85, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO RARA', 'time': 'cap'}
    ,{ 'id': 'sampaoli', 'nome': 'SAMPAOLI', 'over': 85, 'pos': 'TEC', 'idpos': 9, 'tipo': 'OURO RARA', 'time': 'flamengo'}
    ,{ 'id': 'vojvoda', 'nome': 'VOJVODA', 'over': 85, 'pos': 'TEC', 'idpos': 9, 'tipo': 'OURO RARA', 'time': 'fortaleza'}
    ,{ 'id': 'tiquinho', 'nome': 'TIQUINHO', 'over': 84, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'botafogo'}
    ,{ 'id': 'gilberto', 'nome': 'GILBERTO', 'over': 84, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'cruzeiro'}
    ,{ 'id': 'lucero', 'nome': 'LUCERO', 'over': 84, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'fortaleza'}
    ,{ 'id': 'endrick', 'nome': 'ENDRICK', 'over': 84, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'palmeiras'}
    ,{ 'id': 'marcos leonardo', 'nome': 'MARCOS LEONARDO', 'over': 84, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'santos'}
    ,{ 'id': 'luciano', 'nome': 'LUCIANO', 'over': 84, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'sao_paulo'}
    ,{ 'id': 'terans', 'nome': 'TERANS', 'over': 84, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'cap'}
    ,{ 'id': 'bruno henrique', 'nome': 'BRUNO HENRIQUE', 'over': 84, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'patrick', 'nome': 'PATRICK', 'over': 84, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'atletico_mg'}
    ,{ 'id': 'everton ribeiro', 'nome': 'EVERTON RIBEIRO', 'over': 84, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'bitello', 'nome': 'BITELLO', 'over': 84, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'gremio'}
    ,{ 'id': 'alan patrick', 'nome': 'ALAN PATRICK', 'over': 84, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'allan', 'nome': 'ALLAN', 'over': 84, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'atletico_mg'}
    ,{ 'id': 'andrey santos', 'nome': 'ANDREY SANTOS', 'over': 84, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'victor cuesta', 'nome': 'VICTOR CUESTA', 'over': 84, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'botafogo'}
    ,{ 'id': 'leo ortiz', 'nome': 'LEO ORTIZ', 'over': 84, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'bragantino'}
    ,{ 'id': 'thiago heleno', 'nome': 'THIAGO HELENO', 'over': 84, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'cap'}
    ,{ 'id': 'leo_pereira', 'nome': 'LEO_PEREIRA', 'over': 84, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'arboleda', 'nome': 'ARBOLEDA', 'over': 84, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'sao_paulo'}
    ,{ 'id': 'fábio santos', 'nome': 'FÁBIO SANTOS', 'over': 84, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'filipe luis', 'nome': 'FILIPE LUIS', 'over': 84, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'samuel xavier', 'nome': 'SAMUEL XAVIER', 'over': 84, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'fluminense'}
    ,{ 'id': 'mayke', 'nome': 'MAYKE', 'over': 84, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'palmeiras'}
    ,{ 'id': 'lucas perri', 'nome': 'LUCAS PERRI', 'over': 84, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO', 'time': 'botafogo'}
    ,{ 'id': 'fabio_flu', 'nome': 'FÁBIO', 'over': 84, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO', 'time': 'fluminense'}
    ,{ 'id': 'tadeu', 'nome': 'TADEU', 'over': 84, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO', 'time': 'goias'}
    ,{ 'id': 'joão paulo', 'nome': 'JOÃO PAULO', 'over': 84, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO', 'time': 'santos'}
    ,{ 'id': 'luiz adriano', 'nome': 'LUIZ ADRIANO', 'over': 83, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'erison', 'nome': 'ERISON', 'over': 83, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'sao_paulo'}
    ,{ 'id': 'pedro raúl', 'nome': 'PEDRO RAÚL', 'over': 83, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'pedrinho_cam', 'nome': 'PEDRINHO', 'over': 83, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'atletico_mg'}
    ,{ 'id': 'giuliano', 'nome': 'GIULIANO', 'over': 83, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'gerson', 'nome': 'GERSON', 'over': 83, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'pikachu', 'nome': 'PIKACHU', 'over': 83, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'fortaleza'}
    ,{ 'id': 'alex teixeira', 'nome': 'ALEX TEIXEIRA', 'over': 83, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'thiago maia', 'nome': 'THIAGO MAIA', 'over': 83, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'gabriel_int', 'nome': 'GABRIEL', 'over': 83, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'g. menino', 'nome': 'G. MENINO', 'over': 83, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'palmeiras'}
    ,{ 'id': 'jair', 'nome': 'JAIR', 'over': 83, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'david luiz', 'nome': 'DAVID LUIZ', 'over': 83, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'leo pelé', 'nome': 'LEO PELÉ', 'over': 83, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'reinaldo', 'nome': 'REINALDO', 'over': 83, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO', 'time': 'gremio'}
    ,{ 'id': 'renê', 'nome': 'RENÊ', 'over': 83, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'wellington', 'nome': 'WELLINGTON', 'over': 83, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO', 'time': 'sao_paulo'}
    ,{ 'id': 'mariano', 'nome': 'MARIANO', 'over': 83, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'atletico_mg'}
    ,{ 'id': 'bustos', 'nome': 'BUSTOS', 'over': 83, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'santos', 'nome': 'SANTOS', 'over': 83, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'vagner mancini', 'nome': 'VAGNER MANCINI', 'over': 83, 'pos': 'TEC', 'idpos': 9, 'tipo': 'OURO', 'time': 'america_mg'}
    ,{ 'id': 'renato gaúcho', 'nome': 'RENATO GAÚCHO', 'over': 83, 'pos': 'TEC', 'idpos': 9, 'tipo': 'OURO', 'time': 'gremio'}
    ,{ 'id': 'aloísio', 'nome': 'ALOÍSIO', 'over': 82, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'america_mg'}
    ,{ 'id': 'pablo_cap', 'nome': 'PABLO', 'over': 82, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'cap'}
    ,{ 'id': 'cebolinha', 'nome': 'CEBOLINHA', 'over': 82, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'keno', 'nome': 'KENO', 'over': 82, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'fluminense'}
    ,{ 'id': 'artur', 'nome': 'ARTUR', 'over': 82, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'palmeiras'}
    ,{ 'id': 'soteldo', 'nome': 'SOTELDO', 'over': 82, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'santos'}
    ,{ 'id': 'hyoran', 'nome': 'HYORAN', 'over': 82, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'atletico_mg'}
    ,{ 'id': 'cristaldo', 'nome': 'CRISTALDO', 'over': 82, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'gremio'}
    ,{ 'id': 'juninho', 'nome': 'JUNINHO', 'over': 82, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'america_mg'}
    ,{ 'id': 'fausto vera', 'nome': 'FAUSTO VERA', 'over': 82, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'aranguiz', 'nome': 'ARANGUIZ', 'over': 82, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'jemerson', 'nome': 'JEMERSON', 'over': 82, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'atletico_mg'}
    ,{ 'id': 'gil', 'nome': 'GIL', 'over': 82, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'manoel', 'nome': 'MANOEL', 'over': 82, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'fluminense'}
    ,{ 'id': 'geromel', 'nome': 'GEROMEL', 'over': 82, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'gremio'}
    ,{ 'id': 'mercado', 'nome': 'MERCADO', 'over': 82, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'arthur', 'nome': 'ARTHUR', 'over': 82, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'america_mg'}
    ,{ 'id': 'saravia', 'nome': 'SARAVIA', 'over': 82, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'atletico_mg'}
    ,{ 'id': 'khelvenn', 'nome': 'KHELVENN', 'over': 82, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'cap'}
    ,{ 'id': 'gatito', 'nome': 'GATITO', 'over': 82, 'pos': 'GOL', 'idpos': 8, 'tipo': 'OURO', 'time': 'botafogo'}
    ,{ 'id': 'mano menezes', 'nome': 'MANO MENEZES', 'over': 82, 'pos': 'TEC', 'idpos': 9, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'willian', 'nome': 'WILLIAN', 'over': 81, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'cap'}
    ,{ 'id': 'pavón', 'nome': 'PAVÓN', 'over': 81, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'atletico_mg'}
    ,{ 'id': 'vargas', 'nome': 'VARGAS', 'over': 81, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'atletico_mg'}
    ,{ 'id': 'ferreira', 'nome': 'FERREIRA', 'over': 81, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'gremio'}
    ,{ 'id': 'gabriel pec', 'nome': 'GABRIEL PEC', 'over': 81, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'eduardo', 'nome': 'EDUARDO', 'over': 81, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'botafogo'}
    ,{ 'id': 'adson', 'nome': 'ADSON', 'over': 81, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'vina', 'nome': 'VINA', 'over': 81, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'gremio'}
    ,{ 'id': 'maurício', 'nome': 'MAURÍCIO', 'over': 81, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'edenílson', 'nome': 'EDENÍLSON', 'over': 81, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'atletico_mg'}
    ,{ 'id': 'tchê tchê', 'nome': 'TCHÊ TCHÊ', 'over': 81, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'botafogo'}
    ,{ 'id': 'maycon', 'nome': 'MAYCON', 'over': 81, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'paulinho', 'nome': 'PAULINHO', 'over': 81, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'dodi', 'nome': 'DODI', 'over': 81, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'santos'}
    ,{ 'id': 'nestor', 'nome': 'NESTOR', 'over': 81, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'sao_paulo'}
    ,{ 'id': 'kanu', 'nome': 'KANU', 'over': 81, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'bahia'}
    ,{ 'id': 'zé ivaldo', 'nome': 'ZÉ IVALDO', 'over': 81, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'cap'}
    ,{ 'id': 'bruno méndez', 'nome': 'BRUNO MÉNDEZ', 'over': 81, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'corinthians'}
    ,{ 'id': 'benevenuto', 'nome': 'BENEVENUTO', 'over': 81, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'fortaleza'}
    ,{ 'id': 'vitão', 'nome': 'VITÃO', 'over': 81, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'diego costa', 'nome': 'DIEGO COSTA', 'over': 81, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'sao_paulo'}
    ,{ 'id': 'j. capixaba', 'nome': 'J. CAPIXABA', 'over': 81, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO', 'time': 'bragantino'}
    ,{ 'id': 'luan cândido', 'nome': 'LUAN CÂNDIDO', 'over': 81, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO', 'time': 'bragantino'}
    ,{ 'id': 'igor vinicius', 'nome': 'IGOR VINICIUS', 'over': 81, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'sao_paulo'}
    ,{ 'id': 'w. paulista', 'nome': 'W. PAULISTA', 'over': 80, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'america_mg'}
    ,{ 'id': 'alerrandro', 'nome': 'ALERRANDRO', 'over': 80, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'bragantino'}
    ,{ 'id': 'pitta', 'nome': 'PITTA', 'over': 80, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'cuiaba'}
    ,{ 'id': 'matheus peixoto', 'nome': 'MATHEUS PEIXOTO', 'over': 80, 'pos': 'ATA', 'idpos': 1, 'tipo': 'OURO', 'time': 'goias'}
    ,{ 'id': 'eduardo sasha', 'nome': 'EDUARDO SASHA', 'over': 80, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'bragantino'}
    ,{ 'id': 'alef manga', 'nome': 'ALEF MANGA', 'over': 80, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'coritiba'}
    ,{ 'id': 'galhardo', 'nome': 'GALHARDO', 'over': 80, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'fortaleza'}
    ,{ 'id': 'moisés', 'nome': 'MOISÉS', 'over': 80, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'fortaleza'}
    ,{ 'id': 'ph_inter', 'nome': 'PEDRO HENRIQUE', 'over': 80, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'wanderson', 'nome': 'WANDERSON', 'over': 80, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'ângelo', 'nome': 'ÂNGELO', 'over': 80, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'santos'}
    ,{ 'id': 'mendonza', 'nome': 'MENDONZA', 'over': 80, 'pos': 'PON', 'idpos': 2, 'tipo': 'OURO', 'time': 'santos'}
    ,{ 'id': 'benítez', 'nome': 'BENÍTEZ', 'over': 80, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'america_mg'}
    ,{ 'id': 'vitor bueno', 'nome': 'VITOR BUENO', 'over': 80, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'cap'}
    ,{ 'id': 'mateus vital', 'nome': 'MATEUS VITAL', 'over': 80, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'cruzeiro'}
    ,{ 'id': 'm. gonçalves', 'nome': 'M. GONÇALVES', 'over': 80, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'wellington rato', 'nome': 'WELLINGTON RATO', 'over': 80, 'pos': 'MEI', 'idpos': 3, 'tipo': 'OURO', 'time': 'sao_paulo'}
    ,{ 'id': 'otávio', 'nome': 'OTÁVIO', 'over': 80, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'atletico_mg'}
    ,{ 'id': 'l. evangelista', 'nome': 'L. EVANGELISTA', 'over': 80, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'bragantino'}
    ,{ 'id': 'andrey', 'nome': 'ANDREY', 'over': 80, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'coritiba'}
    ,{ 'id': 'junior urso', 'nome': 'JUNIOR URSO', 'over': 80, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'coritiba'}
    ,{ 'id': 'liziero', 'nome': 'LIZIERO', 'over': 80, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'coritiba'}
    ,{ 'id': 'alexander', 'nome': 'ALEXANDER', 'over': 80, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'fluminense'}
    ,{ 'id': 'caio alexandre', 'nome': 'CAIO ALEXANDRE', 'over': 80, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'fortaleza'}
    ,{ 'id': 'vidal', 'nome': 'VIDAL', 'over': 80, 'pos': 'VOL', 'idpos': 4, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'adryelson', 'nome': 'ADRYELSON', 'over': 80, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'botafogo'}
    ,{ 'id': 'kusevic', 'nome': 'KUSEVIC', 'over': 80, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'coritiba'}
    ,{ 'id': 'moledo', 'nome': 'MOLEDO', 'over': 80, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'internacional'}
    ,{ 'id': 'luan_pal', 'nome': 'LUAN', 'over': 80, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'palmeiras'}
    ,{ 'id': 'alan franco', 'nome': 'ALAN FRANCO', 'over': 80, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'sao_paulo'}
    ,{ 'id': 'rodrigo caio', 'nome': 'RODRIGO CAIO', 'over': 80, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'OURO', 'time': 'flamengo'}
    ,{ 'id': 'lucas piton', 'nome': 'LUCAS PITON', 'over': 80, 'pos': 'LE', 'idpos': 6, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'puma', 'nome': 'PUMA', 'over': 80, 'pos': 'LD', 'idpos': 7, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'luis castro', 'nome': 'LUIS CASTRO', 'over': 80, 'pos': 'TEC', 'idpos': 9, 'tipo': 'OURO', 'time': 'botafogo'}
    ,{ 'id': 'odair hellmann', 'nome': 'ODAIR HELLMANN', 'over': 80, 'pos': 'TEC', 'idpos': 9, 'tipo': 'OURO', 'time': 'santos'}
    ,{ 'id': 'm.barbieri', 'nome': 'M.BARBIERI', 'over': 80, 'pos': 'TEC', 'idpos': 9, 'tipo': 'OURO', 'time': 'vasco'}
    ,{ 'id': 'deyverson', 'nome': 'DEYVERSON', 'over': 79, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'cuiaba'}
    ,{ 'id': 'lelê', 'nome': 'LELÊ', 'over': 79, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'breno lopes', 'nome': 'BRENO LOPES', 'over': 79, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'palmeiras'}
    ,{ 'id': 'rafael navarro', 'nome': 'RAFAEL NAVARRO', 'over': 79, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'palmeiras'}
    ,{ 'id': 'flaco lopez', 'nome': 'FLACO LOPEZ', 'over': 79, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'palmeiras'}
    ,{ 'id': 'john kennedy', 'nome': 'JOHN KENNEDY', 'over': 79, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'diego souza', 'nome': 'DIEGO SOUZA', 'over': 79, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'felipe azevedo', 'nome': 'FELIPE AZEVEDO', 'over': 79, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'ademir', 'nome': 'ADEMIR', 'over': 79, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'biel', 'nome': 'BIEL', 'over': 79, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'kaio cesar', 'nome': 'KAIO CESAR', 'over': 79, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'coritiba'}
    ,{ 'id': 'alê', 'nome': 'ALÊ', 'over': 79, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'daniel', 'nome': 'DANIEL', 'over': 79, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'bruninho', 'nome': 'BRUNINHO', 'over': 79, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'bragantino'}
    ,{ 'id': 'm. frança', 'nome': 'M. FRANÇA', 'over': 79, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'flamengo'}
    ,{ 'id': 'pochettino', 'nome': 'POCHETTINO', 'over': 79, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'fortaleza'}
    ,{ 'id': 'lucas lima', 'nome': 'LUCAS LIMA', 'over': 79, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'santos'}
    ,{ 'id': 'orellano', 'nome': 'ORELLANO', 'over': 79, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'vasco'}
    ,{ 'id': 'battaglia', 'nome': 'BATTAGLIA', 'over': 79, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'atletico_mg'}
    ,{ 'id': 'yago felipe', 'nome': 'YAGO FELIPE', 'over': 79, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'martinelli', 'nome': 'MARTINELLI', 'over': 79, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'pepê', 'nome': 'PEPÊ', 'over': 79, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'luan', 'nome': 'LUAN', 'over': 79, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'sao_paulo'}
    ,{ 'id': 'iago maidana', 'nome': 'IAGO MAIDANA', 'over': 79, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'lemos', 'nome': 'LEMOS', 'over': 79, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'atletico_mg'}
    ,{ 'id': 'natan', 'nome': 'NATAN', 'over': 79, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'bragantino'}
    ,{ 'id': 'alan empereur', 'nome': 'ALAN EMPEREUR', 'over': 79, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'cuiaba'}
    ,{ 'id': 'marllon', 'nome': 'MARLLON', 'over': 79, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'cuiaba'}
    ,{ 'id': 'lucas halter', 'nome': 'LUCAS HALTER', 'over': 79, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'goias'}
    ,{ 'id': 'bruno alves', 'nome': 'BRUNO ALVES', 'over': 79, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'felipe melo', 'nome': 'FELIPE MELO', 'over': 79, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'nicolas', 'nome': 'NICOLAS', 'over': 79, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'sander', 'nome': 'SANDER', 'over': 79, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'goias'}
    ,{ 'id': 'hurtado', 'nome': 'HURTADO', 'over': 79, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'bragantino'}
    ,{ 'id': 'natanael', 'nome': 'NATANAEL', 'over': 79, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'coritiba'}
    ,{ 'id': 'varela', 'nome': 'VARELA', 'over': 79, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'flamengo'}
    ,{ 'id': 'matheuzinho', 'nome': 'MATHEUZINHO', 'over': 79, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'flamengo'}
    ,{ 'id': 'guga', 'nome': 'GUGA', 'over': 79, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'mário fernandes', 'nome': 'MÁRIO FERNANDES', 'over': 79, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'internacional'}
    ,{ 'id': 'cavichioli', 'nome': 'CAVICHIOLI', 'over': 79, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'rafael cabral', 'nome': 'RAFAEL CABRAL', 'over': 79, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'walter', 'nome': 'WALTER', 'over': 79, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'cuiaba'}
    ,{ 'id': 'f. miguel', 'nome': 'F. MIGUEL', 'over': 79, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'fortaleza'}
    ,{ 'id': 'rafael_sp', 'nome': 'RAFAEL', 'over': 79, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'sao_paulo'}
    ,{ 'id': 'paulo turra', 'nome': 'PAULO TURRA', 'over': 79, 'pos': 'TEC', 'idpos': 9, 'tipo': 'PRATA', 'time': 'cap'}
    ,{ 'id': 'fernando lázaro', 'nome': 'FERNANDO LÁZARO', 'over': 79, 'pos': 'TEC', 'idpos': 9, 'tipo': 'PRATA', 'time': 'corinthians'}
    ,{ 'id': 'pedrino_cor', 'nome': 'PEDRINHO', 'over': 78, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'corinthians'}
    ,{ 'id': 'vinicius', 'nome': 'VINICIUS', 'over': 78, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'goias'}
    ,{ 'id': 'giovani', 'nome': 'GIOVANI', 'over': 78, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'palmeiras'}
    ,{ 'id': 'vitor jacaré', 'nome': 'VITOR JACARÉ', 'over': 78, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'lucas fernandes', 'nome': 'LUCAS FERNANDES', 'over': 78, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'botafogo'}
    ,{ 'id': 'bruno rodrigues', 'nome': 'BRUNO RODRIGUES', 'over': 78, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'cauly', 'nome': 'CAULY', 'over': 78, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'thaciano', 'nome': 'THACIANO', 'over': 78, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'daniel junior', 'nome': 'DANIEL JUNIOR', 'over': 78, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'ceppelini', 'nome': 'CEPPELINI', 'over': 78, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'cuiaba'}
    ,{ 'id': 'victor hugo', 'nome': 'VICTOR HUGO', 'over': 78, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'flamengo'}
    ,{ 'id': 'calebe', 'nome': 'CALEBE', 'over': 78, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'fortaleza'}
    ,{ 'id': 'lucas barbosa', 'nome': 'LUCAS BARBOSA', 'over': 78, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'santos'}
    ,{ 'id': 'marlon gomes', 'nome': 'MARLON GOMES', 'over': 78, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'vasco'}
    ,{ 'id': 'nikão', 'nome': 'NIKÃO', 'over': 78, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'rezende', 'nome': 'REZENDE', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'm. fernandes', 'nome': 'M. FERNANDES', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'bragantino'}
    ,{ 'id': 'erick', 'nome': 'ERICK', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'cap'}
    ,{ 'id': 'bruno gomes', 'nome': 'BRUNO GOMES', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'coritiba'}
    ,{ 'id': 'trindade', 'nome': 'TRINDADE', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'coritiba'}
    ,{ 'id': 'felipe machado', 'nome': 'FELIPE MACHADO', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'neto moura', 'nome': 'NETO MOURA', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'wallison', 'nome': 'WALLISON', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'hércules', 'nome': 'HÉRCULES', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'fortaleza'}
    ,{ 'id': 'lucas sasha', 'nome': 'LUCAS SASHA', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'fortaleza'}
    ,{ 'id': 'carballo', 'nome': 'CARBALLO', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'villasanti', 'nome': 'VILLASANTI', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'fernández', 'nome': 'FERNÁNDEZ', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'santos'}
    ,{ 'id': 'mendez', 'nome': 'MENDEZ', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'sao_paulo'}
    ,{ 'id': 'pulgar', 'nome': 'PULGAR', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'flamengo'}
    ,{ 'id': 'lima', 'nome': 'LIMA', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'ramiro', 'nome': 'RAMIRO', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'richard', 'nome': 'RICHARD', 'over': 78, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'éder', 'nome': 'ÉDER', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'ricardo silva', 'nome': 'RICARDO SILVA', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'vitor hugo', 'nome': 'VITOR HUGO', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'segovia', 'nome': 'SEGOVIA', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'botafogo'}
    ,{ 'id': 'lucas cunha', 'nome': 'LUCAS CUNHA', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'bragantino'}
    ,{ 'id': 'raul', 'nome': 'RAUL', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'bragantino'}
    ,{ 'id': 'rodrigo pinho', 'nome': 'RODRIGO PINHO', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'coritiba'}
    ,{ 'id': 'lucas oliveira', 'nome': 'LUCAS OLIVEIRA', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'brítez', 'nome': 'BRÍTEZ', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'fortaleza'}
    ,{ 'id': 'beraldo', 'nome': 'BERALDO', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'sao_paulo'}
    ,{ 'id': 'capasso', 'nome': 'CAPASSO', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'vasco'}
    ,{ 'id': 'pablo', 'nome': 'PABLO', 'over': 78, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'flamengo'}
    ,{ 'id': 'chávez', 'nome': 'CHÁVEZ', 'over': 78, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'jamerson', 'nome': 'JAMERSON', 'over': 78, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'coritiba'}
    ,{ 'id': 'kaiki', 'nome': 'KAIKI', 'over': 78, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'marlon_cru', 'nome': 'MARLON', 'over': 78, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'caio paulista', 'nome': 'CAIO PAULISTA', 'over': 78, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'sao_paulo'}
    ,{ 'id': 'bruno pacheco', 'nome': 'BRUNO PACHECO', 'over': 78, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'fortaleza'}
    ,{ 'id': 'felipe jonathan', 'nome': 'FELIPE JONATHAN', 'over': 78, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'santos'}
    ,{ 'id': 'rafinha', 'nome': 'RAFINHA', 'over': 78, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'sao_paulo'}
    ,{ 'id': 'raí ramos', 'nome': 'RAÍ RAMOS', 'over': 78, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'sao_paulo'}
    ,{ 'id': 'rafael', 'nome': 'RAFAEL', 'over': 78, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'botafogo'}
    ,{ 'id': 'aderlan', 'nome': 'ADERLAN', 'over': 78, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'bragantino'}
    ,{ 'id': 'gabriel', 'nome': 'GABRIEL', 'over': 78, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'coritiba'}
    ,{ 'id': 'adriel', 'nome': 'ADRIEL', 'over': 78, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'marcelo lomba', 'nome': 'MARCELO LOMBA', 'over': 78, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'palmeiras'}
    ,{ 'id': 'keiller', 'nome': 'KEILLER', 'over': 78, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'internacional'}
    ,{ 'id': 'ivan', 'nome': 'IVAN', 'over': 78, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'vasco'}
    ,{ 'id': 'leo jardim', 'nome': 'LEO JARDIM', 'over': 78, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'vasco'}
    ,{ 'id': 'renato paiva', 'nome': 'RENATO PAIVA', 'over': 78, 'pos': 'TEC', 'idpos': 9, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'pepa', 'nome': 'PEPA', 'over': 78, 'pos': 'TEC', 'idpos': 9, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'ivo vieira', 'nome': 'IVO VIEIRA', 'over': 78, 'pos': 'TEC', 'idpos': 9, 'tipo': 'PRATA', 'time': 'cuiaba'}
    ,{ 'id': 'emerson ávila', 'nome': 'EMERSON ÁVILA', 'over': 78, 'pos': 'TEC', 'idpos': 9, 'tipo': 'PRATA', 'time': 'goias'}
    ,{ 'id': 'h. almeida', 'nome': 'H. ALMEIDA', 'over': 77, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'everaldo_bh', 'nome': 'EVERALDO', 'over': 77, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'bruno tabata', 'nome': 'BRUNO TABATA', 'over': 77, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'palmeiras'}
    ,{ 'id': 'igor gomes', 'nome': 'IGOR GOMES', 'over': 77, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'atletico_mg'}
    ,{ 'id': 'michel arújo', 'nome': 'MICHEL ARÚJO', 'over': 77, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'sao_paulo'}
    ,{ 'id': 'roni', 'nome': 'RONI', 'over': 77, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'corinthians'}
    ,{ 'id': 'lucas silva', 'nome': 'LUCAS SILVA', 'over': 77, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'christian', 'nome': 'CHRISTIAN', 'over': 77, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'cap'}
    ,{ 'id': 'léo cittadini', 'nome': 'LÉO CITTADINI', 'over': 77, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'cap'}
    ,{ 'id': 'david braz', 'nome': 'DAVID BRAZ', 'over': 77, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'balbuena', 'nome': 'BALBUENA', 'over': 77, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'corinthians'}
    ,{ 'id': 'vanderlan', 'nome': 'VANDERLAN', 'over': 77, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'palmeiras'}
    ,{ 'id': 'dodô', 'nome': 'DODÔ', 'over': 77, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'atletico_mg'}
    ,{ 'id': 'matheus bahia', 'nome': 'MATHEUS BAHIA', 'over': 77, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'uendel', 'nome': 'UENDEL', 'over': 77, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'cuiaba'}
    ,{ 'id': 'fábio', 'nome': 'FÁBIO', 'over': 77, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'tinga', 'nome': 'TINGA', 'over': 77, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'fortaleza'}
    ,{ 'id': 'apodi', 'nome': 'APODI', 'over': 77, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'goias'}
    ,{ 'id': 'cleiton', 'nome': 'CLEITON', 'over': 77, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'bragantino'}
    ,{ 'id': 'd. fernandes', 'nome': 'D. FERNANDES', 'over': 77, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'marcos felipe', 'nome': 'MARCOS FELIPE', 'over': 77, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'vladmir', 'nome': 'VLADMIR', 'over': 77, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'santos'}
    ,{ 'id': 'pedro caixinha', 'nome': 'PEDRO CAIXINHA', 'over': 77, 'pos': 'TEC', 'idpos': 9, 'tipo': 'PRATA', 'time': 'bragantino'}
    ,{ 'id': 'canobbio', 'nome': 'CANOBBIO', 'over': 76, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'cap'}
    ,{ 'id': 'cirino', 'nome': 'CIRINO', 'over': 76, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'cap'}
    ,{ 'id': 'pottker', 'nome': 'POTTKER', 'over': 76, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'coritiba'}
    ,{ 'id': 'robson', 'nome': 'ROBSON', 'over': 76, 'pos': 'ATA', 'idpos': 1, 'tipo': 'PRATA', 'time': 'coritiba'}
    ,{ 'id': 'alisson', 'nome': 'ALISSON', 'over': 76, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'sao_paulo'}
    ,{ 'id': 'mugni', 'nome': 'MUGNI', 'over': 76, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'rever', 'nome': 'REVER', 'over': 76, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'atletico_mg'}
    ,{ 'id': 'bruno fuchs', 'nome': 'BRUNO FUCHS', 'over': 76, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'atletico_mg'}
    ,{ 'id': 'pedro henrique', 'nome': 'PEDRO HENRIQUE', 'over': 76, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'cap'}
    ,{ 'id': 'robson bambu', 'nome': 'ROBSON BAMBU', 'over': 76, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'vasco'}
    ,{ 'id': 'diogo barbosa', 'nome': 'DIOGO BARBOSA', 'over': 76, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'fernando', 'nome': 'FERNANDO', 'over': 76, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'cap'}
    ,{ 'id': 'pedrinho', 'nome': 'PEDRINHO', 'over': 76, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'cap'}
    ,{ 'id': 'reynaldo', 'nome': 'REYNALDO', 'over': 76, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'lucas pires', 'nome': 'LUCAS PIRES', 'over': 76, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'santos'}
    ,{ 'id': 'madson', 'nome': 'MADSON', 'over': 76, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'cap'}
    ,{ 'id': 'orejuela', 'nome': 'OREJUELA', 'over': 76, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'sao_paulo'}
    ,{ 'id': 'nino paraíba', 'nome': 'NINO PARAÍBA', 'over': 76, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'di placido', 'nome': 'DI PLACIDO', 'over': 76, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'botafogo'}
    ,{ 'id': 'william', 'nome': 'WILLIAM', 'over': 76, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'igor formiga', 'nome': 'IGOR FORMIGA', 'over': 76, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'matheus cunha', 'nome': 'MATHEUS CUNHA', 'over': 76, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'flamengo'}
    ,{ 'id': 'brenno', 'nome': 'BRENNO', 'over': 76, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'felipe alves', 'nome': 'FELIPE ALVES', 'over': 76, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'sao_paulo'}
    ,{ 'id': 'joão ricardo', 'nome': 'JOÃO RICARDO', 'over': 76, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'fortaleza'}
    ,{ 'id': 'john', 'nome': 'JOHN', 'over': 76, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'internacional'}
    ,{ 'id': 'luan polli', 'nome': 'LUAN POLLI', 'over': 76, 'pos': 'GOL', 'idpos': 8, 'tipo': 'PRATA', 'time': 'coritiba'}
    ,{ 'id': 'barletta', 'nome': 'BARLETTA', 'over': 75, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'corinthians'}
    ,{ 'id': 'everaldo', 'nome': 'EVERALDO', 'over': 75, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'america_mg'}
    ,{ 'id': 'kayky', 'nome': 'KAYKY', 'over': 75, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'bahia'}
    ,{ 'id': 'wesley', 'nome': 'WESLEY', 'over': 75, 'pos': 'PON', 'idpos': 2, 'tipo': 'PRATA', 'time': 'cruzeiro'}
    ,{ 'id': 'nathan_gre', 'nome': 'NATHAN', 'over': 75, 'pos': 'MEI', 'idpos': 3, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'felipe bastos', 'nome': 'FELIPE BASTOS', 'over': 75, 'pos': 'VOL', 'idpos': 4, 'tipo': 'PRATA', 'time': 'goias'}
    ,{ 'id': 'vitor mendes', 'nome': 'VITOR MENDES', 'over': 75, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'PRATA', 'time': 'fluminense'}
    ,{ 'id': 'lucas esteves', 'nome': 'LUCAS ESTEVES', 'over': 75, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'fortaleza'}
    ,{ 'id': 'hugo', 'nome': 'HUGO', 'over': 75, 'pos': 'LE', 'idpos': 6, 'tipo': 'PRATA', 'time': 'botafogo'}
    ,{ 'id': 'joão pedro', 'nome': 'JOÃO PEDRO', 'over': 75, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'gremio'}
    ,{ 'id': 'g. inocêncio', 'nome': 'G. INOCÊNCIO', 'over': 75, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'santos'}
    ,{ 'id': 'joão lucas', 'nome': 'JOÃO LUCAS', 'over': 75, 'pos': 'LD', 'idpos': 7, 'tipo': 'PRATA', 'time': 'santos'}
    ,{ 'id': 'galdinho', 'nome': 'GALDINHO', 'over': 74, 'pos': 'ATA', 'idpos': 1, 'tipo': 'BRONZE', 'time': 'gremio'}
    ,{ 'id': 'gustavinho', 'nome': 'GUSTAVINHO', 'over': 74, 'pos': 'PON', 'idpos': 2, 'tipo': 'BRONZE', 'time': 'gremio'}
    ,{ 'id': 'davó', 'nome': 'DAVÓ', 'over': 74, 'pos': 'PON', 'idpos': 2, 'tipo': 'BRONZE', 'time': 'cruzeiro'}
    ,{ 'id': 'w. silva', 'nome': 'W. SILVA', 'over': 74, 'pos': 'PON', 'idpos': 2, 'tipo': 'BRONZE', 'time': 'cuiaba'}
    ,{ 'id': 'giovanni', 'nome': 'GIOVANNI', 'over': 74, 'pos': 'MEI', 'idpos': 3, 'tipo': 'BRONZE', 'time': 'fluminense'}
    ,{ 'id': 'jailson', 'nome': 'JAILSON', 'over': 74, 'pos': 'VOL', 'idpos': 4, 'tipo': 'BRONZE', 'time': 'palmeiras'}
    ,{ 'id': 'gabriel pirani', 'nome': 'GABRIEL PIRANI', 'over': 74, 'pos': 'VOL', 'idpos': 4, 'tipo': 'BRONZE', 'time': 'fluminense'}
    ,{ 'id': 'nathan silva', 'nome': 'NATHAN SILVA', 'over': 74, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'BRONZE', 'time': 'atletico_mg'}
    ,{ 'id': 'david duarte', 'nome': 'DAVID DUARTE', 'over': 74, 'pos': 'ZAG', 'idpos': 5, 'tipo': 'BRONZE', 'time': 'bahia'}
    ,{ 'id': 'rubens', 'nome': 'RUBENS', 'over': 74, 'pos': 'LE', 'idpos': 6, 'tipo': 'BRONZE', 'time': 'atletico_mg'}
    ,{ 'id': 'matheus bidu', 'nome': 'MATHEUS BIDU', 'over': 74, 'pos': 'LE', 'idpos': 6, 'tipo': 'BRONZE', 'time': 'corinthians'}
    ,{ 'id': 'thauan lara', 'nome': 'THAUAN LARA', 'over': 74, 'pos': 'LE', 'idpos': 6, 'tipo': 'BRONZE', 'time': 'internacional'}
    ,{ 'id': 'danilo avelar', 'nome': 'DANILO AVELAR', 'over': 74, 'pos': 'LE', 'idpos': 6, 'tipo': 'BRONZE', 'time': 'america_mg'}
    ,{ 'id': 'marlon', 'nome': 'MARLON', 'over': 74, 'pos': 'LE', 'idpos': 6, 'tipo': 'BRONZE', 'time': 'america_mg'}
    ,{ 'id': 'rafael ramos', 'nome': 'RAFAEL RAMOS', 'over': 74, 'pos': 'LD', 'idpos': 7, 'tipo': 'BRONZE', 'time': 'corinthians'}
    ,{ 'id': 'cicinho', 'nome': 'CICINHO', 'over': 74, 'pos': 'LD', 'idpos': 7, 'tipo': 'BRONZE', 'time': 'bahia'}
    ,{ 'id': 'nathan', 'nome': 'NATHAN', 'over': 74, 'pos': 'LD', 'idpos': 7, 'tipo': 'BRONZE', 'time': 'santos'}
    ,{ 'id': 'pedro rangel', 'nome': 'PEDRO RANGEL', 'over': 74, 'pos': 'GOL', 'idpos': 8, 'tipo': 'BRONZE', 'time': 'fluminense'}
    ,{ 'id': 'junior moraes', 'nome': 'JUNIOR MORAES', 'over': 73, 'pos': 'ATA', 'idpos': 1, 'tipo': 'BRONZE', 'time': 'corinthians'}
    ,{ 'id': 'marrony', 'nome': 'MARRONY', 'over': 73, 'pos': 'PON', 'idpos': 2, 'tipo': 'BRONZE', 'time': 'fluminense'}
    ,{ 'id': 'thiago santos', 'nome': 'THIAGO SANTOS', 'over': 73, 'pos': 'VOL', 'idpos': 4, 'tipo': 'BRONZE', 'time': 'fluminense'}
    ,{ 'id': 'victor luis', 'nome': 'VICTOR LUIS', 'over': 73, 'pos': 'LE', 'idpos': 6, 'tipo': 'BRONZE', 'time': 'coritiba'}
    ,{ 'id': 'hugo_goi', 'nome': 'HUGO', 'over': 73, 'pos': 'LE', 'idpos': 6, 'tipo': 'BRONZE', 'time': 'goias'}
    ,{ 'id': 'marcinho', 'nome': 'MARCINHO', 'over': 73, 'pos': 'LD', 'idpos': 7, 'tipo': 'BRONZE', 'time': 'america_mg'}
    ,{ 'id': 'maguinho', 'nome': 'MAGUINHO', 'over': 73, 'pos': 'LD', 'idpos': 7, 'tipo': 'BRONZE', 'time': 'goias'}
    ,{ 'id': 'hugo souza', 'nome': 'HUGO SOUZA', 'over': 73, 'pos': 'GOL', 'idpos': 8, 'tipo': 'BRONZE', 'time': 'flamengo'}
];

function cache(){
    var jogtime = [];
    var times = [];
    var fotos = [];
    var cartas = [];
    for(var x = 0; x<window.nomes.length; x++){
        times[x] = window.nomes[x].time;
        fotos[x] = window.nomes[x].id;
        cartas[x] = window.nomes[x].tipo;
        clube = new Image();
        clube.src = './img/times/' + times[x] + '.png';
        fotinho = new Image();
        fotinho.src = './img/cartas/' + fotos[x] + '.png';
        cartinha = new Image();
        cartinha.src = './img/cartas/' + cartas[x] + '.png';
    }
    
    
}


function pontuaFinal(){
    if(din >= 0){
        var total = 0
        for(var i = 0; i < 12; i++){
            total = total + jogTime[i].over;
        } 
    } else total = 0;


    pont = document.getElementById('pontuafinal');
    pont.innerHTML = total;

}

function sel(){
    cache();
    document.getElementById('carrega').innerHTML = "CARREGANDO...";
    window.form = document.getElementById('formulario').value;
    const element = document.getElementById("div_formação");
    setTimeout(() => element.style.opacity = '0', 2000);
    setTimeout(() => element.remove(), 3000);
    sortear();

    switch(window.form){

        case '4-4-2':
        window.zaglim = 2;
        window.vollim = 2;
        window.meilim = 2;
        window.atalim = 1;
        window.ponlim = 1;
        break;

        case '4-3-3':
        window.zaglim = 2;
        window.vollim = 1;
        window.meilim = 2;
        window.atalim = 1;
        window.ponlim = 2;
        break;

        case '3-5-2':
        window.nomes = window.nomes.filter(nome => nome.pos != "LD");
        window.nomes = window.nomes.filter(nome => nome.pos != "LE");
        window.zaglim = 3;
        window.vollim = 3;
        window.meilim = 2;
        window.atalim = 1;
        window.ponlim = 1;
        break;

        case '4-5-1':
        window.nomes = window.nomes.filter(nome => nome.pos != "PON");
        window.zaglim = 2;
        window.vollim = 2;
        window.meilim = 3;
        window.atalim = 1;
        break;
    }
}

function sortNum(){    
    do {
        window.i1 = parseInt(Math.random() * window.nomes.length);
        window.j1 = parseInt(Math.random() * window.nomes.length);
        window.m1 = parseInt(Math.random() * window.nomes.length);
        window.n1 = parseInt(Math.random() * window.nomes.length);
       } while (window.i1 == window.j1 || window.i1 == window.m1 || window.j1 == window.m1 || window.n1 == window.i1 || window. n1 == window.j1 || window.n1 == window.m1);
    jog = [window.i1,window.j1,window.m1,window.n1]; 
    
    jog.sort((a, b) => {
        return a - b;
    });

    window.i = jog[0];
    window.j = jog[1];
    window.m = jog[2];
    window.n = jog[3];
}

function reload(){
    document.location.reload(true);
}

function clickLoja(){

    if(cont > 0){
        cont = cont - 1;
        din = din - 1;
        var contador = document.getElementById('cont');
        var dinheiro = document.getElementById('din');
        dinheiro.innerHTML = din;
        contador.innerHTML = cont;
        sortear();
    }
    
}


function sortear() {

    if(window.numTime.total == 12 || din < 0){

        const element4 = document.getElementById("pontuacao");
        element4.style.opacity = '1';
        const element = document.getElementById("ladinho");
        element.style.opacity = '0';
        setTimeout(() => element.remove(), 1000);
        const element2 = document.getElementById("loja");
        element2.style.opacity = '0';
        setTimeout(() => element2.remove(), 1000);
        const element3 = document.getElementById("cont");
        element3.style.opacity = '0';
        setTimeout(() => element3.remove(), 1000);        
        const element5 = document.getElementById("ouro");
        element5.style.opacity = '0';
        setTimeout(() => element5.remove(), 1000);  
        const element6 = document.getElementById("moeda");
        element6.style.opacity = '0';
        setTimeout(() => element6.remove(), 1000);  

        pontuaFinal();
    }

    sortNum();  
      
    jog = [window.nomes[window.i],window.nomes[window.j],window.nomes[window.m],window.nomes[window.n]]; 

    window.carta1_over = jog[0].over;
    window.carta1_nome = jog[0].nome;
    window.carta1_id = jog[0].id;
    window.carta1_pos = jog[0].pos;
    window.carta1_tipo = jog[0].tipo;
    window.carta1_time = jog[0].time;
    window.carta1_img ='./img/cartas/' + window.carta1_id  + ".png";
    window.carta1_time ='./img/times/' + window.carta1_time  + ".png"; 

    img = document.getElementById('carta1_pos');
    img.innerHTML = window.carta1_pos;
    img = document.getElementById('carta1_over');
    img.innerHTML = window.carta1_over;
    img = document.getElementById('carta1_nome');
    img.innerHTML = window.carta1_nome;
    img = document.getElementById('carta1_tipo');
    img.innerHTML = window.carta1_tipo;

    img = document.getElementById('carta1');
    img.src ='./img/cartas/' + window.carta1_tipo  + ".png"; 

    img = document.getElementById('carta1_img');
    img.src = window.carta1_img;

    img = document.getElementById('carta1_time');
    img.src = window.carta1_time; 


    window.carta2_over = jog[1].over;
    window.carta2_nome = jog[1].nome;
    window.carta2_id = jog[1].id;
    window.carta2_pos = jog[1].pos;
    window.carta2_tipo = jog[1].tipo;
    window.carta2_time = jog[1].time;
    window.carta2_img ='./img/cartas/' + window.carta2_id  + ".png";
    window.carta2_time ='./img/times/' + window.carta2_time  + ".png"; 

    img = document.getElementById('carta2_pos');
    img.innerHTML = window.carta2_pos;
    img = document.getElementById('carta2_over');
    img.innerHTML = window.carta2_over;
    img = document.getElementById('carta2_nome');
    img.innerHTML = window.carta2_nome;
    img = document.getElementById('carta2_tipo');
    img.innerHTML = window.carta2_tipo;

    img = document.getElementById('carta2');
    img.src ='./img/cartas/' + window.carta2_tipo  + ".png";

    img = document.getElementById('carta2_img');
    img.src = window.carta2_img;

    img = document.getElementById('carta2_time');
    img.src = window.carta2_time;

    window.carta3_over = jog[2].over;
    window.carta3_nome = jog[2].nome;
    window.carta3_id = jog[2].id;
    window.carta3_pos = jog[2].pos;
    window.carta3_tipo = jog[2].tipo;
    window.carta3_time = jog[2].time;
    window.carta3_img ='./img/cartas/' + window.carta3_id  + ".png";
    window.carta3_time ='./img/times/' + window.carta3_time  + ".png"; 

    img = document.getElementById('carta3_pos');
    img.innerHTML = window.carta3_pos;
    img = document.getElementById('carta3_over');
    img.innerHTML = window.carta3_over;
    img = document.getElementById('carta3_nome');
    img.innerHTML = window.carta3_nome;
    img = document.getElementById('carta3_tipo');
    img.innerHTML = window.carta3_tipo;

    img = document.getElementById('carta3');
    img.src ='./img/cartas/' + window.carta3_tipo  + ".png";

    img = document.getElementById('carta3_img');
    img.src = window.carta3_img;

    img = document.getElementById('carta3_time');
    img.src = window.carta3_time;

    window.carta4_over = jog[3].over;
    window.carta4_nome = jog[3].nome;
    window.carta4_id = jog[3].id;
    window.carta4_pos = jog[3].pos;
    window.carta4_tipo = jog[3].tipo;
    window.carta4_time = jog[3].time;
    window.carta4_img ='./img/cartas/' + window.carta4_id  + ".png";
    window.carta4_time ='./img/times/' + window.carta4_time  + ".png"; 

    img = document.getElementById('carta4');
    img.src ='./img/cartas/' + window.carta4_tipo  + ".png";

    img = document.getElementById('carta4_pos');
    img.innerHTML = window.carta4_pos;
    img = document.getElementById('carta4_over');
    img.innerHTML = window.carta4_over;
    img = document.getElementById('carta4_nome');
    img.innerHTML = window.carta4_nome;
    img = document.getElementById('carta4_tipo');
    img.innerHTML = window.carta4_tipo;

    img = document.getElementById('carta4_img');
    img.src = window.carta4_img;

    img = document.getElementById('carta4_time');
    img.src = window.carta4_time; 

    if(carta1_over >= 90){
        document.getElementById("carta1_pos").style.opacity = 0;
        document.getElementById("carta1_time").style.opacity = 0;
        document.getElementById("carta1_nome").style.opacity = 0;
        document.getElementById("carta1_pos").style.opacity = 0;
        document.getElementById("carta1_img").style.opacity = 0;
        document.getElementById("carta1_over").style.opacity = 0;
        document.getElementById("cartinha1").style.transition = "opacity 1000ms ease-in";
        setTimeout(() => document.getElementById("cartinha1").style.opacity = 1, 300);
        setTimeout(() => document.getElementById("carta1_pos").style.opacity = 1, 1300);
        setTimeout(() => document.getElementById("carta1_time").style.opacity = 1, 2300);
        setTimeout(() => document.getElementById("carta1_nome").style.opacity = 1, 4300);
        setTimeout(() => document.getElementById("carta1_img").style.opacity = 1, 4300);
        setTimeout(() => document.getElementById("carta1_over").style.opacity = 1, 3300);
    } else {
        document.getElementById("cartinha1").style.transition = "opacity 500ms linear";
        document.getElementById("cartinha1").style.opacity = 1;
        document.getElementById("carta1_pos").style.opacity = 1;
        document.getElementById("carta1_time").style.opacity = 1;
        document.getElementById("carta1_nome").style.opacity = 1;
        document.getElementById("carta1_pos").style.opacity = 1;
        document.getElementById("carta1_img").style.opacity = 1;
        document.getElementById("carta1_over").style.opacity = 1;
    }
    
    document.getElementById("cartinha2").style.transition = "opacity 500ms linear";
    document.getElementById("cartinha3").style.transition = "opacity 500ms linear";
    document.getElementById("cartinha4").style.transition = "opacity 500ms linear";

   
    document.getElementById("cartinha2").style.opacity = 1;
    document.getElementById("cartinha3").style.opacity = 1;
    document.getElementById("cartinha4").style.opacity = 1;

}

function passa(){

    for(var k = 11; k > 0; k--){
        jogTime[k] = jogTime[k-1];
    }


}

function clickCarta(a) {

    switch (a){
        case window.i:
            var custo = 5;
            din = din - custo;
            dinheiro = document.getElementById('din');
            dinheiro.innerHTML = din;
            break;
        case window.j:
            var custo = 3;
            din = din - custo;
            dinheiro = document.getElementById('din');
            dinheiro.innerHTML = din;
            break;
            break;
        case window.m:
            var custo = 2;
            din = din - custo;
            dinheiro = document.getElementById('din');
            dinheiro.innerHTML = din;
            break;
            break;
        case window.n:
            var custo = 1;
            din = din - custo;
            dinheiro = document.getElementById('din');
            dinheiro.innerHTML = din;
            break;
            break;
    }

    if(jogTime[11].nome == ''){
     if(jogTime[0].nome == ''){  
        
        jogTime[0] = window.nomes[a];
        delete window.nomes[a];

        var fundo = document.getElementById('jog0');
        fundo.src = './img/cartas/' + jogTime[0].tipo  + ".png";
        var nome = document.getElementById('jog0_nome');
        nome.innerHTML = jogTime[0].nome;
        var pos = document.getElementById('jog0_pos');
        pos.innerHTML = jogTime[0].pos;
        var over = document.getElementById('jog0_over');
        over.innerHTML = jogTime[0].over;
        var tipo = document.getElementById('jog0_tipo');
        tipo.innerHTML = jogTime[0].tipo;
        var img = document.getElementById('jog0_img');
        img.src = './img/cartas/' + jogTime[0].id + ".png";
        var time = document.getElementById('jog0_time');
        time.src = './img/times/' + jogTime[0].time + ".png";

        switch(jogTime[0].pos){
            case 'GOL':
                window.numTime.total++;
                numTime.gol = 1;
                window.nomes = window.nomes.filter(nome => nome.pos != "GOL");
            break;
            case 'LD':
                window.numTime.total++;
                numTime.ld = 1;
                window.nomes = window.nomes.filter(nome => nome.pos != "LD");
            break;
            case 'LE':
                window.numTime.total++;
                numTime.le = 1;
                window.nomes = window.nomes.filter(nome => nome.pos != "LE");
            break;
            case 'ZAG':
                window.numTime.total++;
                window.numTime.zag = numTime.zag+1;
                if(window.numTime.zag == window.zaglim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "ZAG");  
                }
            break;
            case 'VOL':
                window.numTime.total++;
                window.numTime.vol = numTime.vol+1;
                if(window.numTime.vol == window.vollim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "VOL");  
                }
            break;
            case 'MEI':
                window.numTime.total++;
                window.numTime.mei = numTime.mei+1;
                if(window.numTime.mei == window.meilim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "MEI");  
                }
            break;
            case 'PON':
                window.numTime.total++;
                window.numTime.pon = numTime.pon+1;
                if(window.numTime.pon == window.ponlim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "PON");  
                }
            break;
            case 'ATA':
                window.numTime.total++;
                window.numTime.ata = numTime.ata+1;
                if(window.numTime.ata == window.atalim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "ATA");  
                }
            break;
            case 'TEC':
                window.numTime.total++;
                numTime.tec = 1;
                window.nomes = window.nomes.filter(nome => nome.pos != "TEC");
            break;

        }

        document.getElementById("cartinha1").style.transition = "opacity 200ms linear";
        document.getElementById("cartinha2").style.transition = "opacity 200ms linear";
        document.getElementById("cartinha3").style.transition = "opacity 200ms linear";
        document.getElementById("cartinha4").style.transition = "opacity 200ms linear";

        document.getElementById("cartinha1").style.opacity = 0;
        document.getElementById("cartinha2").style.opacity = 0;
        document.getElementById("cartinha3").style.opacity = 0;
        document.getElementById("cartinha4").style.opacity = 0;
       
        setTimeout(() => sortear(), 200);

     } else 
     {
        passa();

        jogTime[0] = window.nomes[a];
        delete window.nomes[a];

        switch(jogTime[0].pos){
            case 'GOL':
                window.numTime.total++;
                numTime.gol = 1;
                if(window.numTime.total < 12){
                window.nomes = window.nomes.filter(nome => nome.pos != "GOL");
                }
            break;
            case 'LD':
                window.numTime.total++;
                numTime.ld = 1;
                if(window.numTime.total < 12){
                window.nomes = window.nomes.filter(nome => nome.pos != "LD");
                }
            break;
            case 'LE':
                window.numTime.total++;
                numTime.le = 1;
                if(window.numTime.total < 12){
                window.nomes = window.nomes.filter(nome => nome.pos != "LE");
                }
            break;
            case 'ZAG':
                window.numTime.total++;
                window.numTime.zag = numTime.zag+1;
                if(window.numTime.total < 12){
                if(window.numTime.zag == window.zaglim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "ZAG");  
                }
                }
            break;
            case 'VOL':
                window.numTime.total++;
                window.numTime.vol = numTime.vol+1;
                if(window.numTime.total < 12){
                if(window.numTime.vol == window.vollim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "VOL");  
                }
                }
            break;
            case 'MEI':
                window.numTime.total++;
                window.numTime.mei = numTime.mei+1;
                if(window.numTime.total < 12){
                if(window.numTime.mei == window.meilim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "MEI");  
                }
                }
            break;
            case 'PON':
                window.numTime.total++;
                window.numTime.pon = numTime.pon+1;
                if(window.numTime.total < 12){
                if(window.numTime.pon == window.ponlim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "PON");  
                }
                }
            break;
            case 'ATA':
                window.numTime.total++;
                window.numTime.ata = numTime.ata+1;
                if(window.numTime.total < 12){
                if(window.numTime.ata == window.atalim){
                    window.nomes = window.nomes.filter(nome => nome.pos != "ATA");  
                }
                }
            break;
            case 'TEC':
                window.numTime.total++;
                numTime.tec = 1;
                if(window.numTime.total < 12){
                window.nomes = window.nomes.filter(nome => nome.pos != "TEC");
                }
            break;
 
        }

        jogTime.sort((a, b) => {
            return a.idpos - b.idpos;
        });

        for(var k = 0; k < 12; k++){
            if(jogTime[k].time != ''){
            var id = 'jog'+ k;
            var fundo = document.getElementById(id);
            fundo.src = './img/cartas/' + jogTime[k].tipo  + ".png";
            var nome = document.getElementById(id+'_nome');
            nome.innerHTML = jogTime[k].nome;
            var pos = document.getElementById(id+'_pos');
            pos.innerHTML = jogTime[k].pos;
            var over = document.getElementById(id+'_over');
            over.innerHTML = jogTime[k].over;
            var tipo = document.getElementById(id+'_tipo');
            tipo.innerHTML = jogTime[k].tipo;
            var img = document.getElementById(id+'_img');
            img.src = './img/cartas/' + jogTime[k].id + ".png";
            var time = document.getElementById(id+'_time');
            time.src = './img/times/' + jogTime[k].time + ".png"; 
            }
        }

        document.getElementById("cartinha1").style.transition = "opacity 200ms linear";
        document.getElementById("cartinha2").style.transition = "opacity 200ms linear";
        document.getElementById("cartinha3").style.transition = "opacity 200ms linear";
        document.getElementById("cartinha4").style.transition = "opacity 200ms linear";

        document.getElementById("cartinha1").style.opacity = 0;
        document.getElementById("cartinha2").style.opacity = 0;
        document.getElementById("cartinha3").style.opacity = 0;
        document.getElementById("cartinha4").style.opacity = 0;
        setTimeout(() => sortear(), 200);

    }
    }

}
