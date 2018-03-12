let subject = require('/Users/vikas/Documents/200156157_NCSU/DevOPS/workshops/TestGeneration/TestGeneration/mystery.js')
let mock = require('mock-fs');
try { subject.inc(100, -77); } catch (e) {} 
try { subject.inc(100, -76); } catch (e) {} 
try { subject.inc(99, -77); } catch (e) {} 
try { subject.inc(99, -76); } catch (e) {} 
try { subject.weird(99, 11, 33, "mode"); } catch (e) {} 
try { subject.weird(99, 11, 33, "random"); } catch (e) {} 
try { subject.weird(99, 11, 33, "street"); } catch (e) {} 
try { subject.weird(99, 11, 33, "random"); } catch (e) {} 
try { subject.weird(99, 11, 33, "strictly"); } catch (e) {} 
try { subject.weird(99, 11, 33, "random"); } catch (e) {} 
try { subject.weird(99, 11, 32, "mode"); } catch (e) {} 
try { subject.weird(99, 11, 32, "random"); } catch (e) {} 
try { subject.weird(99, 11, 32, "street"); } catch (e) {} 
try { subject.weird(99, 11, 32, "random"); } catch (e) {} 
try { subject.weird(99, 11, 32, "strictly"); } catch (e) {} 
try { subject.weird(99, 11, 32, "random"); } catch (e) {} 
try { subject.weird(99, 10, 33, "mode"); } catch (e) {} 
try { subject.weird(99, 10, 33, "random"); } catch (e) {} 
try { subject.weird(99, 10, 33, "street"); } catch (e) {} 
try { subject.weird(99, 10, 33, "random"); } catch (e) {} 
try { subject.weird(99, 10, 33, "strictly"); } catch (e) {} 
try { subject.weird(99, 10, 33, "random"); } catch (e) {} 
try { subject.weird(99, 10, 32, "mode"); } catch (e) {} 
try { subject.weird(99, 10, 32, "random"); } catch (e) {} 
try { subject.weird(99, 10, 32, "street"); } catch (e) {} 
try { subject.weird(99, 10, 32, "random"); } catch (e) {} 
try { subject.weird(99, 10, 32, "strictly"); } catch (e) {} 
try { subject.weird(99, 10, 32, "random"); } catch (e) {} 
try { subject.weird(100, 11, 33, "mode"); } catch (e) {} 
try { subject.weird(100, 11, 33, "random"); } catch (e) {} 
try { subject.weird(100, 11, 33, "street"); } catch (e) {} 
try { subject.weird(100, 11, 33, "random"); } catch (e) {} 
try { subject.weird(100, 11, 33, "strictly"); } catch (e) {} 
try { subject.weird(100, 11, 33, "random"); } catch (e) {} 
try { subject.weird(100, 11, 32, "mode"); } catch (e) {} 
try { subject.weird(100, 11, 32, "random"); } catch (e) {} 
try { subject.weird(100, 11, 32, "street"); } catch (e) {} 
try { subject.weird(100, 11, 32, "random"); } catch (e) {} 
try { subject.weird(100, 11, 32, "strictly"); } catch (e) {} 
try { subject.weird(100, 11, 32, "random"); } catch (e) {} 
try { subject.weird(100, 10, 33, "mode"); } catch (e) {} 
try { subject.weird(100, 10, 33, "random"); } catch (e) {} 
try { subject.weird(100, 10, 33, "street"); } catch (e) {} 
try { subject.weird(100, 10, 33, "random"); } catch (e) {} 
try { subject.weird(100, 10, 33, "strictly"); } catch (e) {} 
try { subject.weird(100, 10, 33, "random"); } catch (e) {} 
try { subject.weird(100, 10, 32, "mode"); } catch (e) {} 
try { subject.weird(100, 10, 32, "random"); } catch (e) {} 
try { subject.weird(100, 10, 32, "street"); } catch (e) {} 
try { subject.weird(100, 10, 32, "random"); } catch (e) {} 
try { subject.weird(100, 10, 32, "strictly"); } catch (e) {} 
try { subject.weird(100, 10, 32, "random"); } catch (e) {} 
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } })});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } })});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } })});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } })});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('pathContent/file1', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('pathContent/file1', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } })});
		subject.fileTest('pathContent/file1', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('pathContent/file1', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('pathContent/file1', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('pathContent/file1', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } })});
		subject.fileTest('pathContent/file1', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('pathContent/file1', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('pathContent/file2', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('pathContent/file2', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } })});
		subject.fileTest('pathContent/file2', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('pathContent/file2', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('pathContent/file2', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),file2:mock.file()}});
		subject.fileTest('pathContent/file2', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } })});
		subject.fileTest('pathContent/file2', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('pathContent/file2', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try { subject.normalize(''); } catch (e) {} 
try { subject.format('undefined', '', {}); } catch (e) {} 
try { subject.format('undefined', '', {"strongbow":true}); } catch (e) {} 
try { subject.format('undefined', '', {"strongbow":false}); } catch (e) {} 
try { subject.format('undefined', '', {}); } catch (e) {} 
try { subject.format('undefined', '', {"strongbow":true}); } catch (e) {} 
try { subject.format('undefined', '', {"strongbow":false}); } catch (e) {} 
try { subject.blackListNumber('212-000-0000'); } catch (e) {} 
try { subject.blackListNumber('213-000-0000'); } catch (e) {} 
